/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';

import {
  ViroARSceneNavigator
} from 'react-viro';



// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/ARPerfTest/HelloWorldSceneAR');
var CarARScene = require('./js/ARCarDemo/ARCarDemo.js');

export default class ViroSample extends Component {
  render() {
    return(
    <ViroARSceneNavigator
      initialScene={{
        scene: CarARScene
      }}
   />);
  }
}



module.exports = ViroSample
