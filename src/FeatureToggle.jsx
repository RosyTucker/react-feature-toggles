import React, { PropTypes, Component } from 'react';

class FeatureToggle extends Component {
  render() {
    const toggleState = this.context.featureToggleList[this.props.featureName];
    const showContent = !!toggleState === !this.props.showOnlyWhenDisabled;
    return showContent ? this.props.children : null;
  }
}

FeatureToggle.contextTypes = {
  featureToggleList: PropTypes.objectOf(PropTypes.bool).isRequired
};

FeatureToggle.propTypes = {
  featureName: PropTypes.string.isRequired,
  children: PropTypes.node,
  showOnlyWhenDisabled: PropTypes.bool
};

export default FeatureToggle;
