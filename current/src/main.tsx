import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "./classes.css"
import pic from "./assets/lunacy.png"

const Main: Component = () => {
    return (
        <div>
            <div class='all'>
                
                <div class='welcom'>
                    Welcome!
                </div>
                <div class="port">-you have arrived at the home base of fearful cats-</div>
                <div class='grids'>
                    <div class='grild'>
                        You were interested enough to go to this website?
                        <br/>
                        I'm proud of you for that!
                    </div>
                    <div class='grilled'>
                        I'm sure it's a decision you won't regret!
                        <br/>
                        Or maybe you might?
                    </div>
                </div>
                <div class="serious">
                    Sorry about that. Enough with the fancifications. You wanted to see me? Well, here I am. Yes, it's me. <i>I</i> am THE fearful cat.
                    <br/>
                    Or... something like that. Alright alright, you want some info? Go ahead, scroll down. I won't stop you.
                </div>
                
            </div>
            <div class="fear">
                <div class='fearHeader'>
                    I should probably try getting to the point quicker. Sorry again.
                </div>
                <div class='grids'>
                    <div>
                        <div class='fearGrild'>
                        <div class="fearTitle">Liar</div>
                            I guess I'll just tell you a bit about who the "fearfulcats" are!
                            <br/>
                            To be honest, it's just me.
                            Yeah, yeah... Sorry to disappoint.
                            <br/>
                            Maybe in the future things'll change but for now... Just me!
                            <br/>
                            I'm also known as <A class='kittyLink' href='/kitteholic'>Kitteholic</A>, but he's my alter ego.
                            <br/>
                            <br/>
                            ...Does the 's' in "fearfulcats" count as false advertising?
                            <br/>
                            I really hope not. That would suck. 
                            
                        </div>
                        <br/>
                        <div class='fearGrild'>
                        <div class="fearTitle">Who?</div>
                            Anyway. So yeah, I'm the fearful cat himself.
                            <br/>
                            I mostly do programming - like web and game developing
                            <br/>
                            I'm an amateur so please don't expect much...
                            <br/>
                            <br/>
                            I also like to do art but I REALLY suck at that.
                            <br/>
                            How much do I suck? A pretty dang good amount.
                            <br/>
                            More than I suck at writing these little cards... Does that help?
                            <br/>
                            If you're still not convinced, just take a look to your right.
                            <br/>
                            Yeah, I drew that. Now do you believe me?
                            <br/>
                            Feel free to use that picture as a reference when imagining me.
                            
                        </div>
                        
                        <br/>
                        <div class='fearGrild'>
                            <div class="fearTitle">"Game"</div>
                            In other news, I'm currently working on a game!
                            <br/>
                            The release date is completely non-existent unfortunately.
                            <br/>
                            Let's just say it would be a miracle if I ever do manage to release it.
                            <br/>
                            But, that hasn't stopped me from hiding a couple secrets around here...
                            <br/>
                            <br/>
                            If you're interested... Maybe you'll take a look around?
                            <br/>
                            I think you'd find it pretty interesting!
                            
                        </div>
                    </div>
                    <div style="align-self: center">
                        
                            <img class="fearImg" src={pic} width={700} height={700}/>
                        
                    </div>
                </div>
            </div>
            <div class="game">
                <div class="gameHeader">Game...?</div>
                <div>
                    <div class='gameAbout'>
                        Yeah, I'm working on a game. It's just something I do in my free time though.
                        What's it about? That's a question with a loaded response, you know.
                        But if you really do wanna know...
                        <br/>
                        <br/>
                        I'll put it as simple as I can: You play as an anthropomorphic <A class="secretLink" href='/secret/home'>cat</A> who moves to a new town to get away from his family,
                        and you have to do the best you can to make friends while trying to not accidentally (or purposely) kill anyone while you're at it. Simple, right?
                        Of course it is! Anyway, each of the cats in the town (Wait, did I mention all the characters are anthropomorphic cats? Well, they are. It's a personal artistic choice.)
                        will need your help with something, and if you plan everything out right, you should be able to help them all! But if you don't... Well, let's just hope that you do!

                        <br/>
                        <br/>
                        That's the idea at least. I'm really excited about it, but who knows if I'll be able to finish it. Although... If you are interested... Knowing that would help motivate me to work on it! :3
                    
                    </div>
                    <div class="gameLink">
                        <A href="/game"> Read All About It!</A>
                       
                    </div>
                    
                </div>
            </div>
            <div class="me">
                <div class='meHeader'>ABOUT ME!!</div>
                <div>
                    <br/>
                    <div class="meAbout">
                        You wanna know about me?
                        <br/>
                        There's a lot to tell, but that's all secret for now...
                        I'll let you know where to find me though!
                    </div>
                </div>
                <div>
                    <div class="social">
                        <a href="https://www.tiktok.com/@fearfulcats">TikTok</a>
                        <div>I post sketches and game progress here!</div>
                    </div>
                    <div class="social">
                        <a href="https://twitter.com/fearfulcats">"Twitter"</a>
                        <div>Rants and sketches and other garbage!</div>
                    </div>
                    <div class="social">
                        <a href="https://fearfulcats.tumblr.com">Tumblr</a>
                        <div>Game progress, standalone stories, & sketches!</div>
                    </div>
                </div>
                <div class='socialPlug'>SOCIAL MEDIA PLUG</div>
            </div>
            <div class='disclaimer'>
                <div class="disclaimerHeader">Just letting you know...</div>
                <br/>
                <div>
                    <div class='disclaimerAbout'>
                        This site is made with the JavaScript framework Solid! It's also hosted using GitHub Pages!
                        <br/>
                        Due to those facts, if you somehow ended up on a different part of my website, refreshing the page there will lead you to a 404.
                        Don't freak out though, the site is still here, but you'll have to go back to the main page for things to work again.
                        <br/>
                        Also, since I kinda suck at everything, this site looks sorta terrible on mobile. It's definitely better to be viewed on a computer.
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main