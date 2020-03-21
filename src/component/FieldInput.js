import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

export default function FieldInput({ spec }) {
  return (
    <div className="form-group">
      <label>{spec.label}</label>
      <div className="input-group">
        <Field
          className="form-control"
          name={spec.id}
          type={spec.type}
          // placeholder={spec.placeholder}
          disabled
        />
      </div>
    </div>
  );
}

FieldInput.propTypes = {
  spec: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};
