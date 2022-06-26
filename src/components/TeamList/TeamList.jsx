import PropTypes from 'prop-types';
import { TeamItem } from '../TeamItem/TeamItem';

export const TeamList = ({ teammembers }) => {
  return (
    <ul>
      {teammembers.map(({ avatar, name, profession, links, id }) => {
        return (
          <TeamItem
            key={id}
            avatar={avatar}
            name={name}
            profs={profession}
            links={links}
          />
        );
      })}
    </ul>
  );
};

TeamList.propTypes = {
  teammembers: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      links: PropTypes.object.isRequired,
    })
  ),
};
