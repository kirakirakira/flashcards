import React from 'react';
import Term from './Term';

const TermList = props => {
  const results = props.data;

  let terms = results.map((term, index) =>
    <Term key={index} name={term} />
  )

  return (
    <ul>
      {terms}
    </ul>
  )
}

export default TermList;
