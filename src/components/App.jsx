import { Section } from './Section/Section';
import { FeaturesList } from './FeaturesList/FeaturesList';
import featuresData from '../data/features.json';
export const App = () => {
  return (
    <Section>
      <FeaturesList data={featuresData} />
    </Section>
  );
};
