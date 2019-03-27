export interface IFirebaseAuthUser {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL?: string;
  uid: string;
}