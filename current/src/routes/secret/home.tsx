import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import './styles.css'
import { Link, MetaProvider, Title } from '@solidjs/meta';

import favicon from "../../assets/secret/faviconcatcomms.png"


export type Message = {
  content: string,
  author: "Rozebur" | "Cozy_Cat" | "SoulSella" | "KeytarE" | "MaxIsWax" | "ASomberGaze",
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
        content: "i'm talking about the one you mentioned about a week back. you know it, right?",
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
        content: "null",
        connected: true,
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
      {
        author: "ASomberGaze",
        content: "Hi Key!!!",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "i can't tell if you're making a joke or if you just don't realize what that sounds like",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Let's just go with the joke thing... -.-'",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "aw don't worry about it i'm just a bit on edge today...",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "It's fine!! Also, I'm really interested to hear what you've been wanting to tell us! It's tomorrow, right? ",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "indeed it is! i'm pretty nervous about it, but at the same time i'm cautiously optimistic",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Well, I'm looking forward to it! :D",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "I know what it is!",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "soul, i mean this in the kindest way possible - i will murder you",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "That doesn't sound particularly kind...",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Guys, don't be mean to eachother :(",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Wait, Soul, how do you know Key's secret?",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "unfortunately we know eachother irl",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "That's cool! I know that a lot of the chat members live nearby to where I live, but I couldn't tell you who's who if you ever asked...",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "well that is how an extended area network functions",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "speaking of which, who's the admin for the EAN anyway? soul invited me, but i never met the admin",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "It's a secret! Seriously. He told me if I ever tell anyone that I'll get kicked out of the EAN.",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "understandable",
        connected: true,
        server: false
      },
      {
        author: "SoulSella",
        content: "Well I've gotta run for a bit. I'll be back online in an hour maybe!",
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
        author: "Rozebur",
        content: "null",
        connected: true,
        server: true
      },
      {
        author: "Rozebur",
        content: "finally! he's gone.",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "hey roze. do you really hate him that much?",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "he just acts too cheerful all the time, and i can tell it's just an act. plus he's worse to me specifically. i just don't wanna deal with that right now.",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "anyway, i'm glad he's gone. i was lurking for quite a while, hoping i'd see the disconnect message.",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Key says he knows him in real life, what about you Roze?",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "ugh don't remind me. yeah, i know him.",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "looks like im not the only one burdened with that then",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "don't get me wrong, i don't hate him, but i can tell he's constantly being disingenuous. he obviously has ulterior motives, but he's still kind to me generally, so i can't say he's all bad",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "He really doesn't seem too bad! I think you guys are just overthinking it.",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "maybe you're right. i'd like to believe so at least",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "I think it's always good to be open-minded with people like that, unless they give you a reason not to!",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "well he may have done so before with me, but i'll keep that in mind nonetheless",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Aren't you guys afraid he might read the chat history? What if he sees all of what you both are saying?",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "he doesn't read the history. and even if he did, i don't care if he knows how i feel.",
        connected: true,
        server: false
      },
      {
        author: "KeytarE",
        content: "yeah i feel similarly. also i've actually got to head out for a while, i'm about to finish up some stuff regarding my secret!!",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "Have fun!! I also need to leave :(",
        connected: true,
        server: false
      },
      {
        author: "Rozebur",
        content: "cya both.",
        connected: true,
        server: false
      },
      {
        author: "ASomberGaze",
        content: "null",
        connected: false,
        server: true
      },
      {
        author: "KeytarE",
        content: "null",
        connected: false,
        server: true
      },
    ] as Message[]
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
    <MetaProvider>
                <Title>CatComms</Title>
                            <Link rel="icon" href={favicon}/>
                
            </MetaProvider>
      <div class="screensaver">
        <div class='header'>
        <p class="connection">You are currently connected to Extended Area Network 34, Section-B "Cat Communications" on May 9th, 20XX.</p>

          <div class="pages">
            <div>
              <A class='link' href='/secret/chatroom'>Chat Room</A>
              <p class="linkChild">/chatroom</p>
            </div>
            <div>
              <A class='link' href='/secret/profile'>My Profile</A>
              <p class="linkChild">/profile</p>
            </div>
            <div>
              <A class='link' href='/secret/userbase'>Browse Userbase</A>
              <p class="linkChild">/userbase</p>
            </div>
            <div>
              <A class='link' href='/'>Real World</A>
              <p class="linkChild">/</p>
            </div>
          </div>
        </div>
        <div style="display: grid; justify-content: center; padding: 20vh 2vw">
          <div style="place-self: start; text-align: center; height: 158px; width: 158px;" class="box">
            <div style="padding-top: 9px;" class='space-y-6'>
              <div>we</div>
              <div>are</div>
              <div>fearfully</div>
              <div>comfortable</div>

            </div>
          </div>
        </div>
        <div class="welcome">
          WELCOME.
        </div>


      </div>
    </>
  );
};




export default App;
