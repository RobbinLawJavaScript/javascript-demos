# Instructions to Create and Run a NODE Project

### Create a `package.json` file

- Open an Integrated Terminal at the `src` folder.
- In the terminal run the following command:

```text
npm init -y
```

- Install the required packages that we’ll need for this project (lab7). In the terminal run the following commands:

```text
npm install validator@latest
npm install bootstrap@latest
npm install parcel@latest --save-dev
```

- In your `package.json` file replace the `scripts` from what’s there to the following:
- Also include the line with `"source": "index.html",`

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
### Create a .gitignore

- At the `src` folder create a file called `.gitignore`
- Populate the file with the following lines:

```text
node_modules/
dist/
.parcel-cache/
```

### Create an index.html

- At the `src` folder create a file called `index.html`
- Populate the file with the following lines:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="module" src="js/index.js" defer></script>
  <title>Document</title>
</head>
<body>
</body>
</html>
```
### Create a index.js file

- At the `src` folder create a folder called `js`
- In that `js` folder create a file called `index.js`
- Populate the file with the following lines:

```js
document.querySelector('body').innerHTML = '<h2>Hey there</h2>'
```

### Run the NODE Project

- Open an Integrated Terminal at the `src` folder.
- Run the following commands:

```text
npm install
npm run start
```
