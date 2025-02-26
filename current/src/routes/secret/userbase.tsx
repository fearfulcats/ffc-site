import { For, Show } from 'solid-js'
import { A } from "@solidjs/router";
import './styles.css'

import { Message, action, store } from './home';
import { Link, MetaProvider, Title } from '@solidjs/meta';
import favicon from "../../assets/secret/faviconcatcomms.png"


function Userbase() {
    return (
        <>
        <MetaProvider>
                        <Title>CatComms</Title>
                                    <Link rel="icon" href={favicon}/>
                        
                    </MetaProvider>
        <div class='screensaverError'>
            <div class="header">
                <p class="connection">You are currently connected to Extended Area Network 34, Section-B "Cat Communications" on May 9th, 20XX.</p>
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
                        <A class='link' href='/secret/profile'>My Profile</A>
                        <p class="linkChild">/profile</p>
                    </div>
                    <div>
                        <A class='link' href='/'>Real World</A>
                        <p class="linkChild">/</p>
                    </div>
                </div>
            </div>
            <div class='errorScreen leading-snug'>
                ERROR 59: USER HAS BEEN BLOCKED DUE TO EXTERNAL REQUEST
            </div>
        </div>
        </>
    )
}

export default Userbase