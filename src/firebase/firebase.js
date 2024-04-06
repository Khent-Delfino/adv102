import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDYgVMQ9vxFR40y8qT0t4e_UihxJnLFxIU',
	authDomain: 'test-adv102-3d2bd.firebaseapp.com',
	projectId: 'test-adv102-3d2bd',
	storageBucket: 'test-adv102-3d2bd.appspot.com',
	messagingSenderId: '147756144775',
	appId: '1:147756144775:web:8f97ca21e576ce709f4022',
	measurementId: 'G-MTD3E2DXVG',
	databaseURL: 'https://test-adv102-3d2bd-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);

export { app };
