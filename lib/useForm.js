// External dependencies
import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    let { name, value, type, files } = e.target;

    if (type === 'number') value = parseInt(value);
    else if (type === 'file') [value] = files;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(values).map(([key]) => [key, ''])
    );

    setValues(blankState);
  };

  return { values, handleChange, resetForm, clearForm };
};
