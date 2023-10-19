import { For, Show } from 'solid-js'
import { A } from "@solidjs/router";
import './styles.css'

import { Message, action, store } from './App';

export function Profile() {
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
                        <A class='link' href='/chatroom'>Chat Room</A>
                        <p class="linkChild">/chatroom</p>
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
            <div class='box' style="margin: 15vh 0">
                My Personal Blog:

                <div class="blogs">
                    <For
                        each={store.blogs}
                        children={(blog, i) => <p><span style="color: white">[BLOG {i() + 1}, {blog.date}]:</span> {blog.content}</p>}
                    />
                </div>
            </div>
        </div>
    )
}