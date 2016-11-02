# react-feature-toggles
Declarative feature toggle framework for react, allowing you to get rid of test complications, and branching logic.

## Install

`npm install --save react-feature-toggles`

## Usage

Wrap your app in the `FeatureToggleProvider` and pass in a list of toggles, then use the `FeatureToggle` component throughout your app.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureToggleProvider, FeatureToggle } from 'react-feature-toggles';

const toggles = {
  // Try setting this to false
  SHOW_HELLO_WORLD: false
  // ... add more here
};

const ExampleComponent = () => (
  <FeatureToggleProvider featureToggleList={toggles}>
    <h1>Toggling Example</h1>
    <FeatureToggle featureName="SHOW_HELLO_WORLD">
      Toggle is on - Hello World
    </FeatureToggle>
    <FeatureToggle featureName="SHOW_HELLO_WORLD" showOnlyWhenDisabled>
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
