import React from 'react';
import Term from './Term';

const TermList = props => {
  const results = props.data;

  let terms = results.map((term, index) =>
    <Term
      key={index}
      index={index}
      name={term}
      editTerm={props.editTerm}
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
