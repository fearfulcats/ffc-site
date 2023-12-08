import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "./classes.css"
import kitari from "./assets/kitarihires.png"
import max from "./assets/max3hires.png"
import vance from "./assets/vance2hires.png"
import seth from "./assets/sethhires.png"
import cc from "./assets/cc3hires.png"
import lemmi from "./assets/lemmihires.png"
import ray from "./assets/rayhires.png"

const Game: Component = () => {
    return (
        <div class='gamePage'>
            <div class='gamePageHeader'>
                <A class='gameLink' href='/'>Take me back!!!</A>
            </div>
            <div class='gameDesc'>
            <span style={"font-weight: 800; border-bottom: 2px solid black;"}>Game Description</span>
            <br/>
            Throughout the small town of [NAME TBD], there lives many cats together in “harmony”. However, delve underneath the seemingly mentally stable surface that the cats present to you, and you’ll find each cat comes with their own fears and desires. Secrets gone untold are slowly bringing tension to the cats, with no outcome looking worse than if you don’t intervene. You assume the role of a new member of the town, moving in on this very day. Of course, no cat comes without their own set of problems, and you are no exception. You have the choice to help the cats with their problems, or keep to yourself, trying to figure things out on your own.  Don’t get distracted, though… things really aren’t as they seem…
            </div>
            <div style={"text-align: center; font-size: 20px; font-weight: 800; border-bottom: 5px solid black; border-top: 5px solid black; background-color: gray; padding: 1vh 0;"}>
                <span style={"border-bottom: 2px solid black;"}>Character Compendium </span>
                <br/>
                <span>These are some of the characters that will appear in my game. They each have their own mental struggles which you will be able to help them deal with. <br/> NOTE: character designs are not final.</span>
            </div>
        
            <div style={"background-color: lime; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={kitari} />
                <div class="characterDesc" style={"color: black;"}>
                    <h1 style={"text-decoration: underline;"}>Kitari</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s our protagonist! His name is Kitari. He struggles with overthinking, unhealthy obsessions with people, violent thoughts, and hallucinations. He moved to this village to get a fresh start from the life he lived before, but… such things are never easy. It will be up to you to choose whether or not he can make it through life without hurting anyone... or himself.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: blue; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={cc} />
                <div class="characterDesc">
                    <h1 style={"text-decoration: underline;"}>CC</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>Those in the town call him CC, but no one except him knows his real name. Maybe you’ll get lucky and find out? He’s very shy, so I’m not sure if Kitari will be able to befriend him or not… He struggles with severe social anxiety, panic attacks, paranoia, and depression.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: red; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={vance} />
                <div class="characterDesc">
                    <h1 style={"text-decoration: underline;"}>Vance</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>A bit of an odd case. He’s very reclusive from most of the people in the town, but still hangs around on occasion. His name is Vance. He struggles with avoidant tendencies, a fear of others depending on him, and a fear of being perceived. Despite all of that, he still has a deep desire to be able to form relationships.</h2>
                </div>
                <div></div>
            
            </div>
            <div style={"background-color: yellow; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={seth} />
                <div class="characterDesc" style={"color: black;"}>
                    <h1 style={"text-decoration: underline;"}>Seth</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>His name is Seth, but most people just call him the mayor. He was kind enough to not only let Kitari move in to his town for cheap, but also provided him with a job. He plays the nice guy, but struggles with feelings of narcissism, intense ambition, and a desire for power. He believes he can do whatever he wants, since he’s the mayor.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #c3f49f; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={max}/>
                <div class="characterDesc" style={"color: black;"}>
                    <h1 style={"text-decoration: underline;"}>Max</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>The most well known of the town, named Max. He’s friends with pretty much everyone in the town, and he’s eager to meet Kitari! Maybe a bit too eager? I’m sure they'll get along though! He struggles with an overwhelming desire to be accepted, loneliness, and feeling as though he has no meaningful relationships.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: green; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={lemmi}/>
                <div class="characterDesc" style={"color: black;"}>
                    <h1 style={"text-decoration: underline;"}>Lemmi</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s a bit of a bookworm, but still enjoys socializing with his friends. He doesn’t usually leave his house unless he has a good reason to. His name is Lemmi. He struggles with a negative body image, feeling like he needs to please everyone, and a desire to have someone to love.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #f9c1ff; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={ray}/>
                <div class="characterDesc" style={"color: black;"}>
                    <h1 style={"text-decoration: underline;"}>Ray</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>The chillest cat. He’s called Ray, short for Rain. As a kid he always thought Rain was too tranquil a name for him, and preferred Ray because it makes him feel as though he shines like the sun's rays. As he grew up, he started to feel like Rain fit him more, but by then everyone was too used to Ray to switch back. He struggles with an intense fear of what the future holds and how he’s perceived in the minds of others.</h2>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Game