import PropTypes from 'prop-types';

export const FeaturesListItem = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};
