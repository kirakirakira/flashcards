import React from 'react';

const EditCardForm = ({match}) => {
  let name = match.params.card;
  let index = match.params.index;

  return (
    <div>
      <h1>You have rendered the edit card form page.</h1>
      <h2>You are editing {name} at {index}.</h2>
    </div>
  )
}

export default EditCardForm;
