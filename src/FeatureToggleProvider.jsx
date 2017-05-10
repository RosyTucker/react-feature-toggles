import React from 'react';

class FeatureToggleProvider extends React.Component {
  getChildContext() {
    return {
      featureToggleList: this.props.featureToggleList
    };
  }

  render() {
    return this.props.children;
  }
}

FeatureToggleProvider.childContextTypes = {
  featureToggleList: React.PropTypes.objectOf(React.PropTypes.bool).isRequired
};

FeatureToggleProvider.propTypes = {
  featureToggleList: React.PropTypes.objectOf(React.PropTypes.bool),
  children: React.PropTypes.node
};

export default FeatureToggleProvider;
