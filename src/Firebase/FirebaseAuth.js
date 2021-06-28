import { firebase } from "./FirebaseConfig";
import { message } from 'antd';
import 'antd/dist/antd.css';
const { success, error } = message;

const GoogleAuth = async () => {
  try {
    const provider_Google = new firebase.auth.GoogleAuthProvider();
    const resp = await firebase.auth().signInWithPopup(provider_Google);
    const { user } = resp;
    if (user === undefined) {
      throw new Error('User undefined');
    } else {
      success(`${user.displayName} ha iniciado sesión`);
      return user;
    }
  } catch (e) {
    error(e);
  }
};
const GoogleAuthIn = () => {
  const provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      success(`${user.displayName} ha iniciado sesión`);
    })
    .catch(({ message: errorMessage }) => {
      error(errorMessage);
      console.log(errorMessage);
    });
};

const FirebaseLogOut = async (message) => {
  try {
    await firebase.auth().signOut();
    if (message) {
      success("Se ha cerrado sesión");
    }
    console.log("Se ha cerrado sesión");
  } catch {
    if (message) {
      error("Error al cerrar sesión")
    }
    console.log("Error al cerrar sesión");
  }
};

export { GoogleAuth, GoogleAuthIn, FirebaseLogOut };
