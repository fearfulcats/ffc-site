import { defineConfig } from "@solidjs/start/config";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    ssr: true,
    server: {
        prerender: {
            crawlLinks: true,
            autoSubfolderIndex: false,
            failOnError: true,
            routes: ["/secret/home", "/games/ffc", "/furfulcat/home"]
        },
    },
    vite: {
        plugins: [    tailwindcss(),  ],
        build: {
            sourcemap: true
        }
    }
    
});
