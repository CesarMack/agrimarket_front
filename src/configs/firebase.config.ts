import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import { environment } from '../environments/environments';

firebase.initializeApp(environment.firebaseConfig);
export const messaging = firebase.messaging();
