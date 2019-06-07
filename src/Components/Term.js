import React from 'react';

const Term = props => (
  <li>
    <div key={props.index}>
      <h3>{props.name}
        <div onClick={() => {props.deleteTerm(props.index)}}>delete</div>
      </h3>
    </div>
  </li>
)

export default Term;
