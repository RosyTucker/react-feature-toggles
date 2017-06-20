import React from 'react';
import PropTypes from 'prop-types';

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
  featureToggleList: PropTypes.objectOf(PropTypes.bool).isRequired
};

FeatureToggleProvider.propTypes = {
  featureToggleList: PropTypes.objectOf(PropTypes.bool),
  children: PropTypes.node
};

export default FeatureToggleProvider;
