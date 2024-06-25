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
import avery from "./assets/averyhires.png"
import rex from "./assets/rexhires.png"

const Game: Component = () => {
    return (
        <div class='gamePage'>
            <div class='gamePageHeader'>
                <A class='gameLink' href='/'>Take me back!!!</A>
            </div>
            <div class='gameDesc'>
            <span style={"font-weight: 800; border-bottom: 2px solid black;"}>Game Description</span>
            <br/>
            Kitari (the character you play as), has just moved out of his parents' house after an acquaintance of his offers him a place and a job in a very small community of 9 people. Kitari has no choice but to accept since his parents are forcing him to move out. His acquaintance, Seth, also happens to be the mayor of said community and has been experiencing a lot of "problems" with the inhabitants. He expects you to help them out to earn your place, but that's a decision that's completely up to you. Aside from that, Kitari himself has his own set of issues that need to be managed. With all of that on his plate, most would crumble... would you?
            </div>
            <div style={"text-align: center; font-size: 20px; font-weight: 800; border-bottom: 5px solid black; border-top: 5px solid black; background-color: gray; padding: 1vh 0;"}>
                <span style={"border-bottom: 2px solid black;"}>Character Compendium </span>
                <br/>
                <span>These are some of the characters that will appear in my game. They each have their own mental struggles which you will be able to help them deal with. <br/> NOTE: character designs are old and will be updated at a later date.</span>
            </div>
        
            <div style={"background-color: lime; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={kitari} />
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Kitari</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s our protagonist! He's known as Kitari. He moved to this village to get a fresh start from the life he lived before, but… such things are never easy. He constantly gets reminded of his unfortunate past but aspires to be able to move on.</h2>
                </div>
                <div ></div>
            </div>
            <div style={"background-color: #b5fffb; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={cc} />
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"} >CC</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>Those in the town call him CC, but no one except him knows his real name. Maybe you’ll get lucky and find out? He’s very shy and reserved, so I’m not sure if you’ll be able to befriend him or not… It’s worth a try though!</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #e61a1a; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={vance} />
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Vance</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>A bit of an odd case. His name is Vance. He’s very reclusive from most of the people in the town, but still hangs around on occasion. He seems to have connections with some of the important townsfolk. It may be fruitful to meet him…</h2>
                </div>
                <div></div>
            
            </div>
            <div style={"background-color: #ffdc68; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={seth} />
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Seth</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>His name is Seth, but most people just call him the mayor. He was kind enough to not only let you move here for cheap, but also provided you with a job. He seems to believe he can do whatever he wants, since he’s the mayor. Still, I wouldn’t do anything that might put you on his bad side.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #c3f49f; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={max}/>
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Max</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>The most well known of the town, named Max. He’s friends with pretty much everyone in the town, and he’s eager to meet you! Maybe a bit too eager? I’m sure you’ll get along though! Everyone seems to love him, so you might as well do the same.</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: green; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={lemmi}/>
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Lemmi</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s a bit of a bookworm, but still enjoys socializing with his friends. He doesn’t usually leave his house unless he has a good reason to. His name is Lemmi. I bet he’s smart… those glasses give off that impression, y’know?</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #f9c1ff; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={ray}/>
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Ray</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>The chillest cat. He’s called Ray, short for Rain. He spends a lot of time walking around the town, enjoying the tranquility of nature. Perhaps you could learn a bit from him?</h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #ff6060; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={avery}/>
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Avery</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s named Avery. He loves talking to people and meeting new friends, and I’m sure he’d love to meet you! He’s always thinking about the future and about how he can make people happy! </h2>
                </div>
                <div></div>
            </div>
            <div style={"background-color: #ff8700; padding: 5vh 0"} class='gameCharacter'>
                <img class='characterImg' src={rex}/>
                <div class="characterDesc" style={"color: white;"}>
                    <h1 style={"text-decoration: underline;"}>Rex</h1>
                    <br/>
                    <h2 style={"font-weight: 500"}>He’s a bit of a mess internally. He’s earned the nickname Rex, but that isn’t his real name. He doesn’t seem to mind it though… I’d say he’s sort of a nervous wreck, but I think you might’ve grasped that already. As far as I’m aware, he doesn’t have many friends… So maybe you should introduce yourself?</h2>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Game