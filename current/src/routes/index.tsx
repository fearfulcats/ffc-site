import type { Component } from 'solid-js';

import { For, Show, createEffect, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "../app.css"

import disarray from "../assets/disarray.png"
import favicon from "../assets/favicon2.png"

import test from "../assets/op15.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Link, MetaProvider, Title } from '@solidjs/meta';


const Main: Component = () => {
    const store = createMutable({
        quipList: ["enjoy the show.", "i've got my eye on you.", "things are never as they seem.", "hope you're happy.", "beware the all-knowing."],
        secretActivated: false,
        pageVisit: 0,
        dialValue: 0,
        todaysSecurityCode: 0,
        commandLineText: `\nC:\\Users\\Rozebur> ls\nDesktop\nDocuments\nDownloads\nMusic\nPictures\nVideos\nC:\\Users\\Rozebur> cd documents\nC:\\Users\\Rozebur\\Documents> ls\ncommunity member data\nfinances\nnotes\npersonal\nsecret\nstuff for seth (delete later)\nwork\nC:\\Users\\Rozebur\\Documents> cd secret\nC:\\Users\\Rozebur\\Documents\\secret> ls\nassets\ncomponents\nlib\nEANMUI.exe\nC:\\Users\\Rozebur\\Documents\\secret> start eanmui.exe\nLoading...`
    })

    createEffect(() => {
        //@ts-ignore
        window.dbg = store
    })
    createEffect(() => {
        store.todaysSecurityCode = Math.floor(Math.random() * store.quipList.length)
    })

    createEffect(() => {
        const hasVisitedPage = localStorage.getItem("pageVisit")
        if (hasVisitedPage) {
            store.pageVisit = Number(hasVisitedPage) + 1

        } else {
            store.pageVisit = 1
            store.todaysSecurityCode = 0
        }
        localStorage.setItem("pageVisit", `${store.pageVisit}`)
    })
    const [typewriterIndex, setTypewriterIndex] = createSignal(0)
    function typeWriter() {
        const speed = 75

        if (typewriterIndex() < store.commandLineText.length) {

            console.log(document.getElementById("typewriter")!.innerHTML.charAt(typewriterIndex()))
            document.getElementById("typewriter")!.innerHTML = document.getElementById("typewriter")!.innerHTML.slice(0, -1);
            document.getElementById("typewriter")!.innerHTML += store.commandLineText.charAt(typewriterIndex()) + "_";
            setTypewriterIndex(typewriterIndex() + 1)
            setTimeout(typeWriter, speed);

        } else {
            window.location.replace("./secret/home")
        }
    }
    return (

        <>
        <MetaProvider>
                    <Title>Fearful Cats!</Title>
                    <Link rel="icon" href={favicon}/>
                </MetaProvider>
            <div style={{ "background-image": `url(${test})` }} class='bg-repeat [image-rendering:pixelated] w-screen min-h-screen [font-family:_"RussianGothic",_"MS_UI_Gothic",_"NEC_APC3",_Tahoma]'>

                <div class='w-full py-4 items-center flex-col flex  space-y-6 min-h-screen'>
                    <div class='relative justify-center items-center flex-col flex '>
                        <div class='absolute fearfulText lg:text-4xl text-sm font-mono italic animate-pulse text-yellow-300  rotate-[7deg] [text-shadow:2px_2px_2px_white,2px_2px_4px_gold,4px_4px_6px_black]'>{store.quipList[store.todaysSecurityCode]}</div>
                        <div class='fearfulText lg:text-8xl text-4xl font-mono italic text-white'>fearful cats</div>
                    </div>
                    <div class='w-3/4  border text-white [box-shadow:inset_10px_10px_9px_-7px_white,_inset_-10px_-10px_9px_-7px_black] h-full'>

                        <Tabs hidden={store.secretActivated} class=' h-full xl:text-xl text-sm'>
                            <TabsList class=' grid grid-cols-6 h-[90px] w-full  text-white rounded-none place-items-center
                                    bg-black
                                    border-r border-black
                                    '>

                                <MainTabTrigger value='intro'>Introduction</MainTabTrigger>
                                <MainTabTrigger value='about'>Background</MainTabTrigger>
                                <MainTabTrigger value='content'>Content</MainTabTrigger>
                                <MainTabTrigger  value='platforms'>Platforms</MainTabTrigger>
                                <MainTabTrigger  value='future'>Onwards</MainTabTrigger>
                                <MainTabTrigger hidden={store.todaysSecurityCode != 4} value='secret'  onClick={() => {
                                    store.secretActivated = true
                                    document.getElementById("typewriter")!.innerHTML = ""
                                    typeWriter()
                                }}>???</MainTabTrigger>
                            </TabsList>
                            <TabsContent value='intro' class='[background:linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(94,44,237,1)_100%)] m-0 w-full
                                    lg:p-10 p-4'>
                                <div class='text-3xl font-serif italic'>Welcome to the home base of fearful cats.</div>
                                <div class='h-px border border-dashed'></div>
                                <div class='w-full grid grid-cols-2 mt-10 h-1/2 gap-10 '>
                                    <div class=' '>For whatever reason you've come here, your presence is much appreciated.
                                        This is a place for all who have discovered it. A safe place. So rest your weary soul, dear friend. Rest, and awaken with a newfound fervor to take on the world. 


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
                            <TabsContent value='about' class='[background:linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(244,32,170,1)_100%)] m-0 w-full p-10'>
                                <div class='text-3xl font-serif italic'>The stories never end.</div>
                                <div class='h-px border border-dashed'></div>
                                <div  class='mt-10 '>Here we stand, in this base, created as a housing to present the unstoppable amassing of various tales. We wish to tell the world of these tales, written by our fearful cats themselves. For now, those stories will exist through the medium of video games.</div>
                                
                                <div>The (currently) singular member of the fearful cats - <div class='inline hover:underline hover:cursor-pointer text-pink-500' onClick={()=>window.location.replace("./furfulcat/home")}>furfulcat</div>.</div>
                            </TabsContent>
                            <TabsContent value='content' class='[background:linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(244,218,32,1)_100%)] m-0 w-full p-10'>
                                <div class='text-3xl font-serif italic'>What's in development?</div>
                                <div class='h-px border border-dashed'></div>
                                <div class='mt-10 '>Game ideas are plentiful here, but plans are actively working towards 3 specifically.</div>
                                <div>A story game reminiscent of OneShot about a town of cats in the process of falling apart - <div class='inline hover:underline hover:cursor-pointer text-pink-500' onClick={()=>window.location.replace("./games/ffc")}>fearfully comfortable</div>*.</div>
                                <div>A classic Legend of Zelda type RPG about a journey to stop an impending war - name TBD.</div>
                                <div>A metroidvania in the style of Hollow Knight/Nine Sols about uniting 10 kingdoms - name undisclosed.</div>
                                <div>*Intended for mature audiences</div>

                            </TabsContent>
                            <TabsContent value='platforms' class='[background:linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(32,244,80,1)_100%)] m-0 w-full p-10'>
                                <div class='text-3xl font-serif italic'>Across the cosmos, you'll find us.</div>
                                <div class='h-px border border-dashed'></div>
                                <div class='mt-10 '>Our reach is limited at the moment, but if future permits, we may expand to other social platforms. Take a look at what we have now!</div>
                                <A class='hover:underline text-pink-500' href='https://bsky.app/profile/fearfulcats.com'>Bluesky</A> - just a placeholder for now
                                <br/>
                                <A class='hover:underline text-pink-500' href='https://www.tumblr.com/blog/fearfulcats'>Tumblr</A> - game progress & more

                            </TabsContent>
                            <TabsContent value='future' class='[background:linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(244,176,32,1)_100%)] m-0 w-full p-10'>
                                <div class='text-3xl font-serif italic'>Living in the present, planning for the future.</div>
                                <div class='h-px border border-dashed'></div>
                                <div class='mt-10 '>The only current roadmap here is to finish fearfully comfortable. Only once that is complete will there be any more progress on future projects.</div>
                            </TabsContent>
                            <TabsContent value='secret'></TabsContent>
                        </Tabs>
                        <div hidden={!store.secretActivated} class='bg-black m-0 w-full h-[90vh] text-gray-200 font-mono'>
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



                    </div>

                </div>

            </div>
        </>

    )
}

function MainTabTrigger(props: { value: string, children: any, onClick?: () => any, class?: string, hidden?: boolean }) {
    return (
        <TabsTrigger aria-hidden={props.hidden} onClick={props.onClick} 
        class={` hover:cursor-pointer hover:underline data-[selected]:underline
        w-5/6 rounded-none bg-none border-none hover:[text-shadow:0px_0px_3px_cyan] data-[selected]:[text-shadow:0px_0px_4px_white] active:[text-shadow:0px_0px_3px_black] active:data-[selected]:[text-shadow:0px_0px_3px_black]
        transition-none border border-black aria-hidden:hidden
        text-[#356787]
          lg:text-3xl text-sm `+ props.class} 
          value={props.value}>{props.children}</TabsTrigger>
    )
}

// [box-shadow:inset_10px_10px_9px_-7px_white,_inset_-10px_-10px_9px_-7px_black,2px_2px_12px_-3px_black]

export default Main