import type { Component } from 'solid-js';

import { Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import './styles.css'

const store = createMutable({
  showMessages: false,
  messagesRead: false,
  sendAttempt: false,
  messages: [

  ]
})

const App: Component = () => {
  return (
    <>
      <div class="screensaver">
        
        <div style="display: grid; justify-content: center; padding: 10vh 2vw">
          <div style="place-self: start; text-align: center; height: 158px; width: 158px;" class="box">
            <div style="padding-top: 15px;">
              fearful<br /><br />cats<br /><br />live<br /><br />here
            </div>
          </div>
        </div>
        <div class="welcome">
          WELCOME.
        </div>
        <div style="display: inline;">
          <div class="view" onClick={()=> store.showMessages = !store.showMessages} >{store.showMessages ? "Hide" : "View"} Messages</div>
          <Show
          when={store.showMessages}
          children={<Console/>}
          />
          
          
        </div>
      </div>
    </>
  );
};

function Console() {
  return (
    <div>

    
    <div class="console" style=" padding-top: 5vh; padding-bottom: 1vh">
      <Show
      when={!store.messagesRead}
      children={
        <h1 style="text-align: center;">You have <i>10</i> unread messages!</h1>
      }
      />
      

      <p class="speakerServer"> + User [Cozy_Cat] has connected!</p>
      <p class="speakerRed">{'>'} welcome back CC. it's been a bit since you've messaged here.</p>
      <p class="speakerBlue">{'>'} oh hey roze, i was thinking about the question you posed last time i was online. it was quite interesting. </p>
      <p class="speakerRed">{'>'} and what question might that be? if you don't mind reminding me of course.</p>
      <p class="speakerBlue">{'>'} i'm talking about the one you mentioned about a week back. you know, the one with the <i>ethical</i> ramifications.</p>
      <p class="speakerRed">{'>'} cmon, you can't expect me to remember everything i've said throughout the week. -_-</p>
      <p class="speakerBlue">{'>'} i'll PM you about it later, alright? i've got a couple things to wrap up for the day first, but i'll be back.</p>
      <p class="speakerRed">{'>'} i'm sorry man, i won't be able to talk later. i'm going to the meetup, remember?</p>
      <p class="speakerServer"> + User [SoulSella] has connected!</p>
      <p class="speakerYellow">{'>'} Hey guys!</p>
      <p class="speakerServer"> - User [Rozebur] has disconnected!</p>
      <p class="speakerYellow">{'>'} ...Seriously?</p>
      <p class="speakerBlue">{'>'} you know he hates you, right?</p>

    </div>
    <div style={"display: flex"}>
    <Show
    when={!store.messagesRead}
    children={
      <div class="view" onClick={()=>store.messagesRead=true}>Mark as Read</div>
    }
    />
    
    <div class="arrow">{">"}</div>
    <Show
      when={!store.sendAttempt}
      children={
        <input class="consoleInput"/>
      }
      fallback={
        <input disabled placeholder='ERROR 23: AUTHORIZATION EXPIRED' class="consoleInput"/>
      }
    />
    
    <div class="view" onClick={()=>store.sendAttempt = true}>Send</div>
    </div>
    
    </div>

  )
}

export default App;
