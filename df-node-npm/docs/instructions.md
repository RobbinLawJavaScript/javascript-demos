- Open your command line at your src folder.
- In your terminal (in the same folder as your index.html) run the command “npm init” and just press enter until a “package.json” file is in the same folder as your index.html file.
- Install the required packages that we’ll need for this project. In the terminal run the following commands.
  - npm install validator
  - npm install bootstrap
  - npm install parcel -- save-dev
Note: You need to see this in your dependencies for your package.json file.
- In your package.json replace the scripts from what’s there to the following.

```javaScript
{
  "name": "robbin-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "source": "index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^5.2.2",
    "validator": "^13.7.0"
  },
  "devDependencies": {
    "parcel": "^2.8.0"
  }
}

```

# Instructions to Run Project

Initialize this project with "npm install" in this folder.

Run the project with "npm run start"
