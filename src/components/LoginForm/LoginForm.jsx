// репета 41 потік

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import './LoginForm.css';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(4).max(8).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className="Form">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" id="login" className="FormInputs" />
          <ErrorMessage name="login" component={'div'} />
        </label>

        <label htmlFor="password">
          Password
          <Field
            type="password"
            name="password"
            id="password"
            className="FormInputs"
          />
          <ErrorMessage name="password" component={'div'} />
        </label>
        <button type="submit" className="buttonSub">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

// const LoginForm = () => {
//   const handleSubmit = event => {
//     event.preventDefault();
//     // console.log(event.target.elements);
//     // console.log(event.target.elements.login);
//     // console.log(event.target.elements.login.value);

//     const { login, password } = event.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <label htmlFor="login">
//           Login
//           <input type="text" name="login" id="login" />
//         </label>

//         <label htmlFor="password">
//           Password
//           <input type="password" name="password" id="password" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//   );
// };

// export default LoginForm;
