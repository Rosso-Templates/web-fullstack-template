export default defineNuxtConfig({
    css: ['/assets/styles/base.scss'],

    devtools: { enabled: false },

    ssr: true,

    typescript: {
        tsConfig: {
            compilerOptions: {
                types: ['jquery', 'node'],
                moduleResolution: 'Node',
            },
        },
    },

    app: {
        head: {
            titleTemplate: '%s | APP NAME',

            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width,height=device-height,initial-scale=1,minimum-scale=1',
                },

                {
                    name: 'content-type',
                    content: 'text/html; charset=utf-8',
                },
            ],

            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
                },
            ],

            script: [
                {
                    src: 'https://code.jquery.com/jquery-3.7.1.min.js',
                    type: 'text/javascript',
                },
            ],
        },
    },

    build: {
        transpile: [
            'global',
            'safe-json-parse',
            'mux.js',
            'tslib',
            '@babel/runtime',
        ],
    },

    modules: ['@pinia/nuxt', '@nuxt/content'],
});
