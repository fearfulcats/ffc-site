

import kitaribase from "../../assets/ffc/kitaribase2.png"
import kitaritalk from "../../assets/ffc/kitaritalk.gif"
import averybase from "../../assets/ffc/averybase.png"
import averytalk from "../../assets/ffc/averytalk.gif"
import ccbase from "../../assets/ffc/ccbase.png"
import cctalk from "../../assets/ffc/cctalk.gif"
import lemmibase from "../../assets/ffc/lemmibase.png"
import lemmitalk from "../../assets/ffc/lemmitalk.gif"
import maxbase from "../../assets/ffc/maxbase.png"
import maxtalk from "../../assets/ffc/maxtalk.gif"
import oliverbase from "../../assets/ffc/oliverbase.png"
import olivertalk from "../../assets/ffc/olivertalk.gif"
import raybase from "../../assets/ffc/raybase.png"
import raytalk from "../../assets/ffc/raytalk.gif"
import rexbase from "../../assets/ffc/rexbase2.png"
import rextalk from "../../assets/ffc/rextalk.gif"
import sethbase from "../../assets/ffc/sethbase.png"
import sethtalk from "../../assets/ffc/sethtalk.gif"
import vancebase from "../../assets/ffc/vancebase.png"
import vancetalk from "../../assets/ffc/vancetalk.gif"
import { createSignal } from "solid-js"
import { A } from "@solidjs/router"
import { Link, MetaProvider, Title } from "@solidjs/meta"
import favicon from "../../assets/favicon2.png"



function Ffc() {
    return (
        <>
        <MetaProvider>
                    <Title>fearfully comfortable.</Title>
                    <Link rel="icon" href={favicon}/>
                </MetaProvider>
            <div class='grid justify-center [font-family:_"RussianGothic",_"MS_UI_Gothic",_"NEC_APC3",_Tahoma] leading-4 [image-rendering:pixelated]'>
                <div class="fixed text-pink-500 hover:underline w-full flex justify-center"><A href="/">Home</A></div>
                <div class="text-2xl mt-32 justify-center grid mb-10">
                    fearfully comfortable
                </div>
                <div class="text-2xl justify-center grid mb-10 font-bold underline">
                    About
                </div>
                <div class="border border-black mb-10 max-w-[870px] text-base leading-3.5 p-0.5">
                Kitari (the character you play as), has just moved out of his parents' house after an acquaintance of his offers him a place and a job in a very small community of 9 people. Kitari had no choice but to accept since his parents forced him to move out. His acquaintance, Seth, also happens to be the mayor of said community and has been experiencing a lot of "problems" with the inhabitants. He expects you to help them out to earn your place, but that's a decision that's completely up to you. Aside from that, Kitari himself has his own set of issues that need to be managed. With all of that on his plate, most would crumble... would you?
                <br/>
                In this game, you will get to live the life of Kitari, an anthro cat who has been having trouble getting over his past and living with his mental struggles. He's just moved into a new town, hoping to make a new life for himself here. However, he's instantly saddled with both the burden of a new job and expectations from the mayor to help out around the town. You will have the opportunity to direct Kitari's life, as you try to keep his overwhelming struggles in check, while balancing your job and making new friends. Of course, that's all optional. After all, life is what you make it. With over <span class='text-red-500'>20</span> endings, every little decision you make in this game will affect your outcome. Will you make it out safe and sound, or end up under the ground?<span class='text-xs'> sorry that sounded better in my head</span>
                <br/>
                This game will take place over the course of many in-game days. With each day, you(Kitari) will be able to do up to a certain amount of actions, which include talking to townsfolk which will progress your relationship with them, working at your job which will give you the money you need to buy food and pay for your house, focusing on your mental health, and more. Every action you do will have consequences, some being positive, and many others negative. And while you, the player, are an important piece to this game, there will likely be times when Kitari will remind you that his fears and desires come before yours. Even if those desires include killing a member of the town...

                </div>
                <div class="text-2xl justify-center grid mb-10 font-bold underline">
                    Characters
                </div>
                <div class="grid justify-center">
                    <CharCard class=" bg-[#00ff41] mb-0.5">
                        <Character name="Kitari" srcbase={kitaribase} srcgif={kitaritalk} text={"hi, i'm Kitari"}/>
                        Name: Kitari
                        <br/>
                        Age: 19
                        <br/>
                        Height: 5'1
                        <br/>
                        Hometown: Misty Hills
                    </CharCard>
                </div>
                <div class=" grid grid-cols-3 gap-0.5 mb-32">
                    <CharCard class=" bg-[#d3b52f]">
                        <Character name="Seth" srcbase={sethbase} srcgif={sethtalk} text={"My name's Seth! But you can call me The Mayor."}/>
                        Name: Seth
                        <br/>
                        Age: 20
                        <br/>
                        Height: 5'8
                        <br/>
                        Hometown: Gildred Community
                    </CharCard>
                    <CharCard class=" bg-[#5bcf79]">
                        <Character name="Max" srcbase={maxbase} srcgif={maxtalk} text={"Hi there, I'm Max!"}/>
                        Name: Max
                        <br/>
                        Age: 21
                        <br/>
                        Height: 5'7
                        <br/>
                        Hometown: Russetburg
                    </CharCard>
                    <CharCard class=" bg-[#00e0ff]">
                        <Character name="CC" srcbase={ccbase} srcgif={cctalk} text={"im CC..."}/>
                        Name: CC
                        <br/>
                        Age: 18
                        <br/>
                        Height: 6'1
                        <br/>
                        Hometown: Misty Hills
                    </CharCard>
                    <CharCard class=" bg-[#e852c5]">
                        <Character name="Ray" srcbase={raybase} srcgif={raytalk} text={"they call me Ray"}/>
                        Name: Ray
                        <br/>
                        Age: 21
                        <br/>
                        Height: 5'6
                        <br/>
                        Hometown: Russetburg
                    </CharCard>
                    <CharCard class=" bg-[#ff8700]">
                        <Character name="Avery" srcbase={averybase} srcgif={averytalk} text={"heya, my name's Avery!"}/>
                        Name: Avery
                        <br/>
                        Age: 19
                        <br/>
                        Height: 5'7
                        <br/>
                        Hometown: Omnihaven
                    </CharCard>
                    <CharCard class=" bg-[#ff6060]">
                        <Character name="Rex" srcbase={rexbase} srcgif={rextalk} text={"hey, i'm called Rex"}/>
                        Name: Rex
                        <br/>
                        Age: 19
                        <br/>
                        Height: 5'11
                        <br/>
                        Hometown: Omnihaven
                    </CharCard>
                    <CharCard class=" bg-[#acf6ad]">
                        <Character name="Lemmi" srcbase={lemmibase} srcgif={lemmitalk} text={"You can call me Lemmi!"}/>
                        Name: Lemmi
                        <br/>
                        Age: 19
                        <br/>
                        Height: 5'3
                        <br/>
                        Hometown: Gildred Community
                    </CharCard>
                    <CharCard class=" bg-[#d190ff]">
                        <Character name="Oliver" srcbase={oliverbase} srcgif={olivertalk} text={"Oliver here..!"}/>
                        Name: Oliver
                        <br/>
                        Age: 20
                        <br/>
                        Height: 5'10
                        <br/>
                        Hometown: Gildred Community
                    </CharCard>
                    <CharCard class=" bg-[#b81820]">
                        <Character name="Vance" srcbase={vancebase} srcgif={vancetalk} text={"the name's Vance."}/>
                        Name: Vance
                        <br/>
                        Age: 20
                        <br/>
                        Height: 5'9
                        <br/>
                        Hometown: Gildred Community
                    </CharCard>
                </div>
            </div>
        </>
    )
}
function CharCard(props:{children:any, class: string}) {
    return(
        <div class={`w-[290px] border border-black flex` + props.class}>
            {props.children}
        </div>
    )
}

function Character(props: { name: string, srcbase: string, srcgif: string, text: any }) {

    const [typewriterIndex, setTypewriterIndex] = createSignal(0)
    function typeWriter(speed: number) {
        if (typewriterIndex() != props.text.length) {
            document.getElementById(props.name)!.innerHTML += props.text.charAt(typewriterIndex());
            setTypewriterIndex(typewriterIndex() + 1)
            setTimeout(() => typeWriter(speed), speed);
        }
    }
    return (
        <div>
            <div class="relative group w-fit">
                <div id={props.name} class="absolute group-hover:block z-10 -right-10 -top-6 hidden border border-black bg-white text-nowrap">
                    {/* {props.children} */}
                </div>
                <img class="" onMouseOver={(e) => {
                    e.currentTarget.src = props.srcgif
                    setTypewriterIndex(0)
                    document.getElementById(props.name)!.innerHTML = ""
                    typeWriter(125)
                }} onMouseLeave={(e) => {
                    e.currentTarget.src = props.srcbase
                }} src={props.srcbase} />
            </div>
        </div>
    )
}

export default Ffc
