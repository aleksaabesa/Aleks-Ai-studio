importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// შენი Firebase კონფიგურაცია
const firebaseConfig = {
  apiKey: "AIzaSyDirpsw1uu9_OFrTI-4x7ctqzELPk1H0ng",
  authDomain: "aleks-first-ai.firebaseapp.com",
  projectId: "aleks-first-ai",
  storageBucket: "aleks-first-ai.firebasestorage.app",
  messagingSenderId: "618999263356",
  appId: "1:618999263356:web:d6340bfb767a5b671259f9",
  measurementId: "G-DXF18WD5QR"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// ფონური შეტყობინებების დამუშავება
messaging.onBackgroundMessage((payload) => {
  console.log('მიღებულია ფონური შეტყობინება: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // აქ შეგიძლია შენი ლოგოს ლინკი ჩასვა
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
