'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroBox,
  ViroText,
  ViroConstants,
  ViroMaterials
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();
    this.state = {
      text : "Initializing AR...",
      min:-5,
      max:5
    };
  }

  getRandomFloat = (min, max) =>{
    return Math.random() * (max - min) + min;
  }

  render() {
    let boxes = [];

    for (let j = 0; j < 50; j++) {
      boxes.push(<ViroBox key={String(j)} position={[this.getRandomFloat(this.state.min,this.state.max),this.getRandomFloat(this.state.min,this.state.max),this.getRandomFloat(this.state.min,this.state.max)]} scale={[.3, .3, .1]} materials={["grid"]} />)
    }  

    return (
      
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        {boxes}
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});



module.exports = HelloWorldSceneAR;
