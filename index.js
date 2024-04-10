

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import { name as appName } from './app.json';
import LaptopList from './src/components/LaptopList.js';
import { LaptopProvider } from './src/laptopContext.js';

const App = () => {
    return (
        <LaptopProvider>
            <View>
                <Header title="Laptops" />
                <LaptopList></LaptopList>
            </View>
        </LaptopProvider>
    );
};

AppRegistry.registerComponent(appName, () => App);