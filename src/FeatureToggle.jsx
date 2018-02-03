import { Component } from 'react';
import PropTypes from 'prop-types';

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

FeatureToggle.defaultProps = {
  showOnlyWhenDisabled: false,
  children: []
};

export default FeatureToggle;
