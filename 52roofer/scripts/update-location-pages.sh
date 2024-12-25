#!/bin/bash

# Find all location pages
find pages -type f -name "roofers-in-*.tsx" -o -name "locations/*.tsx" | while read -r file; do
  # Skip if file doesn't exist
  [ ! -f "$file" ] && continue
  
  # Replace img tag with HeroImage component
  sed -i '' '/<img/,/\/>/c\
          <HeroImage \
            src="/images/hero-bg.jpg"\
            alt="Roofing services"\
          />' "$file"
  
  # Add HeroImage import if not present
  if ! grep -q "import HeroImage" "$file"; then
    sed -i '' '/^import/a\
import HeroImage from "../components/HeroImage";' "$file"
  fi
done
