import PropTypes from 'prop-types';
import { SocialList } from '../SocialList/SocialList';
export const TeamItem = ({ avatar, name, profs, links }) => {
  return (
    <li>
      <img src={avatar} alt={name} width="280" />
      <div>
        <h3>{name}</h3>
        <p>{profs}</p>
        <SocialList links={links} />
      </div>
    </li>
  );
};

TeamItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profs: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
};
