import type { Component } from 'solid-js';

import { For, Show, createEffect, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "../app.css"

import disarray from "../assets/disarray.png"
import test from "../assets/op15.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';


const MainOld: Component = () => {
    const [showCopyright, setShowCopyright] = createSignal(false)
    return (

        <>

            <div class='main min-h-[250vh] '>
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
                        <span class='my-2'>NOTE: Character designs you see there are not final. My character design is limited by my failing artistic ability, so I will likely update them as I see fit.</span>

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

const Main: Component = () => {
    const store = createMutable({
        quipList: ["enjoy the show.", "i've got my eye on you.", "things are never as they seem.", "hope you're happy.", "beware the all-knowing."],
        secretActivated: false,
        pageVisit: 0,
        dialValue: 0,
        commandLineText: `\nC:\\Users\\Rozebur> ls\nDesktop\nDocuments\nDownloads\nMusic\nPictures\nVideos\nC:\\Users\\Rozebur> cd documents\nC:\\Users\\Rozebur\\Documents> ls\ncommunity member data\nfinances\nnotes\npersonal\nsecret\nstuff for seth (delete later)\nwork\nC:\\Users\\Rozebur\\Documents> cd secret\nC:\\Users\\Rozebur\\Documents\\secret> ls\nassets\ncomponents\nlib\nEANMUI.exe\nC:\\Users\\Rozebur\\Documents\\secret> start eanmui.exe\nLoading...`
    })
    let todaysSecurityCode = Math.floor(Math.random() * store.quipList.length)

    createEffect(() => {
        const hasVisitedPage = localStorage.getItem("pageVisit")
        if (hasVisitedPage) {
            store.pageVisit = Number(hasVisitedPage) + 1

        } else {
            store.pageVisit = 1
            todaysSecurityCode = 0
        }
        localStorage.setItem("pageVisit", `${store.pageVisit}`)
    })

    let speed = 75
    let i = 0
    function typeWriter() {

        if (i < store.commandLineText.length) {

            console.log(document.getElementById("typewriter")!.innerHTML.charAt(i))
            document.getElementById("typewriter")!.innerHTML = document.getElementById("typewriter")!.innerHTML.slice(0, -1);
            document.getElementById("typewriter")!.innerHTML += store.commandLineText.charAt(i) + "_";
            i++;
            setTimeout(typeWriter, speed);

        } else {
            window.location.replace("./secret/home")
        }
    }
    return (

        <>
            <div style={{ "background-image": `url(${test})` }} class='bg-repeat [image-rendering:pixelated] w-screen min-h-screen '>

                <div class='w-full justify-center items-center flex-col flex p-8 space-y-10 h-full '>
                    <div class='fearfulText lg:text-8xl text-4xl font-mono italic text-white '>fearful cats</div>
                    <div class='w-3/4 h-[900px] [box-shadow:inset_10px_10px_9px_-7px_white,_inset_-10px_-10px_9px_-7px_black]'>

                        <div class=' border  text-white h-[900px]'>
                            <Show when={store.secretActivated} fallback={
                                <Tabs orientation='vertical' class='flex h-full '>
                                    <TabsList class='flex flex-col w-1/5 space-y-10 h-full p-0  text-white rounded-none
                                    [background:radial-gradient(circle,_rgba(44,0,116,1)_0%,_rgba(70,106,252,1)_100%)]
                                    border-r border-black
                                    '>

                                        <MainTabTrigger value='intro'>Introduction</MainTabTrigger>
                                        <MainTabTrigger class={`[background:linear-gradient(180deg,_rgba(163,196,251,1)_0%,_rgba(59,130,246,1)_100%)] data-[selected]:[background:#2d64be]`} value='about'>Background</MainTabTrigger>
                                        <MainTabTrigger class='[background:linear-gradient(180deg,_rgba(250,225,146,1)_0%,_rgba(234,179,8,1)_100%)] data-[selected]:[background:#bd920e]' value='content'>Content</MainTabTrigger>
                                        <MainTabTrigger class='[background:linear-gradient(180deg,_rgba(151,255,190,1)_0%,_rgba(34,197,94,1)_100%)] data-[selected]:[background:#12863d]' value='platforms'>Platforms</MainTabTrigger>
                                        <MainTabTrigger class='[background:linear-gradient(180deg,_rgba(255,173,116,1)_0%,_rgba(249,115,22,1)_100%)] data-[selected]:[background:#aa5113]' value='future'>Onwards</MainTabTrigger>
                                        <Show when={todaysSecurityCode == 4}>
                                            <MainTabTrigger value='secret' class='[background:linear-gradient(180deg,_rgba(255,133,133,1)_0%,_rgba(227,7,7,1)_100%)] data-[selected]:[background:#aa1313]' onClick={() => {
                                                store.secretActivated = true
                                                typeWriter()
                                            }}>???</MainTabTrigger>
                                        </Show> 
                                    </TabsList>
                                    <TabsContent value='intro' class='[background:linear-gradient(180deg,_rgba(114,16,222,1)_0%,_rgba(180,154,209,1)_100%)] m-0 w-full
                                    p-10'>
                                        <div class='text-3xl font-serif italic'>Welcome to the home base of fearful cats.</div>
                                        <div class='h-px border border-dashed'></div>
                                        <div class='w-full grid grid-cols-2 mt-10 h-1/2 gap-10 text-xl font-serif'>
                                            <div class=' '>For whatever reason you've come here, your presence is much appreciated.
                                                <br />

                                                <br />

                                            </div>
                                            <div>
                                                <p class='underline'>While you're here...</p>
                                                <ul class='space-y-2 mt-2'>
                                                    <li>Take your time, explore. You never know what the world might have in store.</li>
                                                    <li>Indulge yourself in knowledge untold. Learn what you've missed in days of old.</li>
                                                    <li>Explore fictitious dreams. Be careful not to burst at the seams.</li>
                                                    <li>Leap from place to place. In your journey you'll meet many a new face.</li>
                                                    <li>The future is near. Protect that of which you hold dear.</li>
                                                    <li class='hover:text-black text-transparent'>In plain sight lies a ghost. Embrace what you fear the most.</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </TabsContent>
                                    <TabsContent value='about' class='bg-blue-500 m-0 w-full p-10'>
                                        <div class='text-3xl font-serif italic'>Here lies a cat obsessed game developer.</div>
                                        <div class='h-px border border-dashed'></div>
                                    </TabsContent>
                                    <TabsContent value='content' class='bg-yellow-500 m-0 w-full p-10'>
                                        <div class='text-3xl font-serif italic'>What's in development?</div>
                                        <div class='h-px border border-dashed'></div>
                                    </TabsContent>
                                    <TabsContent value='platforms' class='bg-green-500 m-0 w-full p-10'>
                                        <div class='text-3xl font-serif italic'>Across the cosmos, you'll find us.</div>
                                        <div class='h-px border border-dashed'></div>
                                    </TabsContent>
                                    <TabsContent value='future' class='bg-orange-500 m-0 w-full p-10'>
                                        <div class='text-3xl font-serif italic'>Living in the present, planning for the future.</div>
                                        <div class='h-px border border-dashed'></div>
                                    </TabsContent>
                                </Tabs>
                            }>
                                <div class='bg-black m-0 w-full h-full text-gray-200 font-mono'>
                                    <div>
                                        MegaWare Brixwork
                                        <br />
                                        (c) MegaWare Corporation. All rights reserved.
                                        <br />
                                        <br />
                                        Welcome User [Rozebur]. Type help for a list of all commands.
                                        <div class='grid text-red-600'>
                                            <div id="typewriter" class='whitespace-pre-line '></div>

                                        </div>
                                    </div>
                                </div>
                            </Show>



                        </div>
                    </div>
                    <div class='fearfulText lg:text-8xl text-4xl font-mono italic text-yellow-300 '>{store.quipList[todaysSecurityCode]}</div>

                </div>

            </div>
        </>

    )
}

function MainTabTrigger(props: { value: string, children: any, onClick?: () => any, class?: string }) {
    return (
        <TabsTrigger onClick={props.onClick} class={`data-[selected]:[background:#6c37a6] data-[selected]:drop-shadow-none data-[selected]:text-black 
        data-[selected]:[box-shadow:inset_10px_10px_9px_-7px_black,_inset_-10px_-10px_9px_-7px_white] data-[selected]:[text-shadow:2px_2px_white]
        hover:drop-shadow-none hover:[text-shadow:2px_2px_black]
        hover:[box-shadow:inset_10px_10px_9px_-7px_white,_inset_-10px_-10px_9px_-7px_black]
        text-white  w-5/6 rounded-none [background:linear-gradient(0deg,_rgba(114,16,222,1)_0%,_rgba(180,154,209,1)_100%)]
        transition-none border border-black 
          text-3xl `+ props.class} value={props.value}>{props.children}</TabsTrigger>
    )
}

// [box-shadow:inset_10px_10px_9px_-7px_white,_inset_-10px_-10px_9px_-7px_black,2px_2px_12px_-3px_black]

export default Main