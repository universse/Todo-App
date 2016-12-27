import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA5_dsTH9duG7Ydg8rFfYKoGGu17AwkvNU',
  authDomain: 'test-8ceb2.firebaseapp.com',
  databaseURL: 'https://test-8ceb2.firebaseio.com',
  storageBucket: 'test-8ceb2.appspot.com',
  messagingSenderId: '689380963189'
}

firebase.initializeApp(config)

export var firebaseRef = firebase.database().ref()
