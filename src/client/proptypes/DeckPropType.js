import PropTypes from 'prop-types';
import DeckSeatPropType from 'src/client/proptypes/DeckSeatPropType';

const DeckPropType = PropTypes.shape({
  id: PropTypes.string,
  cube: PropTypes.string,
  owner: PropTypes.string,
  cubeOwner: PropTypes.string,
  seats: PropTypes.arrayOf(DeckSeatPropType),
  date: PropTypes.instanceOf(Date),
  comments: PropTypes.arrayOf(PropTypes.object),
  basics: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
});

export default DeckPropType;
