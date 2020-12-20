import PT from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PT.string,
  onChange: PT.func.isRequired,
};

export default Filter;
