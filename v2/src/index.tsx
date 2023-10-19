/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { Router, Route, Routes } from "@solidjs/router"
import { ChatRoom } from './chatroom';
import { Profile } from './profile';
import { Userbase } from './userbase';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={App}/>
      <Route path="/chatroom" component={ChatRoom}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/userbase" component={Userbase}/>
    </Routes>
  </Router>
), root!);
