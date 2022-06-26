import PropTypes from 'prop-types';
import { FeaturesListItem } from '../FeaturesListItem/FeaturesListItem';

export const FeaturesList = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, text, id }) => (
        <li key={id}>
          <FeaturesListItem title={title} description={text} />
        </li>
      ))}
    </ul>
  );
};

FeaturesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
