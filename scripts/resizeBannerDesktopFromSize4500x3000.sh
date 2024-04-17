#!/bin/bash

#Create lowRes version of HigRes images for DESKTOP

# Check if at least one argument is provided
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <path-to-image-file>"
    exit 1
fi

# Assign the first argument to INPUT_FILE
INPUT_FILE="$1"

# Extract the directory path from the file path
dirPath=$(dirname "$INPUT_FILE")

# Extract the base name without the extension
baseName=$(basename "$INPUT_FILE" | cut -d. -f1)

# Combine the directory path with the base name to get the new path
BASE_NAME="$dirPath/$baseName"

# Construct the new filenames with "-lowRes" and "-highRes" appended before the extension
NEW_NAME_LOWRES_JPG="${BASE_NAME}-lowRes.jpg"
NEW_NAME_LOWRES_WEBP="${BASE_NAME}-lowRes.webp"
NEW_NAME_HIGHRES_JPG="${BASE_NAME}-highRes.jpg"
NEW_NAME_HIGHRES_WEBP="${BASE_NAME}-highRes.webp"

# Resize and save as low-res JPG
convert "$INPUT_FILE" -resize 25% -strip -quality 85 "$NEW_NAME_LOWRES_JPG"
echo "Created low-res JPG: $NEW_NAME_LOWRES_JPG"

# Convert low-res JPG to low-res WEBP
cwebp "$NEW_NAME_LOWRES_JPG" -o "$NEW_NAME_LOWRES_WEBP"
echo "Created low-res WEBP: $NEW_NAME_LOWRES_WEBP"

# Create high-res JPG (copy original file)
cp "$INPUT_FILE" "$NEW_NAME_HIGHRES_JPG"
# convert "$INPUT_FILE" -strip -interlace Plane -quality 90  "$NEW_NAME_HIGHRES_JPG"
echo "Created high-res JPG: $NEW_NAME_HIGHRES_JPG"

# Convert high-res JPG to high-res WEBP
cwebp "$NEW_NAME_HIGHRES_JPG" -o "$NEW_NAME_HIGHRES_WEBP"
echo "Created high-res WEBP: $NEW_NAME_HIGHRES_WEBP"

echo "Resizing complete"
