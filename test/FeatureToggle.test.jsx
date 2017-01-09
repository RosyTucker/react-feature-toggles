import { React, Enzyme, expect } from './TestHelpers';
import { FeatureToggle } from '../src';

describe('<FeatureToggle />', () => {
  const aChildComponent = <div>Yay I am a child</div>;
  const expectedHtmlContent = '<div>Yay I am a child</div>';

  const featureNames = {
    thisOneIsEnabled: 'thisOneIsEnabled',
    thisOneIsDisabled: 'thisOneIsDisabled'
  };

  const context = {
    featureToggleList: {
      [featureNames.thisOneIsEnabled]: true,
      [featureNames.thisOneIsDisabled]: false
    }
  };

  it('renders children if toggle with name is enabled', () => {
    const featureToggle = Enzyme.shallow(
      <FeatureToggle featureName={featureNames.thisOneIsEnabled}>
        {aChildComponent}
      </FeatureToggle>,
      { context }
    );

    expect(featureToggle.contains(aChildComponent)).to.equal(true);
  });

  it('does not render wrapping div (or any other tag) - just children', () => {
    const featureToggle = Enzyme.shallow(
        <FeatureToggle featureName={featureNames.thisOneIsEnabled}>
          {aChildComponent}
        </FeatureToggle>,
        { context }
    );

    expect(featureToggle.html()).to.equal(expectedHtmlContent);
  });

  it('does not render children is toggle with name is not enabled', () => {
    const featureToggle = Enzyme.shallow(
      <FeatureToggle featureName={featureNames.thisOneIsDisabled}>
        {aChildComponent}
      </FeatureToggle>,
      { context }
    );

    expect(featureToggle.contains(aChildComponent)).to.equal(false);
  });

  describe('showOnlyWhenDisabled flag', () => {
    it('renders children if toggle with name is disabled and flag is set', () => {
      const featureToggle = Enzyme.shallow(
        <FeatureToggle featureName={featureNames.thisOneIsDisabled} showOnlyWhenDisabled>
          {aChildComponent}
        </FeatureToggle>,
        { context }
      );

      expect(featureToggle.contains(aChildComponent)).to.equal(true);
    });

    it('does not render wrapping div (or any other tag) - just children', () => {
      const featureToggle = Enzyme.shallow(
          <FeatureToggle featureName={featureNames.thisOneIsDisabled} showOnlyWhenDisabled>
            {aChildComponent}
          </FeatureToggle>,
          { context }
      );

      expect(featureToggle.html()).to.equal(expectedHtmlContent);
    });

    it('does not render children if toggle with name is enabled and flag is set', () => {
      const featureToggle = Enzyme.shallow(
        <FeatureToggle featureName={featureNames.thisOneIsEnabled} showOnlyWhenDisabled>
          {aChildComponent}
        </FeatureToggle>,
        { context }
      );

      expect(featureToggle.contains(aChildComponent)).to.equal(false);
    });
  });
});
