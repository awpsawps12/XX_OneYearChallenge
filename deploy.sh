#!/bin/bash
set -o errexit

# Convert from Org to HTML
emacs README.org --batch -f org-html-export-to-html --kill
mv README.html index.html

for dir in */*/; do
    full_path="$dir"/README.org
    emacs $full_path --batch -f org-html-export-to-html --kill
done
