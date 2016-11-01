# react-feature-toggles
Declarative feature toggle framework for react

## Install

`npm install react-feature-toggles`

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureToggleProvider, FeatureToggle } from '../lib/react-feature-toggles';

const toggleNames = {
  SHOW_HELLO_WORLD: 'showHelloWorld'
  // ... add more here
};

const toggles = {
  // Try setting this to false
  [toggleNames.SHOW_HELLO_WORLD]: false
  // ... add more here
};

const ExampleComponent = () => (
  <FeatureToggleProvider featureToggleList={toggles}>
    <h1>Toggling Example</h1>
    <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD}>
      Toggle is on - Hello World
    </FeatureToggle>
    <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD} showOnlyWhenDisabled>
      Sorry, toggle is off
    </FeatureToggle>
  </FeatureToggleProvider>
);


ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
```

## Building the example

- Clone this repo
- Run `npm install`
- Run `npm run build-example`
- Open `example/example.html` in the browser
- Play around with the toggle values
