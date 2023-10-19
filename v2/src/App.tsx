import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import './styles.css'


export type Message = {
  content: string,
  author: "Rozebur" | "Cozy_Cat" | "SoulSella" | "KeytarE" | "MaxIsWax",
  server: boolean,
  connected: boolean
}

type Blog = {
  content: string,
  date: string
}

export const store = createMutable({
  showMessages: false,
  messagesRead: false,
  sendAttempt: false,
  showHistory: false,
  messages: {
    messageList1: [
      {
        author: "Cozy_Cat",
        content: "null",
        connected: true,
        server: true
      },
      {
        author: "Rozebur",
        content: "welcome back CC. it's been a bit since you've messaged here.",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "oh hey roze, good timing. i was just thinking about the question you posed last time i was online. it was quite interesting.",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "and what question might that be? if you don't mind reminding me of course.",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "i'm talking about the one you mentioned about a week back. you know, the one with the ethical ramifications.",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "cmon, you can't expect me to remember everything i've said throughout the week. -_-",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "i'll PM you about it later, alright? i've got a couple things to wrap up for the day first, but i'll be back.",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "i'm sorry man, i won't be able to talk later. i'm going to the meetup, remember?",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "null",
        connected: true,
        server: true
      },
      {
        author: "SoulSella",
        content: "Hey guys!",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "null",
        connected: false,
        server: true
      },
      {
        author: "SoulSella",
        content: "...Seriously?",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "you know he hates you, right?",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "What's his problem with me? I really don't get it.",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "that's just the kind of person he is. it's not easy to get on his good side if he's judged you to be of an incompatible personality type.",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "Whatever. It's his own problem then. I mean, I'm a perfectly fine guy!",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "to each their own!",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "What's that supposed to mean huh? That's rhetorical by the way. I can see the shade you're throwing toward me.",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "i'm aware. and i'm also joking ehehehe ^_^'",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "anywaysssss... i've gotta head out for a bit. i'll talk to you guys later today!",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "See you around.",
        connected: true,
        server: false
      },
      {
        author: "Cozy_Cat",
        content: "null",
        connected: false,
        server: true
      },
      {
        author: "MaxIsWax",
        content: "AWWWWW I JUST MISSED CC?? that SUCKS! :C",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "Oh dang, you actually missed him by like a minute.",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "I STEPPED AWAY FROM MY COMPUTER FOR LIKE. ONE SECOND. >:CCCC",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "I've been connected for like 5 minutes, you can't say it's only been one second.",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "IT'S CALLED EXAGGERATIONNNNNNNNNNNNNN!!!!!!!!",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "...I think I feel the same way about you as Roze does about me.",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "YOURE SO MEAN :(",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "I'm just messing with y- wait, how do you know how Roze feels about me?",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "ummm doesnt EVERYONE??",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "Am I the only one who thought we were on good terms?",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "ITS POSSIBLE!",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "Great. Good to hear. I'm gonna go now.",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: ":(",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "null",
        connected: false,
        server: true
      },
      {
        author: "MaxIsWax",
        content: "IM ALONEEEE AGAINNNNNNNNNNNN",
        connected: true,
        server: false
      },
      {
        author: "MaxIsWax",
        content: "null",
        connected: false,
        server: true
      },
    ] as Message[]
  },
  history: {
    messageList1: [
      {
        author: "KeytarE",
        content: "null",
        connected: true,
        server: true
      },
    ]as Message[]
  },
  blogs: [
    {
      content: "ummmm... hi? i don't really know how this blog thing works, but i guess i'll just post whatever i feel like on here",
      date: "21/04/XX"
    },
    {
      content: "hello again... this site is kinda confusing, can someone in the chatroom help me out? i'm trying to figure out how to visit other blogs",
      date: "23/04/XX"
    },
    {
      content: "how do i log into the chatroom?",
      date: "23/04/XX"
    },
    {
      content: "it's not working for me",
      date: "23/04/XX"
    },
    {
      content: "wait there's a code?? i had no idea i needed one to use the chatroom",
      date: "23/04/XX"
    },
    {
      content: "thanks!! and sorry for the trouble",
      date: "23/04/XX"
    },
    {
      content: "when are they adding an option to delete blogs omg",
      date: "24/04/XX"
    },
    {
      content: "gonna be inactive for a bit, my parents have been really annoying lately. sorry :/",
      date: "25/04/XX"
    },
    {
      content: "i have some good news for everyone on cat comms!!! its a secret tho so i can't say anything about it yet, just hyping you all up :3",
      date: "30/04/XX"
    },
    {
      content: "everything's getting finalized so you'll be hearing about it pretty soon!",
      date: "02/05/XX"
    },
    {
      content: "i'm a bit nervous about it now... idk i'm just getting really anxious about everything...",
      date: "03/05/XX"
    },
    {
      content: "sometimes i wonder if i'll ever change",
      date: "04/05/XX"
    },
    {
      content: "well, whatever. i guess i don't need to change. i'm fine with the person i am. i have to be",
      date: "05/05/XX"
    },
    {
      content: "sorry for being inactive in the chatroom. i've just got so much on my plate lately. the news is still coming though, in a couple more days maybe",
      date: "06/05/XX"
    },
    {
      content: "ok ill be allowed to talk about it on the 10th",
      date: "07/05/XX"
    },
    {
      content: "i really hope you all will be happy with what you're going to be hearing",
      date: "08/05/XX"
    },

  ] as Blog[]
})

export const action = {
  sHHistory() {
    if (store.showHistory) {
      store.showHistory = false
    } else if (store.showMessages) {
      store.showMessages = false
      store.showHistory = true
    } else {
      store.showHistory = true
    }
    
    
  },
  sHMessages() {
    if (store.showMessages) {
      store.showMessages = false
    } else if (store.showHistory) {
      store.showHistory = false
      store.showMessages = true
    } else {
      store.showMessages = true
    }
  }
}

const App: Component = () => {
  const time = new Date()
  return (
    <>
      <div class="screensaver">
        <p class="connection">You are currently connected to Extended Area Network 34B "Cat Communications" on May 9th, 20XX.</p>
        <div style="display: grid; justify-content: center; padding: 10vh 2vw">
          <div style="place-self: start; text-align: center; height: 158px; width: 158px;" class="box">
            <div style="padding-top: 8px;">
              fearful<br /><br />cats<br /><br />live<br /><br />here
            </div>
          </div>
        </div>
        <div class="welcome">
          WELCOME.
        </div>
        <div class="pages">
          <A href='/chatroom'>Chat Room</A>
        </div>
        <div class='box' style="margin: 4vh 0">
          My Personal Blog:

          <div class="blogs">
            <For
              each={store.blogs}
              children={(blog, i) => <p><span style="color: white">[BLOG {i() + 1}, {blog.date}]:</span> {blog.content}</p>}
            />
          </div>
        </div>
        
      </div>
    </>
  );
};




export default App;
