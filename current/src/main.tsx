import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "./classes.css"
import pic from "./assets/lunacy.png"

const Main: Component = () => {
    const [showCopyright, setShowCopyright] = createSignal(false)
    return (
        // <div>
        //     <div class='all'>

        //         <div class='welcom'>
        //             Welcome!
        //         </div>
        //         <div class="port">-you have arrived at the home base of fearful cats-</div>
        //         <div class='grids'>
        //             <div class='grild'>
        //                 You were interested enough to go to this website?
        //                 <br/>
        //                 I'm proud of you for that!
        //             </div>
        //             <div class='grilled'>
        //                 I'm sure it's a decision you won't regret!
        //                 <br/>
        //                 Or maybe you might?
        //             </div>
        //         </div>
        //         <div class="serious">
        //             Sorry about that. Enough with the fancifications. You wanted to see me? Well, here I am. Yes, it's me. <i>I</i> am THE fearful cat.
        //             <br/>
        //             Or... something like that. Alright alright, you want some info? Go ahead, scroll down. I won't stop you.
        //         </div>

        //     </div>
        //     <div class="fear">
        //         <div class='fearHeader'>
        //             I should probably try getting to the point quicker. Sorry again.
        //         </div>
        //         <div class='grids'>
        //             <div>
        //                 <div class='fearGrild'>
        //                 <div class="fearTitle">Liar</div>
        //                     I guess I'll just tell you a bit about who the "fearfulcats" are!
        //                     <br/>
        //                     To be honest, it's just me.
        //                     Yeah, yeah... Sorry to disappoint.
        //                     <br/>
        //                     Maybe in the future things'll change but for now... Just me!
        //                     <br/>
        //                     {/* I'm also known as <A class='kittyLink' href='/kitteholic'>Kitteholic</A>, but he's my alter ego. */}
        //                     <br/>
        //                     <br/>
        //                     ...Does the 's' in "fearfulcats" count as false advertising?
        //                     <br/>
        //                     I really hope not. That would suck. 

        //                 </div>
        //                 <br/>
        //                 <div class='fearGrild'>
        //                 <div class="fearTitle">Who?</div>
        //                     Anyway. So yeah, I'm the fearful cat himself.
        //                     <br/>
        //                     I mostly do programming - like web and game developing
        //                     <br/>
        //                     I'm an amateur so please don't expect much...
        //                     <br/>
        //                     <br/>
        //                     I also like to do art but I REALLY suck at that.
        //                     <br/>
        //                     How much do I suck? A pretty dang good amount.
        //                     <br/>
        //                     More than I suck at writing these little cards... Does that help?
        //                     <br/>
        //                     If you're still not convinced, just take a look to your right.
        //                     <br/>
        //                     Yeah, I drew that. Now do you believe me?
        //                     <br/>
        //                     Feel free to use that picture as a reference when imagining me.

        //                 </div>

        //                 <br/>
        //                 <div class='fearGrild'>
        //                     <div class="fearTitle">"Game"</div>
        //                     In other news, I'm currently working on a game!
        //                     <br/>
        //                     The release date is completely non-existent unfortunately.
        //                     <br/>
        //                     Let's just say it would be a miracle if I ever do manage to release it.
        //                     <br/>
        //                     But, that hasn't stopped me from hiding a couple secrets around here...
        //                     <br/>
        //                     <br/>
        //                     If you're interested... Maybe you'll take a look around?
        //                     <br/>
        //                     I think you'd find it pretty interesting!

        //                 </div>
        //             </div>
        //             <div style="align-self: center">

        //                     <img class="fearImg" src={pic} width={700} height={700}/>

        //             </div>
        //         </div>
        //     </div>
        //     <div class="game">
        //         <div class="gameHeader">Game...?</div>
        //         <div>
        //             <div class='gameAbout'>
        //                 Yeah, I'm working on a game. It's just something I do in my free time though.
        //                 What's it about? That's a question with a loaded response, you know.
        //                 But if you really do wanna know...
        //                 <br/>
        //                 <br/>
        //                 I'll put it as simple as I can: You play as an anthropomorphic <A class="secretLink" href='/secret/home'>cat</A> who moves to a new town to get away from his family,
        //                 and you have to do the best you can to make friends while trying to not accidentally (or purposely) kill anyone while you're at it. Simple, right?
        //                 Of course it is! Anyway, each of the cats in the town (Wait, did I mention all the characters are anthropomorphic cats? Well, they are. It's a personal artistic choice.)
        //                 will need your help with something, and if you plan everything out right, you should be able to help them all! But if you don't... Well, let's just hope that you do!

        //                 <br/>
        //                 <br/>
        //                 That's the idea at least. I'm really excited about it, but who knows if I'll be able to finish it. Although... If you are interested... Knowing that would help motivate me to work on it! :3

        //             </div>
        //             <div class="gameLink">
        //                 <A href="/game"> Read All About It!</A>

        //             </div>

        //         </div>
        //     </div>
        //     <div class="me">
        //         <div class='meHeader'>ABOUT ME!!</div>
        //         <div>
        //             <br/>
        //             <div class="meAbout">
        //                 You wanna know about me?
        //                 <br/>
        //                 There's a lot to tell, but that's all secret for now...
        //                 I'll let you know where to find me though!
        //             </div>
        //         </div>
        //         <div>
        //             <div class="social">
        //                 <a href="https://www.tiktok.com/@fearfulcats">TikTok</a>
        //                 <div>I post sketches and game progress here!</div>
        //             </div>
        //             <div class="social">
        //                 <a href="https://twitter.com/fearfulcats">"Twitter"</a>
        //                 <div>Rants and sketches and other garbage!</div>
        //             </div>
        //             <div class="social">
        //                 <a href="https://fearfulcats.tumblr.com">Tumblr</a>
        //                 <div>Game progress, standalone stories, & sketches!</div>
        //             </div>
        //         </div>
        //         <div class='socialPlug'>SOCIAL MEDIA PLUG</div>
        //     </div>
        //     <div class='disclaimer'>
        //         <div class="disclaimerHeader">Just letting you know...</div>
        //         <br/>
        //         <div>
        //             <div class='disclaimerAbout'>
        //                 This site is made with the JavaScript framework Solid! It's also hosted using GitHub Pages!
        //                 <br/>
        //                 Due to those facts, if you somehow ended up on a different part of my website, refreshing the page there will lead you to a 404.
        //                 Don't freak out though, the site is still here, but you'll have to go back to the main page for things to work again.
        //                 <br/>
        //                 Also, since I kinda suck at everything, this site looks sorta terrible on mobile. It's definitely better to be viewed on a computer.
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>

            <div class='main h-[250vh] '>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3" class='animate-spin'></div>
                <div class='w-full justify-center items-center flex-col flex p-8 space-y-10'>
                    <div class='fearfulText lg:text-8xl text-4xl font-mono italic text-white z-10'>fearful cats</div>
                    {/* <div class='bg-slate-700 p-4 border z-10 text-white'>Welcome to the home base of fearful cats.</div> */}
                    <div class='bg-slate-700 p-4 border z-10 text-white'>Here lies a cat obsessed game developer.</div>
                    <div class='bg-slate-700 border z-10 py-4 text-white lg:w-1/2 flex flex-col justify-between items-center text-center'>

                        <span class='text-3xl font-semibold font-serif underline'>Welcome.</span>
                        <span class='my-2 mb-4'>Thank you for choosing to check out my website! </span>
                        <div class='divider w-full h-12 '></div>
                        <span class='text-3xl font-semibold font-serif underline mt-4'>About Me:</span>
                        <div class='my-2 mb-4 -space-y-2'>
                            <p class=''>I'm a part-time full-stack developer who spends every free moment as a game developer.</p>
                            <br />
                            <p class=''>I absolutely love writing stories and turning said stories into potential games.</p>
                            <br />
                            <p class=''>Currently, I'm working on a game called, "<A href="/game" class='text-red-500 hover:cursor hover:underline italic focus:underline   '>fearfully comfortable.</A>".</p>
                            <br />
                            <p class=''>The next section will cover what that game is about, as well as my future plans for it.</p>
                        </div>
                        <div class='divider w-full h-12'></div>
                        <span class='text-3xl font-semibold font-serif underline mt-4 italic'>fearfully comfortable.</span>
                        <div class='my-2 mb-4 -space-y-2'>
                            <p class=''>This game follows an anthro cat's journey to learn how to connect with others and move on from his past.</p>
                            <br />
                            <p class='font-bold'>The game tackles many aspects of mental health and even contains depictions of suicide in certain bad endings.</p>
                            <br />
                            <p class=''>Coming from a someone who's dealt with a lot of the issues depicted in the game, working on this game has helped me cope and the story means a lot to me.</p>
                            <br />
                            <p class=''>I really hope that it will be able to touch the hearts of players once it is finally released.</p>
                            <br />
                            <p class=''>However, that time is quite far off.</p>
                            <br />
                            <p class=''>Although the story is finished, the actual game is nowhere near completed.</p>
                            <br />
                            <p class=''>Even so, if you are interested, your support would mean the world.</p>
                            <br />
                            <p class=''>In that case, please check out the following link for more information about my game: <A href="/game" class='text-red-500 hover:cursor hover:underline italic focus:underline'>fearfully comfortable.</A></p>
                        </div>
                        <div class='divider w-full h-12'></div>
                        <span class='text-3xl font-semibold font-serif underline mt-4'>End.</span>
                        <span class='my-2'>That's all of the info I have for you at the moment!</span>



                    </div>
                    <div class='bg-slate-700 p-4 border z-10 text-white lg:w-1/2 flex flex-col justify-between items-center text-center'>
                        <span class='text-3xl font-semibold font-serif underline mt-4'>Social Media:</span>
                        <span class='my-2'>I don't really know how to promote my game through most social medias, but I do often post art and game progress on my tumblr! ↓</span>
                        <span class='text-xl font-semibold text-purple-500 font-serif hover:underline focus:underline'><a href="https://fearfulcats.tumblr.com">Tumblr</a></span>
                    </div>
                    <div class='bg-slate-700 p-4 border z-10 text-white lg:w-1/2 flex flex-col justify-between items-center text-center'>
                        <span class='text-3xl font-semibold font-serif underline mt-4'>Disclaimers:</span>
                        <span class='my-2'>This site is created using the JavaScript framework SolidJS, and hosted through GitHub Pages!</span>
                        <span class='my-2'>Due to those facts, if you somehow ended up on a different part of my website, refreshing the page there will lead you to a 404.
                            Don't freak out though, the site is still here, but you'll have to go back to the main page for things to work again.</span>
                        <span class='my-2 hover:underline hover:cursor-pointer' onClick={() => setShowCopyright(!showCopyright())}>Click this to show the Copyright for this CSS background I borrowed.</span>
                        <Show
                            when={showCopyright()}
                            children={
                                <code>Copyright (c) 2024 by MattMarble (https://codepen.io/mattmarble/pen/qBdamQz)

                                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

                                </code>
                            }

                        />
                    </div>
                </div>

            </div>
            <div class='main flex w-full justify-center items-center text-purple-800'><A class="secretLink" href='/secret/home'>Click me for a secret!</A></div>
        </>

    )
}

export default Main