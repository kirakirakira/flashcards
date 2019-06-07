import React from 'react';
import Term from './Term';

const TermList = props => {
  const results = props.data;

  let terms = results.map((term, index) =>
    <Term
      index={index}
      name={term}
      deleteTerm={props.deleteTerm}
    />
  )

  return (
    <ul>
      {terms}
    </ul>
  )
}

export default TermList;
