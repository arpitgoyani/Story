/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import _ from 'lodash';
import { name as appName } from './app.json';

const Story = () => {
    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => Story);