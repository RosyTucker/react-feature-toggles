# react-feature-toggles
Declarative feature toggle framework for react, allowing you to get rid of test complications, and branching logic.

## Install

`npm install --save react-feature-toggles`

## Usage

Wrap your app in the `FeatureToggleProvider` and pass in a list of toggles, then use the `FeatureToggle` component throughout your application.

Both `FeatureToggleProvider` and `FeatureToggle` must have only one child, this is so that the library isn't rendering additional elements on your behalf and making assumptions about your needs e.g you may want an `<li>` rather than a `<div>`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureToggleProvider, FeatureToggle } from 'react-feature-toggles';

const toggles = {
  // Try setting this to true
  SHOW_HELLO_WORLD: false
  // ... add more here
};

const ExampleApp = () => (
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


ReactDOM.render(<ExampleApp />, document.getElementById('example'));
```

## Building the example

- Clone this repo
- Run `npm install`
- Run `npm run build-example`
- Open `example/example.html` in the browser
- Play around with the toggle values


## Changes

- Version 2.0 removes a containing div around the provider children, should you need this div, please add it in yourself. 