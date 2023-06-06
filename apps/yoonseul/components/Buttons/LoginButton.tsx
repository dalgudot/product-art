'use client';

import { Button } from '@dalgu/core-design-system';
import {
  Authentication,
  IAuthentication,
} from '../../services/firebase/authentication';
import { useState } from 'react';

export default function LoginButton() {
  const [isLogIn, setIsLogin] = useState<boolean>(false);

  const auth: IAuthentication = new Authentication();

  function onLogIn() {
    auth
      .logIn()
      .then((result) => {
        console.log('result', result);
        result && setIsLogin(true);
      })
      .catch((error) => {
        new Error(error);
      });
  }

  function onLogOut() {
    auth
      .logOut()
      .then(() => {
        setIsLogin(false);
      })
      .catch((error) => {
        new Error(error);
      });
  }

  let label = isLogIn ? 'LogOut' : 'LogIn';

  function onClick() {
    isLogIn ? onLogOut() : onLogIn();
  }

  return <Button label={label} onClick={onClick} />;
}
