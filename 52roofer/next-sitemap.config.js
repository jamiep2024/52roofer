module.exports = {
  "siteUrl": "https://52roofer.co.uk",
  "generateRobotsTxt": true,
  "exclude": [
    "/api/*",
    "/templates/*",
    "/_*"
  ],
  "robotsTxtOptions": {
    "policies": [
      {
        "userAgent": "*",
        "allow": "/"
      }
    ]
  }
}