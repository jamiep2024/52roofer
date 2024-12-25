const fs = require("fs").promises;
const path = require("path");

async function convertServicePages() {
  const servicesDir = path.join(process.cwd(), "pages", "services");

  try {
    const files = await fs.readdir(servicesDir);

    for (const file of files) {
      if (file.endsWith(".js")) {
        const filePath = path.join(servicesDir, file);
        const content = await fs.readFile(filePath, "utf8");

        // Convert to TypeScript React component
        let newContent = content;

        // Add React import if not present
        if (!content.includes("import React")) {
          newContent = `import React from 'react';\n${content}`;
        }

        // Add type annotations
        newContent = newContent.replace("const", "const Page: React.FC = ");

        // Add Layout component
        if (!content.includes("ServiceLayout")) {
          newContent = `import ServiceLayout from '../../components/ServiceLayout';\n${newContent}`;
          // Wrap content in ServiceLayout
          newContent = newContent.replace(
            "return (",
            "return (\n    <ServiceLayout>",
          );
          newContent = newContent.replace(
            "</div>",
            "</div>\n    </ServiceLayout>",
          );
        }

        // Add metadata
        if (!content.includes("export const metadata")) {
          const title = file
            .replace(".js", "")
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          newContent = `${newContent}\n\nexport const metadata = {
  title: '${title} | Professional Roofing Services',
  description: 'Expert ${title} services provided by qualified professionals. Get a free quote today.',
};\n`;
        }

        // Write new .tsx file
        const newPath = path.join(servicesDir, file.replace(".js", ".tsx"));
        await fs.writeFile(newPath, newContent);
        console.log(`Converted ${file} to TypeScript`);

        // Delete old .js file
        await fs.unlink(filePath);
      }
    }

    console.log("Completed converting service pages");
  } catch (error) {
    console.error("Error converting service pages:", error);
  }
}

convertServicePages();
