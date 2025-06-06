import { A } from "@solidjs/router"
import { createEffect, createMemo, createSignal, For, Match, Show, Switch } from "solid-js"
import { createMutable } from "solid-js/store"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"


import { Link, MetaProvider, Style, Title, useHead } from "@solidjs/meta"
import placeholderBadge from "../../assets/furfulcat/placeholderbadge.png"
import furfulBadge from "../../assets/furfulcat/furfulbadge.gif"
import houseBadge from "../../assets/furfulcat/housebadge.gif"

import houseFavicon from "../../assets/furfulcat/faviconhouse.gif"
import dustyFavicon from "../../assets/furfulcat/favicondust.png"
import flakyFavicon from "../../assets/furfulcat/faviconflake.png"
import TimeAgo from "javascript-time-ago"
import en from 'javascript-time-ago/locale/en'

import img_1 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0582.JPG"
import img_2 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0586.JPG"
import img_3 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0826.JPG"
import img_4 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0830.JPG"
import img_5 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0859.JPG"
import img_6 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_2351.JPG"
import img_7 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_3009.JPG"
import img_8 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_3016.JPG"
import img_9 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_3027.JPG"
import img_10 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_3032.JPG"
// import img_11 from "../../assets/furfulcat/gallery/cats/frostbite/IMG_0582.JPG"
import img_12 from "../../assets/furfulcat/gallery/cats/glacier/IMG_0856.JPG"
import img_13 from "../../assets/furfulcat/gallery/cats/glacier/IMG_3081.JPG"
import img_14 from "../../assets/furfulcat/gallery/cats/papyrus/IMG_2337.JPG"
import img_15 from "../../assets/furfulcat/gallery/cats/papyrus/IMG_2343.JPG"
import img_16 from "../../assets/furfulcat/gallery/cats/papyrus/IMG_2346.JPG"
import img_17 from "../../assets/furfulcat/gallery/cats/papyrus/IMG_3076.JPG"
import img_18 from "../../assets/furfulcat/gallery/space/eclipse/IMG_1762.JPG"
import img_19 from "../../assets/furfulcat/gallery/space/eclipse/IMG_1763.JPG"
import img_20 from "../../assets/furfulcat/gallery/space/eclipse/IMG_1764.JPG"
import img_21 from "../../assets/furfulcat/gallery/space/eclipse/IMG_1765.JPG"
import img_22 from "../../assets/furfulcat/gallery/space/galaxy/IMG_3193.JPG"
import img_23 from "../../assets/furfulcat/gallery/space/galaxy/IMG_3197.JPG"
import img_24 from "../../assets/furfulcat/gallery/space/galaxy/IMG_3220.JPG"
import img_25 from "../../assets/furfulcat/gallery/space/moon/IMG_1841.JPG"
import img_26 from "../../assets/furfulcat/gallery/space/moon/IMG_1921.JPG"
import img_27 from "../../assets/furfulcat/gallery/space/moon/IMG_2393.JPG"
import img_28 from "../../assets/furfulcat/gallery/space/moon/IMG_3093.JPG"
import img_29 from "../../assets/furfulcat/gallery/space/planets/IMG_3637.JPG"
import img_30 from "../../assets/furfulcat/gallery/space/planets/jupiter2.jpg"
import img_31 from "../../assets/furfulcat/gallery/space/planets/mars2.png"
import img_32 from "../../assets/furfulcat/gallery/space/planets/saturn2.png"
import img_33 from "../../assets/furfulcat/gallery/landscapes/home/IMG_0667.JPG"
import img_34 from "../../assets/furfulcat/gallery/landscapes/home/IMG_0906.JPG"
import img_35 from "../../assets/furfulcat/gallery/landscapes/home/IMG_1819.JPG"
import img_36 from "../../assets/furfulcat/gallery/landscapes/home/IMG_1821.JPG"
import img_37 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3169.JPG"
import img_38 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3225.JPG"
import img_39 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3256.JPG"
import img_40 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3286.JPG"
import img_41 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3422.JPG"
import img_42 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3439.JPG"
import img_43 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3562.JPG"
import img_44 from "../../assets/furfulcat/gallery/landscapes/camping/IMG_3581.JPG"
import img_45 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2463.JPG"
import img_46 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2478.JPG"
import img_47 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2480.JPG"
import img_48 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2562.JPG"
import img_49 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2571.JPG"
import img_50 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2572.JPG"
import img_51 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2619.JPG"
import img_52 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2669.JPG"
import img_53 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2689.JPG"
import img_54 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2744.JPG"
import img_55 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2749.JPG"
import img_56 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2777.JPG"
import img_57 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2825.JPG"
import img_58 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2835.JPG"
import img_59 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2849.JPG"
import img_60 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2859.JPG"
import img_61 from "../../assets/furfulcat/gallery/landscapes/florida/IMG_2920.JPG"
import img_62 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3733.JPG"
import img_63 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3743.JPG"
import img_64 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3756.JPG"
import img_65 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3764.JPG"
import img_66 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3778.JPG"
import img_67 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3802.JPG"
import img_68 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3806.JPG"
import img_69 from "../../assets/furfulcat/gallery/space/eclipse/IMG_3817.JPG"

import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"


type Blog = { text: string, date: string }
type Theme = { textColor: string, borderColor: string, backgroundColor: string, name: string, foregroundColor: string }
type Badge = { name: string, link: string, img: string }
type CharacterMode = "furfulcat" | "Dusty" | "Flaky"
type Pic = { src: string, comments: string, date: Date }
type Pics = Record<SubCategory, Pic[]>
type Gallery = Record<Category, Pics>
type Category = "landscapes" | "space" | "cats"
type SubCategory = "florida" | "camping" | "moon" | "planets" | "galaxies" | "glacier" | "frostbite" | "papyrus" | "eclipse" | "home"

type BlueskyPost = { content: string, date: Date, avatar: string, url: string }
type MusicTrack = { name: string, artist: string, img: string, dateListened: Date, album: string, nowPlaying: boolean }


function Bio() {
    TimeAgo.addLocale(en)
    const store = createMutable({
        blogs: [
            { date: "2025/03/14", text: "There was a lunar eclipse today! I added some of the photos I took of it to the gallery, feel free to check them out!" },
            { date: "2025/03/10", text: "Continously awaiting my future prospects can get tiring... Hopefully they'll arrive soon enough." },
            { date: "2025/03/07", text: "Sure has been a bit now hasn't it? I'm happy to say that my WEBFISHING server is running well now, it does go down every now and then but players still join it so it's really not all that bad. Could be worse am I right? Anyways, I don't think I'll post these blogs as often as I did when I was just making my site, but I'll still write them every now and then of course. Whenever I get the motivation to add something here probably!" },
            { date: "2025/03/02", text: "Nothing much to mention today, just had to make a few changes to the site. I'm not doing well mentally unfortunately but I'm gonna try to push through it like I always do." },
            { date: "2025/03/01", text: "Well, I guess I was right. I think my ISP is throttling me because of the WEBFISHING server now. My internet has gone down about 4 times in the past 12 hours which is most definitely atypical. I have the server on auto restart, but who's gonna want to join a server that kicks everyone off every so often? Unfortunately, this is one problem I don't think I'll be able to solve. Still, the server is barely using much of my network at all, so it's really annoying that something like this could trigger a throttling. I'll just wait and see how things play out. I put too much work into this for it to just fail right away. Story of my life." },
            { date: "2025/02/28", text: "Last day of Feburary! I'm silently counting down the days until the Nintendo Switch 2 Direct comes out, and now it's just about a month away! Anyways, I managed to get my WEBFISHING server up and running following a few slight hiccups. So far it has been running for a steady 24 hours, and I'm hoping it'll stay that way. Knowing my luck something'll come up, but I'll try to stay optimistic for now. Also, I spent a while working on those new pop-ups in the bottom left corner of the screen to show my latest post on bluesky and last played song on spotify! Took me longer than intended, but hey it works so I call that a win." },
            { date: "2025/02/26", text: "Made a few changes & additions today, but nothing all that noteworthy. The monitor finally arrived today! I'll be setting up the WEBFISHING server shortly after this update goes live. Hopefully it fulfills its intended purpose!" },
            { date: "2025/02/25", text: "Added a bunch of new stuff to the site today! Also gonna connect my nekoweb site up to this site shortly after pushing this update, anyways my monitor did NOT arrive today (wtf), so I'll have to postpone the server till it actually decides to arrive. But on a more positive note I've been getting more ideas for my site lately! I've added that in a new 'Upcoming' section, check it out if you haven't! The biggest addition in my opinion however is the Guestbook, and if you're reading this feel free to comment and add your website so I can check out yours! I need more site badges to add to the top marquee (for aesthetic purposes mostly), and I'd happily add anyone who leaves their site in the guestbook." },
            { date: "2025/02/24", text: "As promised, I continued working on my site today. I added and altered a bunch of stuff, as you can see for yourself in the new updates section below the main box! I'm sure I could stand to add/change some more stuff, but I'm drawing blanks as of now. I'll just update this site whenever inspiration hits. On an unrelated note, I'm currently waiting for a 'new' monitor to arrive so I can set up my old PC as a dedicated WEBFISHING server. It should arrive tomorrow if all goes well, and if so I'll immediately set that up. It should be a preferable alternative to hosting lobbies on my own computer and having to kick everyone off when I have to leave." },
            { date: "2025/02/23", text: "Today I started on the 4th revamp of my website! Spent most of the day doing that, it's a whole lot of work to be honest. This is definitely the most elaborate version so far. I'm hoping to finish most of the design stuff tomorrow when I'm less sleepy!" },
        ] as Blog[],
        badges: [
            { name: "nekoweb", img: "https://nekoweb.org/assets/buttons/button6.gif", link: "https://nekoweb.org/" },
            { name: "furfulcat's house", img: furfulBadge, link: "./home" },
            { name: "furfulcat's house", img: houseBadge, link: "./home" },
            { name: "dimden", img: "https://dimden.dev/services/images/88x31.gif", link: "https://dimden.dev/" },
            { name: "ReloopGD Webpaeg!!1!11", img: "https://reloopgd.nekoweb.org/Images/Web-Button.gif", link: "https://reloopgd.nekoweb.org/" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
            { name: "placeholder", img: placeholderBadge, link: "./home" },
        ] as Badge[],
        storyMode: false,
        selectedStory: "",
        characterMode: "furfulcat" as CharacterMode,
        currentTime: new Date(),
        themes: [
            { name: "Dark", borderColor: "white", textColor: "white", backgroundColor: "#0f0f0f", foregroundColor: "black" },
            { name: "Light", borderColor: "black", textColor: "black", backgroundColor: "#e6e6e6", foregroundColor: "white" },
            { name: "Dusty", borderColor: "#299920", textColor: "#f4f4f4", backgroundColor: "#8a8a8a", foregroundColor: "#a7a7a7" },
            { name: "Flaky", borderColor: "#28fd17", textColor: "#4d4d4d", backgroundColor: "#b5b5b5", foregroundColor: "#d4d4d4" },
            { name: "Beehive", borderColor: "#ffe305", textColor: "#fff1bb", backgroundColor: "#0f0f01", foregroundColor: "#201a03" },
            { name: "CLI", borderColor: "#08ff00", textColor: "#33ff00", backgroundColor: "#021a00", foregroundColor: "#000" },
            { name: "Waterfall", borderColor: "#6ef0ff", textColor: "#00f3ff", backgroundColor: "#171443", foregroundColor: "#1c235c" },
            { name: "Crimson", borderColor: "red", textColor: "#ff7b7b", backgroundColor: "#480606", foregroundColor: "#220808" },
            { name: "Silly", borderColor: "#4079ff", textColor: "#83ffe8", backgroundColor: "#e341ab", foregroundColor: "#92089d" },
            { name: "Icicle", borderColor: "#adf6ff", textColor: "#f0feff", backgroundColor: "#9da1c6", foregroundColor: "#5c899f" },
            { name: "Galactic", borderColor: "#ad1bff", textColor: "white", backgroundColor: "#0e0324", foregroundColor: "#23104a" },

        ] as Theme[],
        gallery:
            {
                "cats": {
                    "frostbite": [
                        { comments: "playful pose", date: new Date(2024,10,7), src: img_10 },
                        { comments: "ready to get the camera out of her face", date: new Date(2024,10,7), src: img_9 },
                        { comments: "looking at something i presume", date: new Date(2024,10,7), src: img_8 },
                        { comments: "always something has her attention", date: new Date(2024,10,7), src: img_7 },
                        { comments: "wishing for a breath of fresh air", date: new Date(2024,9,16), src: img_6 },
                        { comments: "curled and cozy", date: new Date(2022,5,27), src: img_5 },
                        { comments: "not letting me out of her sight", date: new Date(2022,5,27), src: img_4 },
                        { comments: "a yawn, definitely a yawn", date: new Date(2022,5,26), src: img_3 },
                        { comments: "even her shadow looks cute", date: new Date(2022,4,23), src: img_2 },
                        { comments: "sharpening her claws on my suitcase", date: new Date(2022,4,23), src: img_1 },
                    ],
                    "glacier": [
                        { comments: "perched upon an outlook", date: new Date(2024,10,9), src: img_13 },
                        { comments: "unamused", date: new Date(2022,5,27), src: img_12 },
                    ],
                    "papyrus": [
                        { comments: "looking for his next target of mischief", date: new Date(2024,10,9), src: img_17 },
                        { comments: "wondering why i wont let him out there", date: new Date(2024,10,9), src: img_16 },
                        { comments: "the camera is not of importance to him", date: new Date(2024,9,16), src: img_15 },
                        { comments: "a work of art in adoration", date: new Date(2024,9,16), src: img_14 },
                    ]
                },
                "space": {
                    "eclipse": [
                        { comments: "bitten cookie", date: new Date(2025,2,14), src: img_69 },
                        { comments: "nearly ordinary", date: new Date(2025,2,14), src: img_68 },
                        { comments: "halfway", date: new Date(2025,2,14), src: img_67 },
                        { comments: "back soon", date: new Date(2025,2,14), src: img_66 },
                        { comments: "just a slice", date: new Date(2025,2,14), src: img_65 },
                        { comments: "glimmer of hope", date: new Date(2025,2,14), src: img_64 },
                        { comments: "once again", date: new Date(2025,2,14), src: img_63 },
                        { comments: "blood moon rises", date: new Date(2025,2,14), src: img_62 },

                        { comments: "exposure low", date: new Date(2024,3,8), src: img_21 },
                        { comments: "exposure medium", date: new Date(2024,3,8), src: img_20 },
                        { comments: "exposure high", date: new Date(2024,3,8), src: img_19 },
                        { comments: "exposure at its highest", date: new Date(2024,3,8), src: img_18 },

                    ],
                    "galaxies": [
                        { comments: "the night sky in its near entirety", date: new Date(2024,10,29), src: img_24 },
                        { comments: "andromeda without stabilization", date: new Date(2024,10,28), src: img_23 },
                        { comments: "a streaking band across the sky", date: new Date(2024,10,28), src: img_22 },

                    ],
                    "moon": [
                        { comments: "the globe that follows us", date: new Date(2024,10,10), src: img_28 },
                        { comments: "in all its glory", date: new Date(2024,9,17), src: img_27 },
                        { comments: "i think i saw someone up there", date: new Date(2024,9,11), src: img_26 },
                        { comments: "half a moon", date: new Date(2024,9,10), src: img_25 },

                    ],
                    "planets": [
                        { comments: "i wonder which is bigger", date: new Date(2025,0,13), src: img_29 },
                        { comments: "the ringed planet", date: new Date(2024,9,27), src: img_32 },
                        { comments: "the rusted planet", date: new Date(2024,9,14), src: img_31 },
                        { comments: "the striped planet", date: new Date(2024,9,12), src: img_30 },

                    ]
                },
                "landscapes":
                {
                    "home": [
                        { comments: "division", date: new Date(2024,8,12), src: img_36 },
                        { comments: "for me?", date: new Date(2024,8,12), src: img_35 },
                        { comments: "americas chaos day", date: new Date(2022,6,4), src: img_34 },
                        { comments: "thats not a tornado but i have no idea what it is", date: new Date(2022,4,29), src: img_33 },
                    ],
                    "camping": [
                        { comments: "rural", date: new Date(2024,10,30), src: img_44 },
                        { comments: "bathed in light", date: new Date(2024,10,30), src: img_43 },
                        { comments: "fields and hills", date: new Date(2024,10,30), src: img_42 },
                        { comments: "a modern masterpiece", date: new Date(2024,10,30), src: img_41 },
                        { comments: "globular", date: new Date(2024,10,29), src: img_40 },
                        { comments: "nuclear plants give off WATER VAPOR", date: new Date(2024,10,29), src: img_39 },
                        { comments: "light pollution: a visual", date: new Date(2024,10,29), src: img_38 },
                        { comments: "a gloomy autumn path", date: new Date(2024,10,28), src: img_37 },

                    ],
                    "florida": [
                        { comments: "ominous clouds", date: new Date(2024,9,30), src: img_61 },
                        { comments: "this doesnt even seem real", date: new Date(2024,9,30), src: img_60 },
                        { comments: "fading sunset", date: new Date(2024,9,30), src: img_59 },
                        { comments: "symmetry! at night", date: new Date(2024,9,30), src: img_58 },
                        { comments: "holier than thou", date: new Date(2024,9,30), src: img_57 },
                        { comments: "my day was not brightened", date: new Date(2024,9,30), src: img_56 },
                        { comments: "sunlight meeting the gulf", date: new Date(2024,9,30), src: img_55 },
                        { comments: "dive in", date: new Date(2024,9,30), src: img_54 },
                        { comments: "the endless waterbound highway", date: new Date(2024,9,30), src: img_53 },
                        { comments: "friends or dating", date: new Date(2024,9,30), src: img_52 },
                        { comments: "symmetry! at day", date: new Date(2024,9,30), src: img_51 },
                        { comments: "a bridge over troubled water", date: new Date(2024,9,30), src: img_50 },
                        { comments: "imagine if the bridge collapsed right now", date: new Date(2024,9,30), src: img_49 },
                        { comments: "flying turtles they said", date: new Date(2024,9,30), src: img_48 },
                        { comments: "bleeding sky", date: new Date(2024,9,28), src: img_47 },
                        { comments: "a red flag", date: new Date(2024,9,28), src: img_46 },
                        { comments: "the evening star", date: new Date(2024,9,28), src: img_45 },
                    ],
                }
            } as Gallery,
        selectedGalleryCat: "",
        selectedGallerySubCat: "",
        fonts: ['MS UI Gothic', "Times New Roman", "Comic Sans MS", "Verdana", "Arial", "Calibri", "Consolas", "Courier New", "Lucida Sans Unicode", "Segoe UI"] as string[],
        selectedTheme: 0,
        selectedFont: 0,
        latestPost: { content: "", date: new Date(), url: "", avatar: "" } as BlueskyPost,
        lastPlayed: { artist: "", dateListened: new Date(), img: "", name: "", album: "", nowPlaying: false } as MusicTrack,
        panelViews: {
            bluesky: true,
            music: true
        },
        timeAgo: new TimeAgo("en")
    })

    createEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme")
        if (selectedTheme) {
            store.selectedTheme = JSON.parse(selectedTheme)

        }
        const selectedFont = localStorage.getItem("selectedFont")
        if (selectedFont) {
            store.selectedFont = JSON.parse(selectedFont)
        }
    })
    createEffect(() => {
        if (store.selectedTheme == 2) store.characterMode = "Dusty"
        else if (store.selectedTheme == 3) store.characterMode = "Flaky"
        else store.characterMode = "furfulcat"
    })



    function StorySelect(props: { name: string, children: any }) {
        return (
            <span class="hover:underline text-blue-700 cursor-pointer" onClick={() => {
                store.selectedStory = props.name
                store.storyMode = true
            }}>{props.children}</span>
        )
    }


    function Story(props: { children: any }) {
        return (
            <>
            <div class="h-[90vh] overflow-auto p-2">{props.children}</div>
            </>
        )
    }

    function Gallery(props: {}) {
        return (
            <div class=" mt-1">
                <For
                    each={Object.entries(store.gallery)}
                    children={([cat, pics]) => (
                        <>
                            <div aria-selected={store.selectedGalleryCat == cat} class=" text-blue-500 hover:underline hover:cursor-pointer" onClick={() => {
                                if (store.selectedGalleryCat == cat) store.selectedGalleryCat = ""
                                else store.selectedGalleryCat = cat
                            }}>{cat} {store.selectedGalleryCat != cat ? ">" : "v"}</div>
                            <Show when={cat == store.selectedGalleryCat}>
                                <For
                                    each={Object.entries(pics)}
                                    children={([subCat, pic]) => (
                                        <>
                                            <div aria-selected={store.selectedGallerySubCat == subCat} class="ml-5  text-blue-700 hover:underline hover:cursor-pointer" onClick={() => {
                                                if (store.selectedGallerySubCat == subCat) store.selectedGallerySubCat = ""
                                                else store.selectedGallerySubCat = subCat
                                            }}>{subCat} {store.selectedGallerySubCat != subCat ? ">" : "v"}</div>
                                            <Show when={subCat == store.selectedGallerySubCat}>
                                                <div class="grid grid-cols-2 mt-2 gap-2 overflow-auto max-h-[70vh]">
                                                    <For
                                                        each={pic}
                                                        children={(img) => {
                                                            const [showFullImg, setShowFullImg] = createSignal(false)
                                                            
                                                            return(
                                                            <div class="border p-2 border-[var(--border-color)] bg-[var(--bg-color)]">
                                                                <Dialog open={showFullImg()} onOpenChange={setShowFullImg}>
                                                                    <DialogTrigger>
                                                                        <img class=" hover:cursor-zoom-in" src={img.src} />
                                                                    </DialogTrigger>
                                                                    <DialogContent class=" bg-[var(--fg-color)]/50 h-screen w-screen border-none justify-center items-center">
                                                                        <div class="h-[90vh] w-[90vw] flex justify-center items-center" >
                                                                            <img onClick={()=>setShowFullImg(false)} class="max-h-full max-w-full hover:cursor-zoom-out" src={img.src} />

                                                                        </div>
                                                                    </DialogContent>
                                                                </Dialog>
                                                                <div> <span class="[color:lime]">{img.date.toLocaleDateString()}</span></div>
                                                                <div>  {img.comments} </div>
                                                            </div>
                                                        )}}
                                                    />
                                                </div>
                                            </Show>
                                        </>
                                    )}
                                />
                            </Show>
                        </>
                    )}
                />
            </div>
        )
    }

    function BioTab(props: { value: string, children: any, class?: string }) {
        return (
            <TabsTrigger onClick={() => store.storyMode = false} class={`transition-none border p-0 border-none bg-none text-[var(--text-color)]
            data-[selected]:underline hover:cursor-pointer hover:underline data-[selected]:hover:cursor-default hover:[letter-spacing:1px] data-[selected]:[letter-spacing:1px]
            ${props.class}`}
                value={props.value}>{props.children}</TabsTrigger>
        )
    }

    createEffect(async () => {
        // const res = await fetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?${new URLSearchParams({actor: "furfulcat.bsky.social"})}`)
        const params = { actor: "furfulcat.bsky.social", limit: `${1}` }
        const res = await fetch(`https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?${new URLSearchParams(params)}`)
        if (!res) return
        const obj = await res.json()
        if (!obj) return
        const postObj = {
            content: obj.feed[0].post.record.text,
            date: new Date(obj.feed[0].post.record.createdAt),
            avatar: obj.feed[0].post.author.avatar,
            url: `https://bsky.app/profile/furfulcat.bsky.social/post${(obj.feed[0].post.uri as string).slice((obj.feed[0].post.uri as string).lastIndexOf("/"), (obj.feed[0].post.uri as string).length)}`
        } as BlueskyPost
        store.latestPost = postObj
    })

    function convertUTCDateToLocalDate(date: Date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

    createEffect(async () => {
        const api_key = "e207ac7778c8a82817e429d66b5b8f19"
        const user = "furfulcat"

        const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${api_key}&format=json&limit=1`)
        if (!res) return
        const obj = await res.json()
        if (!obj) return

        const trackObj = {
            name: obj.recenttracks.track[0].name,
            artist: obj.recenttracks.track[0].artist["#text"],
            album: obj.recenttracks.track[0].album["#text"],
            img: obj.recenttracks.track[0].image[3]["#text"],
        } as MusicTrack

        if (obj.recenttracks.track[0]["@attr"]) {
            trackObj.nowPlaying = true
            trackObj.dateListened = new Date()
        }
        else {
            trackObj.nowPlaying = false
            trackObj.dateListened = convertUTCDateToLocalDate(new Date(obj.recenttracks.track[0].date["#text"]))
        }
        console.log(trackObj)
        store.lastPlayed = trackObj
    })


    function Stories() {
        return (
            <div class="p-2">
                <div onClick={()=>{
                    store.selectedStory = ""
                    store.storyMode = false
                    }} class="text-lg border-b border-dashed border-[var(--border-color)] mb-2 hover:underline text-blue-700 cursor-pointer">Back</div>
                <Switch  >
                    <Match when={store.selectedStory == "timecat"}>
                        <Story>
                            Time. It's something everyone wants, but that no one can get enough of. Every organism in this reality is subject to the laws of nature, the most constraining of which being time. Many of us attempt to deny our own fate, grasping for any extra grain of sand to add to the hourglass. Alas, it seems that such attempts always end in futility. At times, I imagine a world without said constraint on human lives. Would humanity flourish with endless time to carry out their desires? Or would they bring destruction to the very planet that gives them life before breaking free from the chains that hold them there? Whatever the case, we shall never know.
                            <br />
                            <br />
                            Humans are truly a fascinating subject of study. I've devoted my life to understanding their species, but they always seem to surprise me. And believe me when I say, I've been doing these studies for an extensively long time. A length of time you'd probably think to be impossible. In fact, I couldn't put it into words. You see, I've bypassed the conventional laws of reality in such a way that my time alive cannot be quantified. Simply put, it's because unlike every other creature in this universe, the constraint of time doesn't affect me. Or to be more precise, it has no effect on me, and I can control its effect on every particle that's ever been conceived.
                            <br />
                            <br />
                            It sounds fictional, I know. But, the plain and simple truth is that I can control time. And it's really not as glamorous as it sounds. You have the ability to explore as many possibilities in life as you want, and to an adventurous soul that might sound like a dream come true, but I am far from that. Maybe in my younger days, far before I came into contact with this affliction, in the blissful ignorance of youth I would have enjoyed this kind of ability. For a time, at least.
                            <br />
                            <br />
                            Of course, I didn't really have the ideal childhood that my species typically would have, but I still shared the curiosity and playfulness of my kind's youth. Being a lab pet didn't absolve me of those characteristics like you'd expect. And that combination should have most definitely killed me. But now, here I am, eternally forever. Sometimes I wish it never happened, that instead of being a dumb little curious creature intent on causing as much trouble as possible, I had just opted to be lazy that day. Who knows what would have happened. But even with all my control over time, I can't do anything about myself. I'm forever frozen in my current age. I could alter my appearance, but that wouldn't help me forget all the knowledge I've accumulated throughout various lifetimes.
                            <br />
                            <br />
                            So yeah, life everlasting isn't exactly all that. And the fact that I have to live it alone doesn't help. You'd think I'd be able to make anyone else live forever through my time manipulation, but it doesn't exactly work like that. Let me explain. I can slow down the effect of time on people. Sounds great, right? Except for the fact that I can only control time completely, not specifically. So, while they would age slower, they would also process information slower, heal slower, speak slower, every single thing that their cells do would happen at the slower rate that I chose. I can't give people the aging freeze that I have, as much as I wish that I could. The best I can do is pause someone and bring them to the past or future.
                            <br />
                            <br />
                            This whole time control thing was an unintended side effect of what the scientists in the lab I lived in were working on. They were messing with powers they didn't fully understand, but they understood that they were on the verge of learning how to slow and eventually stop the process of aging entirely. But when you mess with reality bending tools, unintended things tend to happen. And yeah it was mostly my fault but let's be serious here, who decides to keep a pet in a high tech, space-faring laboratory? At the time I was just a regular earth animal that got abducted because some alien beings couldn't live without companionship. I don't understand how they couldn't foresee the possibility that I'd cause trouble, especially being an animal well-known for such.
                            <br />
                            <br />
                            So now here I am, alone in the cosmos, with the universe at my whims, but no desire to interfere. I've spent my time until now learning about a vast array of helpful knowledge. I started with studying the deep hidden secrets of magic, mostly to be able to conjure different bodies for myself, but from there I learned of various further applications. Now I understand the practicality of a human body, with it typically being the one I prefer for working with delicate materials, like in technological applications. Also for communicating with others on Earth, since most find it strange when an animal is talking. Still, I can't help but find myself constantly coming back to my original body.
                            <br />
                            <br />
                            I realize now that I have not once actually mentioned what creature I am. I guess it slipped my mind. I tend to assume people can guess from my demeanor, but seeing as this is a written memoir, it'd probably be a little more difficult than usual. In human terms, I am of the species that is known as the domestic cat. I assume that comes as no surprise. What may surprise you, however, is that cats are actually one of the most popular pets across the universe. Even though they originated on Earth, they've been abducted and bred, and promptly distributed across galaxies since. They are considered the universe's cutest animal. I understand completely, and I agree with the collective here. I am proud to call myself an Earth cat as well.
                            <br />
                            <br />
                            I guess my abductors thought it'd be more authentic to get an Earth cat. Some space cats actually have some really cool evolutionary traits though. I may be getting a bit off topic here...
                            <br />
                            <br />
                            TO BE CONTINUED
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "dlq_charade"}>
                        <Story>
                            Memory is really quite an interesting thing, wouldn't you say? At times, the most mundane scenes will be the ones to imprint into your mind, while important life events slip away from your memory. Why is that? It's a question I've always thought to be pretty intriguing. Although, that may be because I am in such a unique situation.
                            <br />
                            <br />
                            You would probably find it hard to understand. I am who I am though, and there is unfortunately no changing that. Sometimes, I'm a monster, and other times, I'm a saint. Depending on which I undertake, my memories are unlocked and locked accordingly. At the moment, I have no desire to hurt anyone. But, who's to tell how long that moment will last?
                            <br />
                            <br />
                            You seem perplexed. I'm sorry, it was confusing, wasn't it? Let me help you understand, then.
                            <br />
                            <br />
                            Sometimes, I'm a saint.
                            <br />
                            <br />
                            And other times, I'm a monster.
                            <br />
                            <br />
                            ...
                            <br />
                            <br />
                            This is such a drag. Why do people have to exist? They all die so easily. What purpose will they serve in death? It's almost as if they exist solely for me to kill them. The light in the eyes of today's target faded quicker than most. I guess he probably had less will to live inside of him. Well, whatever. The simple fact of the matter is that they all must die. The burning desire inside of me combined with my memories of the past leave me with no choice. Although, it's not that I don't enjoy it, I just don't like how I end up so exhausted after the switch back. Plus, who'd be able to enjoy it while knowing they're going to return to a powerless form in a few moments? It really takes away from being able to savor the kill.
                            <br />
                            <br />
                            What a mess. I was just with that person, and now... he's gone. I'm sorry. I truly wish for forgiveness, but I don't deserve it. I need to die, or be isolated, permanently, but he won't let either of those things happen. I have so little control...
                            <br />
                            <br />
                            There's really no reason for so many people to die. But, somehow, I ended up becoming an assassin... I knew I had to kill that guy, but I didn't want to, and I couldn't find a reason to, other than that it was my task. That monster though, he needs no reason. In fact, he doesn't want one. Just getting to kill makes him feel fulfilled, no matter who it is. So many have died by his hands, the hands I share. Does that make it my fault too?
                            <br />
                            <br />
                            It's my job to kill, and I go through with all that I'm tasked. Just because I make him do the actual killing doesn't mean I share no blame. I took this job because I knew he would kill whether it was his job or not, but participating in this sort of career in any way incriminates you, both legally and morally. All I can do is hold him back until the time comes, but I barely even manage that.
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "dlq_riot"}>
                        <Story>
                            The crazy guy with the shotgun? Yeah, I saw him. I wish I hadn't. Seriously dude; if looks could kill, not a single person in the world would be left alive. His whole body just gave off this aura that screamed danger, and seeing his face only multiplied that feeling. Remembering it sends a shiver down my spine...
                            <br />
                            <br />
                            Me and a couple of my buddies were sent to check out some disturbance this rando was causing on the edge of our turf, and there he was. No one with me knew him, but afterwards I learned he had been pretty notorious in his hometown for spewing nonsense and causing a ruckus. And yeah, he lived up to that reputation pretty well.
                            <br />
                            <br />
                            When we arrived, he was standing on top of a derelict pumpjack, shouting about how his last gang kicked him out because he was crazy. I can't say I was surprised to hear that. He wasn't spouting complete lunacy, but it was the sort of thing that no sane person would have let get past being simply a train of thought.
                            <br />
                            <br />
                            If I recall correctly, this is what he had said: "Oh god, why have I been forsaken so? If there is any God in this cruel world, how dare he abandon me at my lowest?! How very sad... Such a tragedy has never been told, such a lamentation has never been written! My life is its own cinematic failure... A box office joke. They'd laugh me out of the circus if I applied... Who other than I could get kicked out of a gang for being a lunatic? I was under the impression that those idiotic enough to join a gang were already crazy. What a fool I was, a complete nimrod! Wait, why is nimrod a term for a fool anyway? Wasn't he pretty smart? His only mistake was challenging God, but... Challenging the limits of human knowledge is how our species have made it this far... Ughhh... This makes no sense!!!"
                            <br />
                            <br />
                            ...Yeah, that was about it. I tried to do my best impression of him, but I kinda just sounded like an idiot... Although, it was an idiot I was imitating, so I guess I nailed it?
                            <br />
                            <br />
                            Normally, we would've handled this easily, but the guy was carrying a shotgun like it was just an everyday commodity. And for all we knew, if one of us looked at him the wrong way, they'd have been shot dead immediately. Oh, and talking with him was going nowhere. So, in an effort to silence him, we had decided to take a few precautions. Since he didn't look very bright, we just figured we'd have someone get the jump on him. I think that was our first and biggest mistake.
                            <br />
                            <br />
                            It's like he had planned out all of our possible moves. Every time we tried to come at him from a different angle, he had already countered us. This guy was surrounded by 6 or 7 people, yet he was the one backing us into a proverbial corner. We realized then that we weren't gonna be able to lay a finger on him. We backed off, then he told us that we shouldn't interrupt a lunatic's lament, and proceeded to blab on and on about how rude we were.
                            <br />
                            <br />
                            You won't hear me admit to this often, but he was completely out of our league. He was just... so crazily stupid and yet so idiotically strategic. We left him alone after that.
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "dlq_focus"}>
                        <Story>
                            Hit. Pull back, reload. Hit. Pull back, reload. Hit. Pull back, reload. Miss. Pull back, reload. Oh great, I'm out of ammo. Sigh. The certainty of a sniper should be unbeatable, but I always find myself doubting my skill. At least I can have confidence that the fault is my own, and not the bullet or the gun itself.
                            <br />
                            <br />
                            I've spent the last few years indulging in a few different hobbies, but the one that I've always stuck to is marksmanship. When I was younger, I couldn't handle firearms, so I opted to spend my time practicing with a bow and arrow. Doing that for so long prepared me to have a steady aim with a sniper rifle, and I've since won a couple of contests with this sort of skill. But I still haven't reached the level of proficiency that I want.
                            <br />
                            <br />
                            Do I hunt? No, not really. I understand how hunting animals might provide a change of pace for some, but there are ways to set up erratic targets instead of having to kill innocent creatures. Yeah, I'm pretty unlike most in my profession. For a sniper, I'm pretty pathetic. They're known for their ability to assassinate people from afar, but I'm not interested in killing. Even with a genuine reason, I still don't think I could bring myself to do it.
                            <br />
                            <br />
                            You see, when it comes to things like that, I have to be completely convinced it's the right thing to do. If I even have the slightest doubt in myself, I lose my composure, and everything starts going wrong. So, I spend all my time thinking about everything going on. I have to come to my own conclusions as early as possible. That way, I can make the important decisions when the time comes.
                            <br />
                            <br />
                            It's smart? I wouldn't necessarily say that. It means I cannot rely on my own guts or whims at all, and there are times where gut feelings are the best options. If something comes up suddenly that I haven't thought about before, I'll waste time pondering over all the best options, all while time passes me by. Seriously, it really sucks when that happens. People I've known really despised me for it, and I couldn't understand where they were coming from. This has been my whole life, so I can't fathom having the ability to make instant decisions.
                            <br />
                            <br />
                            I think about all sorts of stuff all of the time. I love learning and all that; history is something I especially enjoy. I mean, history doesn't change, but so many things in our everyday life do. It's hard to have confidence in anything current, because it all changes. That's why I focus so much on refining my marksmanship. It's something that has a large amount of constants and a small amount of variables. Plus, the main varying factor is myself, which helps me prove that I am capable of changing things.
                            <br />
                            <br />
                            It's stuff like that which helps me find my place in life. I'm not perfectly content where I am now, but it's still fairly comfortable. I think I prefer life without change, and it's been like this for a while, so that adds to my comfort.
                            <br />
                            <br />
                            - A Chat With a Local Sniper, [REDACTED] Newspaper
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "dreams"}>
                        <Story>
                            I keep having these dreams. And in these dreams, I see you. But you're not you. You're what I wished you were.
                            <br />
                            <br />
                            Sometimes my mind mistakes these dreams for memories of reality. It's days like those when I forget that I'm alone. But eventually, the truth starts to bleed back into my life. I'm forced to come to terms with how bad things actually are.
                            <br />
                            <br />
                            I usually try to keep my head in thoughts of a better place. Imagining an existence in endless fantasy keeps me from dwelling on the darkness. And in that respect, these dreams make sense. My brain is simply trying to protect me from my greatest fears.
                            <br />
                            <br />
                            But they become a problem. Not being able to discern what is real and what is fake makes it hard to live normally. So I learn to take caution with every step, question every movement, second guess every thought. It's simply the only way I can continue on.
                            <br />
                            <br />
                            Knowing I can't trust my senses comes with its own problems. It's difficult to carry on without having anything to rely on, but I've devised workarounds. Still, every now and then, I get a glimpse of what I'm blocking out. These unspeakable horrors-
                            <br />
                            <br />
                            I keep having these nightmares. And in these nightmares, you're not there. Everyone's gone. And then I never wake up.
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "fuel2fire"}>
                        <Story>
                            The year was coming to an end.
                            A man worked tirelessly to prepare for winter.
                            He had amassed an impossibly large stack of logs to satisfy his communal campfire all season long.
                            <br />
                            <br />
                            The cold days dawned, and their nights were long.
                            His campfire treated its guests well.
                            The man was careful to tell them to only take the logs from the top in order to ensure the stack's stability.
                            <br />
                            <br />
                            Not all guests were eager to listen.
                            Some were lazy and selfish, quietly picking the most appealing log, and yanking it from the stack with haste.
                            The stack quickly became less and less stable, until finally the last load-bearing log was pulled.
                            <br />
                            <br />
                            It all came crashing down.
                            The guests fled in terror as the logs rolled towards the campfire, setting the forest ablaze in mere moments.
                            Its days of peace and tranquility were over.
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "friend"}>
                        <Story>
                            I sighed as I tapped my foot impatiently. I knew I had a long day ahead of me. I checked my watch. It had just turned 5 PM, and I was still sitting alone at my table. Where could he be? I had plans with a friend today, but it seemed he was running late. I checked my phone. The lock screen was still as empty as ever. Why do people always blow me off? I decided I was fed up, and got up to leave the coffee shop we had planned to meet at.
                            <br />
                            I walked towards the exit with my head drooping slightly. I'll admit I was disappointed, but not surprised. This sort of thing was something I was used to, unfortunately. I couldn't waste any more time waiting for a "friend" to show up an hour after our agreed meeting time. I, of course, wouldn't mention my disappointment to him. My resentment would just slowly build up over time until I couldn't hold it in anymore, and then my friend would have his excuse to finally stop socializing with me. Well, whatever. If that's what happens, then I guess that's just how it was meant to be. I genuinely tried to further our relationship, but friendships aren't just one-sided. If one person doesn't want that, it's impossible to force it. They'll just deteriorate over time, until they finally dissolve.
                            <br />
                            I couldn't help but wonder whether or not it was my fault. I have a bad habit of oversharing about my life, which tends to scare people off. I wasn't trying to be self-absorbed, I just don't have the opportunity to talk about my own sorry life much. If someone gives me an inch, I end up unintentionally taking a mile. I felt worse after coming to that conclusion, but I convinced myself I deserved it. God, I'm such an idiot.
                            <br />
                            As I walked through the exit of the coffee shop, I felt my shoulder get pushed out of the way. I looked up at the culprit beside me. It was a tall kid, probably about my own age, who had a scowl on his face as his gaze met mine.
                            <br />
                            "Watch it, kid."
                            <br />
                            Oh, great. That's the kind of person I had bumped into. "Sorry, I guess."
                            <br />
                            "Just don't let it happen again."
                            <br />
                            I don't know what was going on in this person's head, but I couldn't imagine ever even seeing him again, let alone bumping into him. "Chill out, man. It was an honest mistake."
                            <br />
                            "Are you trying to start something?"
                            <br />
                            "Look, I was just thinking about some stuff, not paying much attention to the outside world. You can't expect everyone to cater to you in life."
                            <br />
                            "That's not what I'm saying."
                            <br />
                            "Huh?" This guy really was an odd one, but that suddenly gave me an idea.
                            <br />
                            "This isn't some high and mighty lesson about life. It's just another altercation between strangers. It can either go one way or the other. So don't give me that crap. I doubt you want to be pissing off the wrong people."
                            <br />
                            I got the point of what he was saying, though it sorta seemed out of place for a guy like him. I wasn't trying to act deep or anything, so I immediately changed the subject. "I guess that's true. Say, did you come here to meet someone?"
                            <br />
                            "What?"
                            <br />
                            "I'm just curious, that's all."
                            <br />
                            "Uhhhh... No? Though I don't understand why you're asking that all of a sudden."
                            <br />
                            "Well, my friend I had planned on meeting here bailed on me without even letting me know, and I was pretty annoyed about it..." It also made me want to cry, but I wasn't going to tell someone I had just met that. "Maybe we could get to know each other? I just need something to take my mind off of it."
                            <br />
                            "...You're a pretty weird kid. But I don't really mind, so go ahead."
                            <br />
                            "Hey, I doubt you're much older than me."
                            <br />
                            "I'm 21, you?"
                            <br />
                            "...Same." I knew it.
                            <br />
                            "Oh. Well, you're just so short it was hard to imagine you were older than 18." I'm nearly average height. This guy is like 7 feet or something. Everyone's gonna be short to him.
                            <br />
                            "Right... Well, whatever. You go get your coffee ordered, I'll find us a place to sit."
                            <br />
                            We went our separate ways for about 5 minutes until he was done ordering and sat down across from me. I was quite interested in knowing more about this guy's life as I was certain it was more interesting than mine.
                            <br />
                            <br />
                            Chapter 2
                            <br />
                            <br />

                            "So... what brings you to this coffee shop anyway? You go often?" I didn't really know the best way to start a conversation, so I chose the most bland and typical approach.
                            <br />
                            "Actually, this is my first time coming here. A friend told me it was pretty good a while back, but I never got around to going until now. Although... I only went today as a memorial for him... You see, he was in an accident a few days ago, and well... He passed away yesterday." Wow. I definitely wasn't expecting that, though I can't say I didn't suspect something was up. He wore the face of someone who had recently experienced tragedy. I knew this because it was the same expression I wore every day of my high school life.
                            <br />
                            "I'm sorry to hear that... I wish I could say more, but I usually hurt more than I help when I try to comfort people... So I'd rather not say too much..."
                            <br />
                            "Yeah, it's fine... I get that... I really do." This guy suddenly seemed a lot more approachable than he was 10 minutes ago. "I'm kinda off-putting to most people I meet, partly because of my height, and also because I tend to always have an unkind expression on my face. So I understand what it's like to have people always pushing you away..." Yeah, I could see that. He didn't mention the attitude, but I assumed that was just a product of how he was treated. If people always pushed him away, I couldn't blame him for being easily agitated.
                            <br />
                            "Right... I know what you mean. Well, I'm not exactly off-putting, but due to a lack of socializing in my youth, I have a hard time knowing what is appropriate to say and what isn't in a conversation. People end up thinking I'm just weird... Then I end up never seeing them again."
                            <br />
                            "That explains a lot. I was wondering why you randomly asked to sit with me, but now I think I get it. I feel as though you can see something in others that they themselves don't. That must be what drew you towards me, even though we had just had a bad interaction." This kid... There seemed to be a lot more to him than what was on the surface. I couldn't help but wonder how he had come to that conclusion so quickly, after just a few spoken sentences between us. He was intriguing, that much I could see from the very beginning, but the more I spoke to him, the more I wanted to understand everything about him. I was used to these feelings though, and I knew I'd probably end up regretting it if I acted on them.
                            <br />
                            "I guess so... I haven't really thought about it before, but you might be right. It does make sense though. If people hear something they aren't ready to accept, they'd definitely be more inclined to push me away... But that's assuming what I'm seeing truly is that and not anything else." I really hadn't considered it much, but everything he said made so much sense. "Where did you get this intuition of yours anyway? You seem to hit all the nails directly on their heads right away."
                            <br />
                            "Oh, I guess I can just tell..." He looked away from me as he said that, as though there was something more he wasn't letting on. Fair enough, we all have things we need to hide.
                            <br />
                            "That's some superpower." I meant this genuinely, but as soon as it came out of my mouth I realized it could seem sarcastic. I had a bit of a problem with saying sarcastic things that sounded serious and vice versa, which also contributed to my constant loss of friends.
                            <br />
                            "You could say that..." I noticed him looking dejected, and I realized I was doing it again. I was pushing the conversation to where it shouldn't be going. I hated myself for this; I didn't know how I always managed to go in this direction. I just wanted to continue the conversation, not make people feel bad about themselves. I knew I had to change the subject, but the hard part was figuring out how to integrate it seamlessly, without making it seem like I was forcing him to stop talking about it.

                            <br />
                            <br />
                            Chapter 3
                            <br />
                            <br />


                            "Oh, um... I was wondering, what kind of coffee did you get?" Drat. That sounded absolutely terrible. I wanted to just lock myself away from the world and hide, but I didn't really have that option here.
                            <br />
                            "...I just got a french vanilla cappuccino, why?" Not really the sort of drink I would expect someone like him to get, but I wasn't going to judge.
                            <br />
                            "Uh... I wanted to see if we had similar tastes! When I was waiting for my friend, I got an iced caramel latte. Oh, and I finished it long before you got here." I think this was going in a better direction... The transition sounded a bit off, but as long as I can keep it together from here on out, I should be perfectly fine. I looked down at my feet in anticipation of a response.
                            <br />
                            "That's... kinda girly if you ask me." Says the person who got french vanilla. What do you expect me to drink? Straight black coffee? Sounds boring. Still, it was kinda funny. I looked up at him, suddenly noticing him smiling at me.
                            <br />
                            I eased up, and even laughed a bit. "Girly? Is that a problem?" I subconsciously twirled my hair thinking about it.
                            <br />
                            "Uh... Well, no... I just thought it was a surprising choice. I usually feel pressured to just choose whatever people would expect me to get. I got the french vanilla cappuccino this time because that's what my friend would've got..." I somehow steered the conversation in the wrong direction this time. Maybe I can still get out of it though...
                            <br />
                            "I lived most of my life doing what others expected of me, and it only made me feel like I didn't have my own personality... I'm not trying to dictate your life, but you should never let others pressure you into taking your freedom of choice away..." I hope that didn't sound too forceful.
                            <br />
                            "Yeah... you're totally right. It's something I'd like to change about myself. I just find it so hard to actually try and make that change." That was something I completely understood. But I wanted to see if I could help him.
                            <br />
                            "You don't have to do it alone..." Maybe that was a bit too forward, but it was the truth.
                            <br />
                            "I guess, but even then, I doubt I'd make any meaningful progress." I couldn't have related more.
                            <br />
                            "Well, you don't have to rush straight into it. ‘Good things take time', or however the quote goes. Hey, why don't we exchange numbers? I'd definitely like to talk at another time, and it'd allow me to help out in your life when I can." There we go. I somehow managed to ask for his number. This was a rarity for me; I pretty much never talked to strangers, let alone asked for their number. But I had taken quite a liking to this guy, and I didn't want this conversation to go to waste.

                            <br />
                            <br />
                            Chapter 4
                            <br />
                            <br />

                            "Hm... Why not? I mean, it couldn't hurt! I could always use a few new friends." It actually worked? I guess that's what most people do to find friends, so I probably shouldn't be surprised. Yet, with my outstanding single digit tally of the total friends I had made in person, I felt ecstatic.
                            <br />
                            We exchanged numbers, and talked for a bit longer. Sadly, I had to go home to finish up some work I had been putting off, so we said our goodbyes and I promised him I'd message him as soon as I could.
                            <br />
                            <br />
                            TO BE CONTINUED
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "space"}>
                        <Story>
                            At times I find myself staring into the void of space
                            <br />
                            I wonder if out there I'd find a place of my own
                            <br />
                            Amidst the darkness and anomalies yet not alone
                            <br />
                            A place where junk like me can float freely
                            <br />
                            <br />
                            Searching through the celestial sea
                            <br />
                            Is there somewhere made for me?
                            <br />
                            It's too dark and I can't see
                            <br />
                            Now I'm wandering aimlessly
                            <br />
                            <br />
                            The skies light a stellar pathway
                            <br />
                            I'm just too blind to follow along
                            <br />
                            The obvious signs say it's clear
                            <br />
                            That every choice I make is all wrong
                            <br />
                            <br />
                            There's no chance that I belong on this planet
                            <br />
                            But I can't expect to escape anytime soon
                            <br />
                            I'll stay taunted by the faces of the moon
                            <br />
                            Forever feeling fearful
                        </Story>
                    </Match>
                    <Match when={store.selectedStory == "corridors"}>
                        <Story>
                            Flying by like speeding birds in the wind
                            <br />
                            Wings flapping as calendar pages tear off
                            <br />
                            A flash of light blinding the unlucky eyes
                            <br />
                            Shattered hopes follow upon arise
                            <br />
                            <br />

                            Exhaustion greets the waking soul
                            <br />
                            Staggering footsteps, a daily toll
                            <br />
                            Alerted ears pick up on vocal fears
                            <br />
                            Desperate cries from rooms nearby
                            <br />
                            <br />

                            Creaking hinges give way to silence
                            <br />
                            A glimpse peruses the open hallway
                            <br />
                            Cold air breezes by flush with the skin
                            <br />
                            Deserted corridors reminding of a sin
                            <br />
                            <br />

                            Sudden solitude shutting it all back out
                            <br />
                            The door of opportunity closed eternally
                            <br />
                            With all but the same words replaying
                            <br />
                            “Remember that it's all in your head”

                        </Story>
                    </Match>
                </Switch>
            </div>
        )
    }

    createEffect(() => {
        setInterval(() => {
            store.currentTime = new Date()
        }, 1000)
    })

    return (
        <>
            <MetaProvider>
                <Title>{store.characterMode == "furfulcat" ? "furfulcat's house" : `${store.characterMode}'s room`}</Title>
                <Link rel="icon" href={store.characterMode == "Flaky" ? flakyFavicon : store.characterMode == "Dusty" ? dustyFavicon : houseFavicon} />
            </MetaProvider>

            <Style>
                {`
            @keyframes marquee {
                from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--marquee-gap)));
  }
    @keyframes marquee-abs {
  from {
    transform: translateX(calc(100% + var(--marquee-gap)));
  }
  to {
    transform: translateX(0);
  }
}
            }
            @keyframes scroll-vertical {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 0 100%;
                }
            }
            @keyframes scroll-back {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 0 100%;
                }
            }
            @keyframes colorRotate {
                0% {
          color: #ff4747;
        }
        10% {
          color: #ff8347;
        }
        20% {
          color: #ffe047;
        }
        30% {
          color: #66ff47;
        }
        40% {
          color: #6ff;
        }
        50% {
          color: #44abff;
        }
        60% {
          color: #3730ff;
        }
        70% {
          color: #7c51ff;
        }
        80% {
          color: #ff51f6;
        }
        90% {
          color: #ff007d;
        }
        100% {
          color: #ff4747;
        }
            }
                body{
                    --border-color: ${store.themes[store.selectedTheme].borderColor};
                    --text-color: ${store.themes[store.selectedTheme].textColor};
                    --bg-color: ${store.themes[store.selectedTheme].backgroundColor};
                    --fg-color: ${store.themes[store.selectedTheme].foregroundColor};
                    --font-style: ${store.fonts[store.selectedFont]};
                    --marquee-gap: .5rem;

                }
                    .marquee {
                    --gap: 1rem;
                    display: flex;
                    overflow: hidden;
                    user-select: none;
                    gap: var(--marquee-gap);
                    }

                    .marquee__content {
                    flex-shrink: 0;
                    display: flex;
                    justify-content: space-around;
                    min-width: 100%;
                    gap: var(--marquee-gap);
                    animation: marquee 30s linear infinite;
                    }

                    .marquee--hover-pause:hover .marquee__content {
                    animation-play-state: paused;
                    }





            `}
            </Style>
            {/* <div class="min-w-screen min-h-screen absolute overflow-hidden pointer-events-none">
                    <div style={{ "background-image": `url(${fg})`, "background-size": "100vw", animation: "scroll-vertical 10s linear infinite", "top": `${top}px`, "left": `${left}px`, "right": `${right}px`, "bottom": `${bottom}px`  }} class=" absolute bg-repeat h-[400%] w-full z-[2]  pointer-events-none [image-rendering:pixelated]"></div>
            </div> */}
            <div class='[box-shadow:1px_1px_8px_0px_var(--border-color)] z-10 border fixed flex justify-center border-[var(--border-color)] text-[var(--text-color)] [font-family:var(--font-style)] w-full bg-[var(--fg-color)]'>
                <div class="border-l border-dashed px-2 border-[var(--border-color)]  space-x-1">{store.characterMode == "furfulcat" ? "furfulcat's house" : `${store.characterMode}'s room`}</div>
                <div class="[color:lime] flex justify-center border-l border-r border-dashed border-[var(--border-color)]  px-2 space-x-1">
                    <div>{store.currentTime.toLocaleDateString()}</div>
                    <div>{store.currentTime.toLocaleTimeString()}</div>
                </div>
            </div>
            <div class="fixed space-y-2 left-2 bottom-2 text-[var(--text-color)] [font-family:var(--font-style)]">
                <div class="flex">
                    <div class="border-[var(--border-color)]  px-2 underline  h-[28px] border border-l-none  [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)]">
                        <div class=" pb-0.5">Activity</div>
                    </div>
                </div>
                <div class=" lg:w-[28vw] max-h-[20vh] w-[75vw]  flex">
                    <Show when={store.panelViews.music}>
                        <div class=" border border-[var(--border-color)] [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)] overflow-auto  
                    leading-4 ">
                            <div class="p-2 flex">
                                <div class="pr-2">
                                    <img class="border object-cover border-[var(--border-color)] h-16 min-w-16" src={store.lastPlayed.img} />
                                </div>
                                <div class="bg-[var(--bg-color)]  pt-0">
                                    <span class=" [white-space:pre-wrap] text-orange-400">{store.lastPlayed.name}</span>
                                    <br />
                                    by <span class=" [white-space:pre-wrap] text-orange-400">{store.lastPlayed.artist}</span>
                                    <br />
                                    on <span class=" [white-space:pre-wrap] text-orange-400">{store.lastPlayed.album}</span>
                                </div>
                                <br />
                            </div>
                            <div class="p-2 pt-0">
                                <Show fallback={
                                    <>
                                        <span class="[color:lime]">Played {store.timeAgo.format(store.lastPlayed.dateListened)}.</span>
                                    </>
                                } when={store.lastPlayed.nowPlaying}>
                                    <>
                                        <span class="[color:lime]">Currently listening to!</span>
                                    </>
                                </Show>
                            </div>
                        </div>
                    </Show>
                    <div class="border-[var(--border-color)]  h-[28px] border border-l-none  [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)]">
                        <div onClick={() => store.panelViews.music = !store.panelViews.music} class=" pl-[3px] pb-0.5 hover:cursor-pointer hover:underline">{store.panelViews.music ? `<` : `>`}</div>
                    </div>
                </div>
                <div class=" lg:w-[28vw] max-h-[20vh] w-[75vw]  flex">
                    <Show when={store.panelViews.bluesky}>
                        <div class=" border border-[var(--border-color)] [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)] overflow-auto  
                    leading-4 ">
                            <div class="p-2 ">
                                <div class="float-start pr-2">
                                    <img class="border border-[var(--border-color)] h-16 w-16" src={store.latestPost.avatar} />
                                </div>
                                <div class="bg-[var(--bg-color)] min-h-16 pt-0">
                                    <span class=" [white-space:pre-wrap]">{store.latestPost.content}</span>
                                    <br />
                                </div>
                                <br />
                                <span class="[color:lime]">{store.latestPost.date.toLocaleDateString()}</span> at <span class="[color:lime]">{store.latestPost.date.toLocaleTimeString()}</span> @ <A class="text-blue-400 hover:underline" href={store.latestPost.url}>furfulcat.bsky.social</A>
                            </div>
                        </div>
                    </Show>
                    <div class="border-[var(--border-color)]  h-[28px] border border-l-none  [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)]">
                        <div onClick={() => store.panelViews.bluesky = !store.panelViews.bluesky} class=" pl-[3px] pb-0.5 hover:cursor-pointer hover:underline">{store.panelViews.bluesky ? `<` : `>`}</div>
                    </div>
                </div>
            </div>
            <div class='[font-family:var(--font-style)] min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] grid justify-center place-items-center [image-rendering:pixelated]'>
                <div class="marquee marquee--hover-pause mt-10">
                    <div class="marquee__content ">
                        <For
                            each={store.badges}
                            children={(badge) => (
                                <a href={badge.link} class="cursor-pointer">
                                    <img alt={badge.name} title={badge.name} src={badge.img} />
                                </a>
                            )}
                        />
                    </div>
                    <div aria-hidden="true" class="marquee__content">
                        <For
                            each={store.badges}
                            children={(badge) => (
                                <a href={badge.link} class="cursor-pointer">
                                    <img alt={badge.name} title={badge.name} src={badge.img} />
                                </a>
                            )}
                        />
                    </div>
                </div>
                <div class="lg:w-[50vw] w-[90vw] space-y-5 py-5">
                    <div class="border border-[var(--border-color)] [box-shadow:1px_1px_8px_0px_var(--border-color)]  bg-[var(--fg-color)] ">

                        <Tabs orientation="vertical" class="grid grid-cols-[10fr_1fr] leading-4 ">
                            <Show fallback={
                                <div>
                                    <TabsContent class="overflow-auto max-h-[95vh] p-2" value="home">
                                        <Switch>
                                            <Match when={store.characterMode == "furfulcat"}>
                                                <div class="text-lg border-b border-dashed border-[var(--border-color)]">Here lies a cat obsessed game developer.</div>
                                                <div>Hiya! I'm furfulcat, an aspiring game developer who absolutely loves cats more than anything in the world! This is my webpage, which happens to be a subdirectory of the website called <A class="text-pink-500 hover:underline cursor-pointer" href="/">fearfulcats.com</A>. Any part of this site apart from this subdirectory is made for my projects as a whole, while this area is for anything that's more personal.</div>
                                                <div>Aside from that, I hope you enjoy your time here! This webpage is currently a work in progress, so expect frequent changes and updates. I'm also not the best at web design, so please bear with me as I work towards finding the perfect style for this place.</div>
                                            </Match>
                                            <Match when={store.characterMode == "Dusty"}>
                                                <div class="text-lg border-b border-dashed border-[var(--border-color)]">The world of Dusty.</div>
                                                <div>Hey, I'm Dusty. Dunno what could've brought you here, but welcome. Stay as long as you want, just don't get in my way. Better yet, go visit my friend Flaky, he'd do a much better job of humoring you. But I'd advise you to be careful. Flaky is the only one I trust, and as such I'll protect him with my life.</div>
                                            </Match>
                                            <Match when={store.characterMode == "Flaky"}>
                                                <div class="text-lg border-b border-dashed border-[var(--border-color)]">Flaky's place!</div>
                                                <div>Welcome to my room! I'm Flaky, a totally awesome cat thats way too energetic for his own good! Have you met my friend Dusty? He might seem a little intimidating at first, but trust me when I say deep down he's a real softie! Well, he is to me at least... just try getting through that thick shell of his!</div>
                                            </Match>
                                        </Switch>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[95vh] p-2" value="about">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">About me!</div>
                                        <div>Let's see here... I'm a 20 year old catboy who also happens to be gay as hell! Oh, and I also have Avoidant Personality Disorder (AvPD). If you don't know what that is, it's basically a disorder that makes you avoid any and all situations that involve socializing due to a fear of both people and their judgements. Typically leads to not having or losing prior friends, as I can attest to. Of course just because I have AvPD doesn't mean I don't want to have friends, in fact I would love to, I just don't have the capability to make/keep them. Try as I might, AvPD has a firm hold on me and I'm far too weak to break free. And who knows, I might also have some other disorders, but it's hard to get diagnosed when you're too scared to leave the house by yourself let alone talk to a stranger about your various issues... ANYWAYS! Due to such issues I live with my parents and don't have a full time job, although I do work once per week for my older brother as a full-stack developer. In my free time I typically indulge in one of my many hobbies.</div>
                                        <div class="border-t border-b border-dashed border-[var(--border-color)] text-lg">Hobbies:</div>
                                        <div>
                                            <ul class="list-disc ml-5">
                                                <li>making games</li>
                                                <li>playing games</li>
                                                <li>writing stories</li>
                                                <li>cooking</li>
                                                <li>listening to music (i listen to A LOT)</li>
                                                <li>browsing art (especially anything cat related)</li>
                                                <li>programming</li>
                                                <li>building lego sets</li>
                                            </ul>
                                        </div>
                                        <div class="border-t border-b border-dashed border-[var(--border-color)] text-lg">Minor Interests:</div>
                                        <ul class="list-disc ml-5">
                                            <li>astronomy</li>
                                            <li>photography</li>
                                            <li>drawing</li>
                                            <li>collecting records/CDs</li>
                                        </ul>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="social">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">Find me elsewhere!</div>

                                        <div>When it comes to social media, I pretty much only have bluesky and discord. I've tried to cut out most of my social media usage just because of a general dislike of the modern state of social media. I only really have bluesky just for yapping purposes, and discord for communication. I don't have a server or anything, but my user is simply furfulcat.
                                        </div>

                                        <A class="text-pink-500 hover:underline cursor-pointer" href="https://bsky.app/profile/furfulcat.bsky.social">Bluesky</A>
                                        <div>Oh, and I have a steam account where I do all my <span class="italic">gaming</span> </div><A class="text-pink-500 hover:underline cursor-pointer" href="https://steamcommunity.com/id/furfulcat/">Steam</A>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="blog">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">Personal ramblings...</div>
                                        <div class="border-b border-dashed border-[var(--border-color)]">Here I will write about anything I feel about writing whenever I feel the need to. These will be simple, text-only logs of my personal thoughts.</div>
                                        <For each={store.blogs} children={(blog) => (
                                            <BlogPost date={blog.date} text={blog.text} />
                                        )} />
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="gallery">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">-Wondrous visions of reality-</div>
                                        <div class="border-b border-dashed border-[var(--border-color)]">Peruse my very own collection of amateur photography!</div>
                                        <Gallery />

                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="stories">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">Tales of all kinds.</div>
                                        <div>Every now and then, I feel like writing and so I'll write up a short story or poem. Unfortunately, I don't always finish them... But hey, maybe putting them out here will inspire me to actually complete them at some point!</div>
                                        <div class="border-t border-b border-dashed border-[var(--border-color)] text-lg">Original Stories</div>
                                        <div><StorySelect name="timecat">Time Cat</StorySelect> | Started: 2025/01/14 | Updated: Never</div>
                                        <div><StorySelect name="friend">Friend of a Friend</StorySelect> | Started: 2023/08/29 | Updated: 2023/09/09</div>
                                        <div>
                                            <div class="underline font-bold">Delinquents</div>
                                            <div class="ml-5">
                                                <div><StorySelect name="dlq_focus">The Philosophical Marksman</StorySelect> | Completed: 2023/11/08</div>
                                                <div><StorySelect name="dlq_riot">The Lunatic Strategist</StorySelect> | Completed: 2023/11/07</div>
                                                <div><StorySelect name="dlq_charade">The Concerned Killer</StorySelect> | Completed: 2023/11/05</div>
                                            </div>
                                        </div>
                                        <div class="border-t border-b border-dashed border-[var(--border-color)] text-lg">Original Poetry</div>
                                        <div><StorySelect name="corridors">Empty Corridors</StorySelect> | Completed: 2025/03/10</div>
                                        <div><StorySelect name="dreams">Dreams</StorySelect> | Completed: 2024/12/22</div>
                                        <div><StorySelect name="fuel2fire">The Fuel to the Fire</StorySelect> | Completed: 2024/12/17</div>
                                        <div><StorySelect name="space">Space Junk</StorySelect> | Completed: 2024/10/13</div>

                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="games">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">OBSESSIONS: GAMES</div>

                                        <div>FAVORITE GAME OF ALL TIME: Nine Sols</div>
                                        <div>SECOND FAVORITE GAME OF ALL TIME: OneShot</div>
                                        <div>Other games/franchises I like (unordered):</div>
                                        <div>Celeste, Subnautica, Persona 5, Cult of the Lamb, Tomodachi Life, Miitopia, Helldivers 2, Animal Crossing, Legend of Zelda, Undertale/Deltarune, Undertale Yellow, Paper Mario, Banjo-Kazooie, Cave Story, Hollow Knight, FNaF, Silent Hill 2, Resident Evil 2 & 4, Mega Man, Sonic the Hedgehog (mostly classic), Stardew Valley, WEBFISHING, Red Dead Redemption 2</div>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="music">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">OBSESSIONS: MUSIC</div>

                                        <div>FAVORITE BAND OF ALL TIME: Famous Last Words</div>
                                        <div>SECOND FAVORITE BAND OF ALL TIME: Alesana</div>
                                        <div>Other bands/artists I like (unordered):</div>
                                        <div>Daft Punk, deadmau5, she, Hail the Sun, Anatomy of a Ghost, Waterparks, napcast, The Strokes, My Chemical Romance, Pierce The Veil, Anamanaguchi, Closure in Moscow, Get Scared, I Don't Know How But They Found Me, Sleeping With Sirens, Paramore, From First to Last, Home, Before Today</div>
                                        <div>I also listen to various video game soundtracks, far too many to list.</div>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="media">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">OBSESSIONS: MEDIA</div>

                                        <div>will put movies, shows, & anime i like here later</div>
                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="themes">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">Select a color set! (Page is designed in Dark)</div>
                                        <For each={store.themes} children={(theme, i) => (
                                            <div aria-selected={i() == store.selectedTheme} class="aria-selected:hover:cursor-default hover:cursor-pointer border hover:underline aria-selected:underline py-1 m-2 flex justify-center" style={{ "border-color": theme.borderColor, "background-color": theme.backgroundColor, "color": theme.textColor }}
                                                onClick={() => {
                                                    if (theme.name == "Dusty") store.characterMode = "Dusty"
                                                    else if (theme.name == "Flaky") store.characterMode = "Flaky"
                                                    else store.characterMode = "furfulcat"
                                                    store.selectedTheme = i()
                                                    localStorage.setItem("selectedTheme", JSON.stringify(store.selectedTheme))
                                                }}>
                                                <div style={{ "background-color": theme.foregroundColor, "border-color": theme.borderColor, "box-shadow": `1px 1px 8px 0px ${theme.borderColor}` }} class="w-[100px] text-center border py-1">{theme.name}</div>
                                            </div>
                                        )} />

                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="fonts">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)]">Choose a font! (Page is designed in MS UI Gothic)</div>
                                        <For each={store.fonts} children={(font, i) => (
                                            <div aria-selected={i() == store.selectedFont} class="aria-selected:hover:cursor-default hover:cursor-pointer hover:underline aria-selected:underline py-1 m-2 flex justify-center"
                                                onClick={() => {
                                                    store.selectedFont = i()
                                                    localStorage.setItem("selectedFont", JSON.stringify(store.selectedFont))
                                                }}>{font}
                                            </div>
                                        )} />

                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="resources">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)] mb-2">Webpage construction utilities.</div>
                                        <div>My buttons! Feel free to hotlink if you'd like.</div>
                                        <div class="flex gap-2 mt-2">
                                            <div class="space-y-2">
                                                <img src={furfulBadge} title="furfulcat's house" />
                                                <textarea class="resize bg-[var(--bg-color)] max-w-[20vw] max-h-[20vh] p-1 border border-[var(--border-color)]" disabled>{`<a href="https://fearfulcats.com/furfulcat/home"><img src="https://github.com/fearfulcats/ffc-site/blob/main/current/src/assets/furfulcat/furfulbadge.gif"></a>`}</textarea>
                                            </div>
                                            <div class="space-y-2">
                                                <img src={houseBadge} title="furfulcat's house" />
                                                <textarea class="resize bg-[var(--bg-color)] max-w-[20vw] max-h-[20vh] p-1 border border-[var(--border-color)]" disabled>{`<a href="https://fearfulcats.com/furfulcat/home"><img src="https://github.com/fearfulcats/ffc-site/blob/main/current/src/assets/furfulcat/housebadge.gif"></a>`}</textarea>
                                            </div>
                                        </div>


                                    </TabsContent>
                                    <TabsContent class="overflow-auto max-h-[90vh] p-2" value="guestbook">
                                        <div class="text-lg border-b border-dashed border-[var(--border-color)] mb-2">Guestbook - leave a comment!</div>
                                        <iframe class="h-[80vh] w-full border border-[var(--border-color)]" src="https://furfulcat.atabook.org/" />


                                    </TabsContent>



                                </div>
                            } when={store.storyMode}>
                                <Stories />
                            </Show>
                            <div class="border-l border-[var(--border-color)] border-dashed h-[90vh]">

                                <TabsList class="flex flex-col p-0 w-full h-[380px] bg-transparent  border-b border-dashed  text-[var(--text-color)] rounded-none place-items-center border-[var(--border-color)]">
                                    <BioTab value="home" class="mt-1 ">Home</BioTab>
                                    <div class="border-b border-[var(--border-color)] border-dashed w-full"></div>
                                    <BioTab value="about">About</BioTab>
                                    <BioTab value="social">Social</BioTab>
                                    <BioTab value="blog">Blog</BioTab>
                                    <div class="border-t border-b border-[var(--border-color)] w-full text-center">CONTENT</div>
                                    <BioTab value="gallery">Gallery</BioTab>
                                    <BioTab value="stories">Stories</BioTab>
                                    <div class="border-t border-b border-[var(--border-color)] w-full text-center">OBSESSIONS</div>
                                    <BioTab value="games">Games</BioTab>
                                    <BioTab value="music">Music</BioTab>
                                    <BioTab value="media">Media</BioTab>
                                    {/* <div class="border-t border-b border-[var(--border-color)]">INTERACTIVES</div> */}
                                    <div class="border-t border-b border-[var(--border-color)] w-full text-center">APPEARANCE</div>
                                    <BioTab value="themes">Themes</BioTab>
                                    <BioTab value="fonts">Fonts</BioTab>
                                    <div class="border-t border-b border-[var(--border-color)] w-full text-center">UNSORTED</div>
                                    <BioTab value="resources">Resources</BioTab>


                                    <div class="border-t border-[var(--border-color)] border-dashed w-full"></div>
                                    <div class="border-[var(--border-color)] border border-dashed mt-1">
                                        <div class="border-[var(--border-color)] border-b">Visitors:</div>
                                        <script type="text/javascript" src="https://counter.websiteout.com/js/9/6/0/1"></script>
                                    </div>

                                    <BioTab value="guestbook" class="[animation:colorRotate_1.5s_linear_0s_infinite] mb-1">Guestbook</BioTab>



                                </TabsList>

                            </div>

                        </Tabs>

                    </div>
                    <div class="grid grid-cols-2 lg:gap-20 gap-4 leading-4">
                        <div class="border border-[var(--border-color)] [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)] h-[30vh] ">
                            <div class="underline font-bold p-2">Changelog:</div>
                            <div class=" p-2 max-w-full overflow-auto max-h-[80%]">
                                <span class="[color:lime]">2025/03/10</span>: v4.4 - finished gallery page
                                <br />
                                <br />
                                <span class="[color:lime]">2025/03/07</span>: v4.3.3 - added wip gallery page, new theme (galactic), fixed spotify album art squishing, blog height overflow
                                <br />
                                <br />
                                <span class="[color:lime]">2025/03/02</span>: v4.3.2 - added activity header, fixed bluesky post spacing, updated crimson theme text color
                                <br />
                                <br />
                                <span class="[color:lime]">2025/03/01</span>: v4.3.1 - fixed incorrect linking on badges
                                <br />
                                <br />
                                <span class="[color:lime]">2025/02/28</span>: v4.3 - box scrolling no longer includes the header, added latest bluesky post box, spotify last played/currently playing box
                                <br />
                                <br />
                                <span class="[color:lime]">2025/02/26</span>: v4.2.1 - updated social section with steam account, altered page title & favicon, added new themes (silly & icicle), visitor counter
                                <br />
                                <br />
                                <span class="[color:lime]">2025/02/25</span>: v4.2 - added dynamic box shadows, guestbook and resources tabs, dusty's & flaky's rooms, site badge marquee (currently filled mostly with placeholders), upcoming box to list future planned updates, 2 new themes (waterfall & crimson)
                                <br />
                                <br />
                                <span class="[color:lime]">2025/02/24</span>: v4.1 - reworked site spacing, moved header and added local date/time ticker, added appearance section (includes themes and fonts selectors), foreground coloring
                                <br />
                                <br />
                                <span class="[color:lime]">2025/02/23</span>: v4.0 - created home page with barebones design
                            </div>
                        </div>
                        <div class="border border-[var(--border-color)] [box-shadow:1px_1px_8px_0px_var(--border-color)] bg-[var(--fg-color)] h-[30vh]">
                            <div class="underline font-bold p-2">Upcoming:</div>
                            <ul class="p-2 overflow-auto max-h-[80%]">
                                <li>- hand coded web games section</li>
                                <li>- custom cursor</li>
                                <li>- more THEMES!!!!!!!!!!!!</li>
                                <li>- better design probably</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




function BlogPost(props: { text: string, date: string }) {
    return (
        <div class="p-2 m-2 border-[var(--border-color)] border"><span class="[color:lime]">{props.date}</span>: {props.text}</div>
    )
}

export default Bio
