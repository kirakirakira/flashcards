import React from 'react';

const Term = props => (
  <li>
    <div>
      <h3>{props.name}
        <div onClick={() => props.editTerm(props.index)}>edit</div>
        <div onClick={() => props.deleteTerm(props.index)}>delete</div>
      </h3>
    </div>
  </li>
)

export default Term;
