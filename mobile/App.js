import React from 'react';
import { Status, StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes />
    </>
  );

}
