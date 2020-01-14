// import React, { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

import App from '../components/App'
import City from "../components/City";
// import '../styles.scss' // TODO: use scss as CSS-Modules or StyledComponent

const config = {
  apiKey: "AIzaSyA8wsdQlLLAjZepeaQfeM_l0pfBEaCOyEk",
  authDomain: "phantomtype.firebaseapp.com",
  databaseURL: "https://phantomtype.firebaseio.com",
  projectId: "phantomtype",
  storageBucket: "phantomtype.appspot.com",
  messagingSenderId: "787190095643",
  appId: "1:787190095643:web:2ea9b8a2fb64946b27bdbe",
  measurementId: "G-TGRBP7DHKD"
}
if (!firebase.apps.length) {
  console.log(firebase.apps.length)
  firebase.initializeApp(config)
}

export default () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('pics'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(value, loading, error)

  return <p>{value && view(value.docs.map((doc) => doc.data() ))}</p>
}

const view = (pics: {}[]) =>
  <App>
    <section className="splash">
      <img className="splash-image"
           src="https://storage.googleapis.com/phantomtype-180814.appspot.com/splash/splash-1.jpg"/>
      <div className="title">
        <img src='/logomark-white.svg' className="logo" />
        <h1 className='siteTitle'>PHANTOM TYPE</h1>
        <p className='description'>a Japan photo gallery.</p>
      </div>
    </section>
    <City city='nagoya' description='hoge' photos={pics} />
  </App>
