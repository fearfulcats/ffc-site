import { For, Show } from 'solid-js'
import { A } from "@solidjs/router";
import './styles.css'

import { Message, action, store } from './App';

export function Userbase() {
    return (
        <div class='screensaverError'>
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
                        <A class='link' href='/chatroom'>Chat Room</A>
                        <p class="linkChild">/chatroom</p>
                    </div>
                    <div>
                        <A class='link' href='/chatroom'>Real World</A>
                        <p class="linkChild">/main</p>
                    </div>
                </div>
            </div>
            <div class='errorScreen'>
                ERROR 59: USER HAS BEEN BLOCKED DUE TO EXTERNAL REQUEST
            </div>
        </div>
    )
}