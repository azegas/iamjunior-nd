#!/bin/bash

# Find and rename all .js files to .ts, excluding node_modules, dist, and .test.js files
find . -type f -name "*.js" ! -path "*/node_modules/*" ! -path "*/dist/*" ! -name "*.test.js" -exec bash -c 'mv "$0" "${0%.js}.ts"' {} \;

# Find and rename all .jsx files to .tsx, excluding node_modules and dist
find . -type f -name "*.jsx" ! -path "*/node_modules/*" ! -path "*/dist/*" -exec bash -c 'mv "$0" "${0%.jsx}.tsx"' {} \;

echo "Conversion complete: .js files renamed to .ts, .jsx files renamed to .tsx, excluding node_modules and dist directories."
