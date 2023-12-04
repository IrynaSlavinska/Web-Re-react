import { useState } from 'react';
import styles from './SignUpForm.module.css';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'feedback':
        setFeedback(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <label className={styles.label}>
        <span>Feedback</span>
        <input
          type="text"
          name="feedback"
          onChange={handleChange}
          value={feedback}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default SignUpForm;

// ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?

// import { useState } from 'react';
// import styles from './SignUpForm.module.css';

// function SignUpForm() {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [feedback, setFeedback] = useState('');

//   const handleEmailChange = e => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = e => {
//     setPassword(e.target.value);
//   };
//   const handleFeedbackChange = e => {
//     setFeedback(e.target.value);
//   };

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Email</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleEmailChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Password</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handlePasswordChange}
//           value={password}
//         />
//       </label>

// <label className={styles.label}>
//   <span>Feedback</span>
//   <input
//     type="text"
//     name="feedback"
//     onChange={handleFeedbackChange}
//     value={feedback}
//   />
// </label>

//       <button type="submit">Register now</button>
//     </form>
//   );
// }

// export default SignUpForm;

// * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// import { Component } from 'react';
// import styles from './SignUpForm.module.css';

// class SignUpForm extends Component {
//   state = {
//     email: '',
//     password: '',
//     feedback: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { email, password, feedback } = this.state;
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Email</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={email}
//           />
//         </label>

//         <label className={styles.label}>
//           <span>Password</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={password}
//           />
//         </label>

//         <label className={styles.label}>
//           <span>Feedback</span>
//           <input
//             type="text"
//             name="feedback"
//             onChange={this.handleChange}
//             value={feedback}
//           />
//         </label>

//         <button type="submit">Register now</button>
//       </form>
//     );
//   }
// }

// export default SignUpForm;
