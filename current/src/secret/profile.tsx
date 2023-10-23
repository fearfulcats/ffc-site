import { For, Show } from 'solid-js'
import { A } from "@solidjs/router";
import './styles.css'

import { Message, action, store } from './App';

function Profile() {
    return (
        <>
        <div class='full'>
        </div>
            <div class='screensaver' style="min-height: auto;">
                <div class="header">
                    <p class="connection">You are currently connected to Extended Area Network 34B "Cat Communications" on May 9th, 20XX.</p>
                    <div class="pages" style="">
                        <div>
                            <A class='link' href='/secret/home'>Home</A>
                            <p class="linkChild">/home</p>
                        </div>
                        <div>
                            <A class='link' href='/secret/chatroom'>Chat Room</A>
                            <p class="linkChild">/chatroom</p>
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
                <div style="margin: 0"></div>
                <div class="box">User Page: <span style="color: lime;">KeytarE</span></div>
                <div class="box">
                    <div class='userInfo'>
                        About Me:
                    </div>
                    <div style="color: lime;">I'm KeytarE, but you can just call me Key! I'm also pretty new to this site, so you'll need to be a bit patient with me in that regard... Honestly I don't really know what to write here, I can't really think of anything to tell about myself...</div>
                    <div class='userInfo'>
                        Likes:
                    </div>
                    <ul style="list-style-type: square; color: lime; margin: 0;">
                        <li>listening to music</li>
                        <li>cooking</li>
                        <li>talking to my friends online</li>
                    </ul>
                    <div class='userInfo'>
                        Dislikes:
                    </div>
                    <ul style="list-style-type: square; color: lime; margin: 0;">
                        <li>mean people!!!</li>
                        <li>my parents</li>
                        <li>crowded spaces</li>
                    </ul>
                </div>

                <div class='box' >
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
    )
}

export default Profile