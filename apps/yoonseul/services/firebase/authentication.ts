import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { firebaseApp } from './config';

export interface IAuthentication {
  logIn: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

export class Authentication implements IAuthentication {
  private auth: Auth;
  private googleAuthProvider: GoogleAuthProvider;

  constructor() {
    this.auth = getAuth(firebaseApp);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  logIn(): Promise<UserCredential> {
    const authProvider = this.googleAuthProvider;

    return signInWithPopup(this.auth, authProvider);
  }

  logOut() {
    return this.auth.signOut();
  }
}
