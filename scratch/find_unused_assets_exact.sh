#!/bin/bash

# Find all files in src/assets
files=$(find src/assets -type f)

for file in $files; do
    basename=$(basename "$file")
    
    # Search for the exact basename in src and index.html
    count=$(grep -r "$basename" src index.html --exclude-dir=assets | wc -l)
    
    if [ $count -eq 0 ]; then
        echo "UNUSED: $file"
    fi
done
