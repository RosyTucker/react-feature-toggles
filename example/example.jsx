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
