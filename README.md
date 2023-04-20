# Noted A Google Keep Clone

![License](https://img.shields.io/github/license/bbland1/Noted?style=plastic)
![Version](https://img.shields.io/github/package-json/v/bbland1/Noted?style=plastic)
![Language](https://img.shields.io/github/languages/top/bbland1/Noted?style=plastic)

This is a frontend simplified version of the google keep app. It allows the user to create a note and delete it at will. The data is currently presisted by using a `notes.js` file, but to build further it would be important to attach a database to it. 

* Deployment: https://noted-bbland1.vercel.app

Screen recording of local developtment to show the functionality.




https://user-images.githubusercontent.com/104288486/187313269-ac66f2d7-5afe-429f-8d2f-70332dafac56.mov







## Requirements
Install all the dependecies of this project by using the [package.json](./package.json). You will need to run the install command in your terminal after forking and cloning the project.

## Built With
* [React](https://react.dev)
* [MaterialUI](https://mui.com)

### Local Development
1. Download and install the LTS version of [Node.js](https://nodejs.org/en). In this project [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) was used for the installing of a node version.


2. Install the project requirements
```shell
npm install
```

3. Run the project
```shell
npm run
```
* More information abouot the create-react-app set up and running can be found at [react-readme](./react-readme.md) or at [create-react-app](https://create-react-app.dev)



### Deployment
This project is deployed using [Vercel](https://vercel.com/docs) using their free tier. Having a [vercel.json](./vercel.json) within the root directory of your project will allow the project to run with react-router and vercel. It is important to check the documentation when deploying. Going through their quick start and connecting to the projects repo is the frist steps.

### License
See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).
