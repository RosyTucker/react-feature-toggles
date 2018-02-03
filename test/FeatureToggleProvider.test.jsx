import { React, Enzyme, expect } from './TestHelpers';
import { FeatureToggleProvider, FeatureToggle } from '../src';

describe('<FeatureTogglesProvider />', () => {
  const aChildComponent = (<section>Yay i am a child</section>);

  const featureToggleList = {
    thisOneIsEnabled: true,
    thisOneIsDisabled: false
  };

  it('renders children', () => {
    const exampleToggle = <FeatureToggle featureName="a name" />;
    const featureToggleProvider = Enzyme.shallow(
      <FeatureToggleProvider featureToggleList={featureToggleList}>
        <div>
          {aChildComponent}
          {exampleToggle}
        </div>
      </FeatureToggleProvider>
    );

    expect(featureToggleProvider.contains(aChildComponent)).to.equal(true);
    expect(featureToggleProvider.contains(exampleToggle)).to.equal(true);
  });

  it('passes feature toggle list to child feature toggles', () => {
    const exampleToggle = <FeatureToggle featureName="a name" />;
    const featureToggleProvider = Enzyme.mount(
      <FeatureToggleProvider featureToggleList={featureToggleList}>
        <div>
          {aChildComponent}
          {exampleToggle}
        </div>
      </FeatureToggleProvider>
    );
    expect(featureToggleProvider.find(FeatureToggle).instance().context)
      .to.eql({ featureToggleList });
    expect(featureToggleProvider.find('section').instance().context)
      .to.equal(undefined);
  });
});
