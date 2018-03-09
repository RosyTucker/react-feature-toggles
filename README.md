# react-feature-toggles
Declarative feature toggle framework for react / react-native, allowing you to get rid of test complications, and branching logic.

[![Build Status](https://travis-ci.org/RosyTucker/react-feature-toggles.svg?branch=master)](https://travis-ci.org/RosyTucker/react-feature-toggles)

[![npm version](https://badge.fury.io/js/react-feature-toggles.svg)](https://badge.fury.io/js/react-feature-toggles)

## Install

`npm install --save react-feature-toggles`

## Usage

Wrap your app in the `FeatureToggleProvider` and pass in a list of toggles, then use the `FeatureToggle` component throughout your application.

Both `FeatureToggleProvider` and `FeatureToggle` must have only one child, this is so that the library isn't rendering additional elements on your behalf and making assumptions about your needs e.g you may want an `<li>` rather than a `<div>`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureToggleProvider, FeatureToggle } from '../lib/index';

const toggleNames = {
  SHOW_HELLO_WORLD: 'showHelloWorld'
  // ... add more here
};

const toggles = {
  // Try setting this to true
  [toggleNames.SHOW_HELLO_WORLD]: false
  // ... add more here
};

const ExampleComponent = () => (
  <FeatureToggleProvider featureToggleList={toggles}>
    <div>
      <h1>Toggling Example</h1>
      <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD}>
        <p>Hello World</p>
      </FeatureToggle>
      <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD} showOnlyWhenDisabled>
        <p>Sorry, toggle is off</p>
      </FeatureToggle>
    </div>
  </FeatureToggleProvider>
);

ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
```

### Redux

To use with redux you may want to do something like: 

```
const mapStateToProps = state => ({
  featureToggleList: state.features,
});

const ConnectedFeatureToggleProvider = connect(mapStateToProps)(FeatureToggleProvider);
```

And then use the connected provider in place of the normal provider.

## Building the example

- Clone this repo
- Run `npm install`
- Run `npm run build-example`
- Open `example/example.html` in the browser
- Play around with the toggle values

## Making a pull request?
- Make sure you've run `npm run ci-build` first

## Changes
- Version 3.0.2 Update readme
- Version 3.0.1 Remove self dependency (:/)
- Version 3.0.0 Upgrade peer deps (and internal deps) for React 16
- Version 2.0.3 Switch proptypes from React.PropTypes to the dedicated proptypes library
- Version 2.0.2 Ensures an undefined toggle is treated a false
- Version 2.0.1 Removes a containing div around the provider children, should you need this div, please add it in yourself. 
