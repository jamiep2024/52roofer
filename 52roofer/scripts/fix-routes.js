const fs = require("fs");
const path = require("path");

const CONFIG = {
  currentDateTime: "2024-12-24 23:56:10",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
};

// Create directory structure
const dirs = ["pages", "pages/services", "components", "public"];

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Rest of your fix-routes.js code
