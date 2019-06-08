import React from 'react';

const EditCardForm = ({match}) => {
  let name = match.params.card;
  let id = match.params.id;

  return (
    <div>
      <h1>You have rendered the edit card form page.</h1>
      <h2>You are editing {name} at {id}.</h2>
    </div>
  )
}

export default EditCardForm;
