import type { Component } from 'solid-js';
import { A } from "@solidjs/router";
import "./classes.css"

import kitteholic from "./assets/kit5hires.png"

const Kitteholic: Component = () => {
    return (
        <div class="kitty">
            <div class='kittyHeader'>
            <A class='kittyLink2 '  href='/'>Bye!</A> 
            </div>
            <div class='kittyFull' >
                <section class='kittySection'>
                    <span class='kittyH'>I'm Kitteholic!</span>
                    <span class='kittyHMini'>aka the person (cat) behind fearfulcats </span>
                    <p>
                        <span class='kittyLine'>ABOUT ME:</span>
                        19 year old gay catboy... what else is there to say
                        <br/>
                        i dont have a job and i live with my parents
                        <br/>
                        i'm a loser...
                        <br/>
                        <br/>
                        <span class='kittyLine'>WHY AM I HERE (idk ask a philosopher not a catboy):</span>
                        i started fearfulcats so i could have a place to work on my hobbies that wasn't directly connected to my kitteholic accounts. as you may know i'm currently working on a game, more info on that in other parts of the main webpage. i'd be grateful if you could check it out!

                        <br/>
                        <br/>
                        <span class='kittyLine'>LIKES:</span>
                        - CATS!!!!!!!!!!!!!!!!!!!
                        <br/>
                        - writing stories!
                        <br/>
                        - listening to music (post-hardcore and edm are my fav genres)
                        <br/>
                        - cooking!
                        <br/>
                        - programming (game and web dev)
                        <br/>
                        - looking at cute art :3
                        
                        <br/>
                        <br/>
                        <span class='kittyLine'>CURRENT FAV BANDS/ARTISTS:</span>
                        - Alesana (post-hardcore/screamo)
                        <br/>
                        - Famous Last Words (post-hardcore/metalcore)
                        <br/>
                        - she (EDM/Chiptune)
                        <br/>
                        - Waterparks
                        <br/>
                        - Daft Punk
                        <br/> 
                        - The Strokes
                        
                        <br/>
                        <br/>
                        <span class='kittyLine'>SOCIALS:</span>
                        jk im too lazy to put links in here. but! i'm known as <span style={"background-color: #353535"}>kitteholic</span> on pretty much every platform that i use. discord, twitch (yes i stream go watch!), twitter... some other stuff as well probably
                        <br/>
                        <br/>
                        <span class='kittyLine'>SOMETHING ELSE:</span>
                        if you wanna chat with me i use discord primarily, i'll respond much quicker there than anywhere else. also i have social anxiety so i hate starting convos... i promise i don't hate you i'm just a scaredy cat
                    </p>
                </section>
                <div class='kittyPicDiv'>

                    <img src={kitteholic} class='kittyPic'/>
                    <div class='kittyPicDesc'>literally me</div>
                </div>
            </div>
        </div>
    )
}

export default Kitteholic