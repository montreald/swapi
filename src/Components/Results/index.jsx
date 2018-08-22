import React, { PropTypes } from 'react';

import Person from './person.jsx';

import './results.scss';

const Results = props => (
  <ul className="results">
    {props.items.map((item, i) => {
      return <Person key={i} item={item} />;
    })}
  </ul>
);

Results.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
