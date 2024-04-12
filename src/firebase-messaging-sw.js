importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyCEpFU3zeWuoZvN8iVsk7EZd8E2HP-x2to",
  authDomain: "agrimarket-utt.firebaseapp.com",
  projectId: "agrimarket-utt",
  storageBucket: "agrimarket-utt.appspot.com",
  messagingSenderId: "711515775747",
  appId: "1:711515775747:web:bb395a009d47a79178ff36",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  // Customize notification here, do sth with payload
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/vertical_logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
