import { For, Show } from 'solid-js'
import { A } from "@solidjs/router";
import './styles.css'

import { Message, action, store } from './App';

export function ChatRoom() {
    return (
        <div class='screensaver'>
            <div class="header">

                <p class="connection">You are currently connected to Extended Area Network 34B "Cat Communications" on May 9th, 20XX.</p>
                <div class="pages" style="">
                    <div>
                        <A class='link' href='/'>Home</A>
                        <p class="linkChild">/</p>
                    </div>
                    <div>
                        <A class='link' href='/profile'>My Profile</A>
                        <p class="linkChild">/profile</p>
                    </div>
                    <div>
                        <A class='link' href='/userbase'>Browse Userbase</A>
                        <p class="linkChild">/userbase</p>
                    </div>
                    <div>
                        <A class='link' href='/chatroom'>Real World</A>
                        <p class="linkChild">/main</p>
                    </div>
                </div>
            </div>
            <div class='box' style="margin-top:15vh">Cat Communications Official Chat Room!</div>
            <div style="display: inline;">
                <div style="display: flex">
                    <div class="view" onClick={() => action.sHMessages()} >{store.showMessages ? "Hide" : "View"} Messages</div>
                    <div class="view" onClick={() => action.sHHistory()} >{store.showHistory ? "Hide" : "View"} History</div>
                    <div style='width: 100%; background-color: black; z-index: 20'></div>
                </div>
                <Show
                    when={store.showMessages || store.showHistory}
                    children={<Console />}
                />
            </div>

        </div>
    )
}

function Console() {
    if (store.showHistory) {
        return (
            <div>


                <div class="console" style=" padding-top: 5vh; padding-bottom: 1vh">
                    <For
                        each={store.history.messageList1}
                        children={(message) => <MessageDecoder message={message} />}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div>


                <div class="console" style=" padding-top: 5vh;">
                    <Show
                        when={!store.messagesRead}
                        children={
                            <h1 class="newMessages">You have <i>{store.messages.messageList1.length}</i> unread messages!</h1>
                        }
                    />

                    <For
                        each={store.messages.messageList1}
                        children={(message) => <MessageDecoder message={message} />}
                    />
                    <div class='connected'>
                        Users currently connected: 0
                    </div>
                </div>
                <div style={"display: flex"}>
                    <Show
                        when={!store.messagesRead}
                        children={
                            <div class="view" onClick={() => store.messagesRead = true}>Mark as Read</div>
                        }
                    />

                    <div class="arrow">{">"}</div>
                    <Show
                        when={!store.sendAttempt}
                        children={
                            <input class="consoleInput" />
                        }
                        fallback={
                            <input disabled placeholder='ERROR 23: AUTHORIZATION EXPIRED' class="consoleInput" />
                        }
                    />

                    <div class="view" onClick={() => store.sendAttempt = true}>Send</div>
                </div>

            </div>

        )
    }
}

const MessageDecoder = (props: { message: Message }) => {
    const message = props.message
    if (message.server) {
        if (message.connected) {
            return (<p class="speakerServer"> + User [{message.author}] has connected!</p>)
        } else {
            return (<p class="speakerServer"> - User [{message.author}] has disconnected!</p>)
        }
    } else {
        switch (message.author) {
            case 'Cozy_Cat':
                return (<p class="speakerBlue" textContent={"> " + message.content} />)
            case 'Rozebur':
                return (<p class="speakerRed" textContent={"> " + message.content} />)
            case 'SoulSella':
                return (<p class="speakerYellow" textContent={"> " + message.content} />)
            case 'KeytarE':
                return (<p class="speakerLime" textContent={"> " + message.content} />)
            case 'MaxIsWax':
                return (<p class="speakerGreen" textContent={"> " + message.content} />)
            default:
                return (<p textContent={"error"} />)
        }
    }
}


