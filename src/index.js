import React from "react";
import ReactDOM from "react-dom";
import * as firebase from 'firebase';
import "./index.scss";
import { FormParent } from "./registration/components/Form";
import { HeaderParent } from "./common-component/Header";
import * as serviceWorker from "./serviceWorker";
import FIREBASE_CONFIG from './config/firebase-config'

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <HeaderParent />
    <FormParent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
