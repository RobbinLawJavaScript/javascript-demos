# Instructions to Create a NODE Project

- Open an Integrated Terminal at the `src` folder.
- In the terminal (in the same folder as your index.html) run the following command:
  - `npm init`
  - just keep pressing enter until a “package.json” file is in the same folder as your index.html file.
- Install the required packages that we’ll need for this project (lab7). In the terminal run the following commands.
  - `npm install validator`
  - `npm install bootstrap`
  - `npm install parcel --save-dev`
- In your package.json file replace the `scripts` from what’s there to the following.

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

# Instructions to Run a NODE Project

- Open an Integrated Terminal at the `src` folder.
- In the terminal (in the same folder as your index.html) run the following commands:
  - `npm install`
  - `npm run start`
