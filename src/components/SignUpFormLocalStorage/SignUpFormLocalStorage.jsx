import useLocalStorage from 'hooks/useLocalStorage';
import css from './SignUpFormLocalStorage.module.css';

function SignUpFormLocalStorage() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');
  const [feedback, setFeedback] = useLocalStorage('feedback', '');

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
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={css.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <label className={css.label}>
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

export default SignUpFormLocalStorage;

// ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?

// import { useState, useEffect } from 'react';
// import styles from './SignUpFormLocalStorage.css';

// function SignUpFormLocalStorage() {
//   const [email, setEmail] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('email')) ?? '';
//   });
//   const [password, setPassword] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('password')) ?? '';
//   });
//   const [feedback, setFeedback] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('feedback')) ?? '';
//   });

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       case 'feedback':
//         setFeedback(value);
//         break;

//       default:
//         return;
//     }
//   };

//   useEffect(() => {
//     window.localStorage.setItem('email', JSON.stringify(email));
//   }, [email]);
//   useEffect(() => {
//     window.localStorage.setItem('password', JSON.stringify(password));
//   }, [password]);
//   useEffect(() => {
//     window.localStorage.setItem('feedback', JSON.stringify(feedback));
//   }, [feedback]);

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Feedback</span>
//         <input
//           type="text"
//           name="feedback"
//           onChange={handleChange}
//           value={feedback}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// export default SignUpFormLocalStorage;
