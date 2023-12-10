import { useContext } from 'react';
import ctx from 'context/authContext';

export default function UserMenu() {
  //   const authContext = useContext(ctx);
  //   const { name } = useContext(ctx);
  const { user, logIn, logOut } = useContext(ctx);

  //   console.log(authContext.user);

  return (
    <div>
      {user ? (
        <>
          <p>{user}</p>
          <button type="button" onClick={logOut}>
            Exit
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          Enter
        </button>
      )}
    </div>
  );
}
