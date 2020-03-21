import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldInput from './FieldInput';
import { identity } from 'ramda';
const fields = [
  {
    label: 'NRIC',
    id: 'uinfin',
    type: 'text',
  },
  {
    label: 'Full Name',
    id: 'name',
    type: 'text',
  },
  {
    label: 'Sex',
    id: 'sex',
    type: 'text',
  },
  {
    label: 'Race',
    id: 'race',
    type: 'text',
  },
  {
    label: 'Nationality',
    id: 'nationality',
    type: 'text',
  },
  {
    label: 'Date Of Birth',
    id: 'dob',
    type: 'text',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'text',
  },
  {
    label: 'Mobile Number',
    id: 'mobileno',
    type: 'text',
  },
  {
    label: 'Registered Address',
    id: 'regadd',
    type: 'text',
  },
  {
    label: 'Housing Type',
    id: 'housingtype',
    type: 'text',
  },
  {
    label: 'Marital Status',
    id: 'marital',
    type: 'text',
  },
  {
    label: 'Highest Education Level',
    id: 'edulevel',
    type: 'text',
  },
  {
    label: 'Notice of Assessment - Latest Assessable Income (SGD)',
    id: 'noa-basic',
    type: 'text',
  },
];
export default function Info(props) {
  return (
    <Formik
      id="form"
      className="lone-about-us section-padding"
      initialValues={props.data}
      onSubmit={identity}
    >
      <Form id="formApplication" className="toggle_content">
        <div className="container">
          <div className="single-heading">
            <h2>Form</h2>
            <h4>Application pre-filled with MyInfo!</h4>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <p style={{ textAlign: 'center' }}>
                Confirm your details below and click "Submit Application".
              </p>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-md-12 col-lg-5 form-box mb-4">
              <h3>Personal Information</h3>
              <hr />
              {fields.map(spec => (
                <FieldInput key={spec.id} spec={spec} />
              ))}
            </div>
            <div className="col-md-12 text-center">
              <a href="/" onClick={props.goHome} className="btn2">
                Submit Application
              </a>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

Info.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  goHome: PropTypes.func,
};
