# DevRadar (NodeJS, ReactJS & React-Native)

Project of Rocketseat Challenge - Semana Omnistack #10

- [DevRadar (NodeJS, ReactJS & React-Native)](#devradar-nodejs-reactjs--react-native)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Roadmap](#roadmap)
  - [License](#license)

## Usage

On the web app, you can register your github user and the technologies you work with, and also your geolocation coordinate. Then, you can search for devs with technologies on the mobile app over the map, based on geolocation.

## Technologies

This app features all the latest tools and practices in javscript stack!

- ⚛️ **React Js** — A JavaScript library for building user interfaces - [site](https://reactjs.org/)
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS - [site](https://facebook.github.io/react-native/)
- 💹 **Node Js** — A web framework for Node Js - [site](https://nodejs.org/)
- 📄 **MongoDB** — A cross-platform and open-source document-oriented database - [site](https://www.mongodb.com/)
- ♻️ **Socket IO** — A library for realtime web applications - [site](https://socket.io/)
- **Express** - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications - [site](https://expressjs.com/pt-br/)
- **Nodemon** - A utility that will monitor for any changes in the source code and automatically restart the server - [site](https://nodemon.io/)

## Installation

Clone the project with the following command:

```sh
git clone https://github.com/doominating/semanaomnistack10.git
```

Then, get in the project dir and install the dependencies for each enviroment (backend, frontend and mobile):

```sh
cd semanaomnistack10/backend
yarn install

cd semanaomnistack10/frontend
yarn install

cd semanaomnistack10/mobile
yarn install
```

Then, you have to fill your MongoDB configuration in .env file.

Finally, you can start the applications (backend/frontend/mobile) with:

```sh
yarn start
```

If you are in development environment, you can use the development server for backend:

```sh
yarn dev
```

## Roadmap

- (**OK**) Create backend, frontend and mobile just like the OmniStack Challenge;
- Start mobile app with some predefined tech and search for it;
- Add update user infos feature;
- Add delete user feature;
- Improve the location coordinates with some google search functionality on frontend web;
- Refactoring to improve the code readability;

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
