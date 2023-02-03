# Instructions to Create a NODE Project

## Download Node and NPM (Node Package Manager) if not already done on this machine.

- [Node Website](https://nodejs.org/en/)

----

- Open an Integrated Terminal at the `src` folder.
- In the the `src` folder run the following command:
  - `npm init`
  - just keep pressing enter until a “package.json” file is in the same folder as your index.html file.
- Install the required packages that we’ll need for most projects in this course.
- In the terminal run the following commands:
```npm
npm install validator
npm install bootstrap
npm install parcel --save-dev
npm install http-server --save-dev
npm install vitest --save-dev
```
- In your package.json file replace the `scripts` from what’s there to the following.

```javaScript
{
  "name": "src",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel",
    "build": "parcel build",
    "test": "vitest --run --reporter verbose",
    "test:watch": "vitest",
    "start:http": "http-server -c-1"
  },
  "author": "robbin law",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^5.2.3",
    "validator": "^13.9.0"
  },
  "devDependencies": {
    "http-server": "^14.1.1",
    "parcel": "^2.8.3",
    "vitest": "^0.28.4"
  }
}
```
- In the `src` folder create a file called `.gitignore` and populate it with the following:
```npm
node_modules/
dist/
.parcel-cache/
```

# Instructions to Run a NODE Project

- Open an Integrated Terminal at the `src` folder.
- In the `src` folder run the following commands:
```npm
npm install
npm run start
```
