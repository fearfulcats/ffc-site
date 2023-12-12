/* @refresh reload */
import { render } from 'solid-js/web';

import { Router, Route, Routes } from "@solidjs/router"
import App from './secret/App';
import ChatRoom from './secret/chatroom';
import Profile from './secret/profile';
import Userbase from './secret/userbase';
import Main from './main';
import Game from './game';
import Kitteholic from './kitteholic';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
    <Router>
      <Routes>
        
        <Route path="/" component={Main}/>
        <Route path="/secret/home" component={App}/>
        <Route path="/secret/chatroom" component={ChatRoom}/>
        <Route path="/secret/profile" component={Profile}/>
        <Route path="/secret/userbase" component={Userbase}/>
        <Route path="/game" component={Game}/>
        <Route path="/kitteholic" component={Kitteholic}/>
      </Routes>
    </Router>
), root!);
