# rename all .js files to .ts

find src -type f -name "*.js" | while read file; do
  mv "$file" "${file%.js}.ts"
done
