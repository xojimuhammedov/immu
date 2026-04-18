#!/bin/bash

# Find all files in src/assets
files=$(find src/assets -type f)

for file in $files; do
    # Get the basename (e.g., logo.png)
    basename=$(basename "$file")
    
    # Also get the name without extension (e.g., logo)
    name="${basename%.*}"
    
    # Search for the name or basename in src and index.html
    # We ignore the assets folder itself during search
    count=$(grep -rE "$basename|$name" src index.html --exclude-dir=assets | wc -l)
    
    if [ $count -eq 0 ]; then
        echo "UNUSED: $file"
    fi
done
