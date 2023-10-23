import type { Component } from 'solid-js';

import { For, Show, createSignal } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { A } from "@solidjs/router";
import "./classes.css"

const Main: Component = () => {
    return (
        <div>
            <A href='/secret/home'>Home</A>
        </div>
        
    )
}

export default Main