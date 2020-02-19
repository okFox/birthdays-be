import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  //import FETCHREQUEST
  

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(FETCHREQUEST(BirthdayObject));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={BirthdayObject.name} onChange={({ target }) => setBirthdayObject(target.value)} />
      <input type="date" value={BirthdayObject.date} onChange={({ target }) => setBirthdayObject(target.value)} />
      <input type="number" value={BirthdayObject.age} onChange={({ target }) => setBirthdayObject(target.value)} />
      <input type="text" value={BirthdayObject.starsign} onChange={({ target }) => setBirthdayObject(target.value)} />
      <input type="textarea" value={BirthdayObject.notes} onChange={({ target }) => setBirthdayObject(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;