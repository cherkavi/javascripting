# create typescript project
```sh
# 0. create project
git init
echo 'package-lock.json
src/*.js' > .gitignore


# 1. npm init
npm init -y
cat package.json

# 2. typscript 
npm install typescript ts-node --save-dev
find node_modules
npm install -g http-server

# 3. init typescript config
npx tsc --init
cat tsconfig.json

echo '{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    // "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,  
    "strict": true,
    "skipLibCheck": true
  }
}' > tsconfig.json



# 4. create src folder with base file-structure
mkdir src
echo 'console.log("hello")' > src/index.ts
touch src/styles.css

echo '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TypeScript Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 id="empty typescript project"></h1>
  <script src="index.js"></script>
</body>
</html>
' > src/index.html

# 5. build project
tsc

# 6. start project
http-server src

# optional: 7. create scripts in package.json 
jq '.scripts.build="tsc"' package.json > package.json2
mv package.json2 package.json
jq '.scripts.start="http-server src"' package.json > package.json2
mv package.json2 package.json

npm run build
x-www-browser http://127.0.0.1:8080; npm run start
```
