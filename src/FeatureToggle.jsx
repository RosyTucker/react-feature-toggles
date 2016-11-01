import React from 'react';

const FeatureToggle = ({ featureName, showOnlyWhenDisabled, children }, context) => {
  const toggleState = context.featureToggleList[featureName];
  const showContent = toggleState === !showOnlyWhenDisabled;
  return showContent ? <div>{children}</div> : null;
};

FeatureToggle.contextTypes = {
  featureToggleList: React.PropTypes.objectOf(React.PropTypes.bool).isRequired
};

FeatureToggle.propTypes = {
  featureName: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  showOnlyWhenDisabled: React.PropTypes.bool
};

export default FeatureToggle;
