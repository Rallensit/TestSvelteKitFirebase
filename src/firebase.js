// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCBJdkpPgcsMndYEjxsJqQ3YYqB7I-gTlw',
	authDomain: 'testsveltekit.firebaseapp.com',
	projectId: 'testsveltekit',
	storageBucket: 'testsveltekit.appspot.com',
	messagingSenderId: '873021099544',
	appId: '1:873021099544:web:42f184693e11a01ebebd6d',
	measurementId: 'G-DRBHFJQN6Z'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
