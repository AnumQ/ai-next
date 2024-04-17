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

# Construct the new filenames with "-lowRes" and "-highRes" appended before the extension for mobile
NEW_NAME_MOBILE_LOWRES_JPG="${BASE_NAME}-mobile-lowRes.jpg"
NEW_NAME_MOBILE_LOWRES_WEBP="${BASE_NAME}-mobile-lowRes.webp"
NEW_NAME_MOBILE_HIGHRES_JPG="${BASE_NAME}-mobile-highRes.jpg"
NEW_NAME_MOBILE_HIGHRES_WEBP="${BASE_NAME}-mobile-highRes.webp"

# Resize and save as low-res for mobile
convert "$INPUT_FILE" -resize 3% -strip -quality 85 "$NEW_NAME_MOBILE_LOWRES_JPG"  
echo " > Created low-res MOBILE JPG: $NEW_NAME_MOBILE_LOWRES_JPG"

# Convert low-res JPG to low-res WEBP
cwebp "$NEW_NAME_MOBILE_LOWRES_JPG" -o "$NEW_NAME_MOBILE_LOWRES_WEBP"
echo " > Created low-res MOBILE WEBP: $NEW_NAME_MOBILE_LOWRES_WEBP"

# Create high-res for mobile 
convert "$INPUT_FILE" -resize 20% -strip -quality 85 "$NEW_NAME_MOBILE_HIGHRES_JPG"
# convert "$INPUT_FILE" -strip -interlace Plane -quality 90  "$NEW_NAME_MOBILE_HIGHRES_JPG"
echo "Created high-res JPG: $NEW_NAME_MOBILE_HIGHRES_JPG"

# Convert high-res JPG to high-res WEBP
cwebp "$NEW_NAME_MOBILE_HIGHRES_JPG" -o "$NEW_NAME_MOBILE_HIGHRES_WEBP"
echo "Created high-res WEBP: $NEW_NAME_MOBILE_HIGHRES_WEBP"


# Construct the new filenames with "-lowRes" and "-highRes" appended before the extension for desktop
NEW_NAME_DESKTOP_LOWRES_JPG="${BASE_NAME}-desktop-lowRes.jpg"
NEW_NAME_DESKTOP_LOWRES_WEBP="${BASE_NAME}-desktop-lowRes.webp"
NEW_NAME_DESKTOP_HIGHRES_JPG="${BASE_NAME}-desktop-highRes.jpg"
NEW_NAME_DESKTOP_HIGHRES_WEBP="${BASE_NAME}-desktop-highRes.webp"
# Resize and save as low-res for desktop
convert "$INPUT_FILE" -resize 40% -strip -quality 85 "$NEW_NAME_DESKTOP_LOWRES_JPG"
echo "Created low-res DESKTOP JPG: $NEW_NAME_DESKTOP_LOWRES_JPG"
# Convert low-res JPG to low-res WEBP
cwebp "$NEW_NAME_DESKTOP_LOWRES_JPG" -o "$NEW_NAME_DESKTOP_LOWRES_WEBP"
echo "Created low-res DESKTOP WEBP: $NEW_NAME_DESKTOP_LOWRES_WEBP"
# Create high-res for mobile 
cp "$INPUT_FILE" "$NEW_NAME_DESKTOP_HIGHRES_JPG"
# convert "$INPUT_FILE" -strip -interlace Plane -quality 90  "$NEW_NAME_MOBILE_HIGHRES_JPG"
echo "Created high-res JPG: $NEW_NAME_DESKTOP_HIGHRES_JPG"
# Convert high-res JPG to high-res WEBP
cwebp "$NEW_NAME_DESKTOP_HIGHRES_JPG" -o "$NEW_NAME_DESKTOP_HIGHRES_WEBP"
echo "Created high-res WEBP: $NEW_NAME_DESKTOP_HIGHRES_WEBP"
echo "Resizing complete"
