const fs = require("fs").promises;
const path = require("path");

async function standardizeLocationPages() {
  const pagesDir = path.join(process.cwd(), "pages");
  const locationsDir = path.join(pagesDir, "locations");

  try {
    // Ensure locations directory exists
    try {
      await fs.mkdir(locationsDir, { recursive: true });
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
    }

    // Get all files in pages directory
    const files = await fs.readdir(pagesDir);

    // Process roofers-in-* files
    for (const file of files) {
      if (file.startsWith("roofers-in-") && file.endsWith(".tsx")) {
        const filePath = path.join(pagesDir, file);
        const content = await fs.readFile(filePath, "utf8");

        // Extract location name
        const location = file
          .replace("roofers-in-", "")
          .replace(".tsx", "")
          .replace(/-/g, " ");

        // Create new dynamic page content
        let newContent = content;

        // Add imports if not present
        if (!newContent.includes("import { GetStaticProps")) {
          newContent = `import { GetStaticProps, GetStaticPaths } from 'next';\n${newContent}`;
        }

        // Add LocationLayout if not present
        if (!newContent.includes("LocationLayout")) {
          newContent = `import LocationLayout from '../../components/LocationLayout';\n${newContent}`;
          // Wrap content in LocationLayout
          newContent = newContent.replace(
            "return (",
            "return (\n    <LocationLayout location={location}>",
          );
          newContent = newContent.replace(
            "</div>",
            "</div>\n    </LocationLayout>",
          );
        }

        // Add getStaticProps
        if (!newContent.includes("export const getStaticProps")) {
          newContent += `\n\nexport const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      location: params?.city || '${location}'
    }
  };
};\n`;
        }

        // Add getStaticPaths if not present
        if (!newContent.includes("export const getStaticPaths")) {
          newContent += `\n\nexport const getStaticPaths: GetStaticPaths = async () => {
  // Import your location data
  const locations = require('../../data/locationData').default;
  
  const paths = locations.map((location) => ({
    params: { city: location.slug }
  }));
  
  return {
    paths,
    fallback: false
  };
};\n`;
        }

        // Create new file in locations directory
        const newFileName = "[city].tsx";
        const newFilePath = path.join(locationsDir, newFileName);

        // Only write if file doesn't exist or is different
        let shouldWrite = true;
        try {
          const existingContent = await fs.readFile(newFilePath, "utf8");
          if (existingContent === newContent) {
            shouldWrite = false;
          }
        } catch (err) {
          // File doesn't exist, proceed with writing
        }

        if (shouldWrite) {
          await fs.writeFile(newFilePath, newContent);
          console.log(`Created dynamic route for ${location}`);
        }

        // Delete old file
        await fs.unlink(filePath);
        console.log(`Removed old file: ${file}`);
      }
    }

    console.log("Completed standardizing location pages");
  } catch (error) {
    console.error("Error standardizing location pages:", error);
  }
}

standardizeLocationPages();
