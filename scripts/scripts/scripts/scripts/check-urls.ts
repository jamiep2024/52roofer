mkdir -p scripts

echo 'import fetch from "node-fetch";
import { glob } from "glob";
import * as fs from "fs/promises";
import * as path from "path";

interface UrlCheckResult {
    url: string;
    status: number;
    file: string;
    isError: boolean;
    message?: string;
}

async function checkUrls() {
    const results: UrlCheckResult[] = [];
    console.log("Starting URL check for 52roofer...");
    
    try {
        // Find all relevant files
        const files = await glob("**/*.{ts,tsx,js,jsx}", {
            ignore: [
                "node_modules/**",
                ".next/**",
                "out/**",
                "dist/**",
                "scripts/**"
            ]
        });

        console.log(`Found ${files.length} files to check`);

        for (const file of files) {
            const content = await fs.readFile(file, "utf-8");
            console.log(`\nChecking ${file}...`);
            
            // Match both absolute and relative URLs
            const urlPatterns = [
                /(https?:\/\/[^\s"'"'"'<>)}]+)/g,  // Absolute URLs
                /href=["'"'"']\/[^\s"'"'"'<>)}]+["'"'"']/g,  // Relative URLs in href
                /src=["'"'"']\/[^\s"'"'"'<>)}]+["'"'"']/g    // Relative URLs in src
            ];

            for (const pattern of urlPatterns) {
                const matches = content.match(pattern) || [];
                
                for (const match of matches) {
                    let url = match;
                    
                    // Clean up relative URLs
                    if (url.startsWith("href=") || url.startsWith("src=")) {
                        url = url.split("=")[1].replace(/["'"'"']/g, "");
                        url = `https://52roofer.com${url}`;
                    }

                    try {
                        const response = await fetch(url, {
                            method: "HEAD",
                            headers: {
                                "User-Agent": "52Roofer URL Checker (https://52roofer.com)"
                            }
                        });
                        
                        results.push({
                            url,
                            status: response.status,
                            file,
                            isError: response.status >= 400,
                            message: response.status >= 400 ? `HTTP ${response.status}` : undefined
                        });

                        const status = response.status >= 400 ? "❌" : "✓";
                        console.log(`${status} ${url} - ${response.status}`);
                        
                    } catch (error) {
                        results.push({
                            url,
                            status: 0,
                            file,
                            isError: true,
                            message: error.message
                        });
                        console.error(`❌ ${url} - ${error.message}`);
                    }
                }
            }
        }

        // Generate report
        const report = {
            timestamp: new Date().toISOString(),
            totalUrls: results.length,
            errors: results.filter(r => r.isError).length,
            results: results.sort((a, b) => Number(b.isError) - Number(a.isError))
        };

        // Write report to file
        await fs.writeFile(
            "url-check-report.json",
            JSON.stringify(report, null, 2)
        );

        // Final summary
        console.log("\nURL Check Summary:");
        console.log(`Total URLs checked: ${results.length}`);
        console.log(`Errors found: ${results.filter(r => r.isError).length}`);

        if (results.filter(r => r.isError).length > 0) {
            console.log("\nErrors found:");
            results
                .filter(r => r.isError)
                .forEach(error => {
                    console.log(`\nFile: ${error.file}`);
                    console.log(`URL: ${error.url}`);
                    console.log(`Status: ${error.status}`);
                    if (error.message) console.log(`Message: ${error.message}`);
                });
        }

    } catch (error) {
        console.error("Error during URL check:", error);
        process.exit(1);
    }
}

checkUrls().catch(console.error);' > scripts/check-urls.ts