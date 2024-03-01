import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import netlify from "@astrojs/netlify";
const env = loadEnv('', process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    //accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'Q01LlpdFFoXSgZ7kCrQoqAtt',
    apiOptions: {
      region: ''
    },
    bridge: {
      customParent: 'https://app.storyblok.com'
    },
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser'
    }
  }), tailwind()],
  output: 'server',
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  adapter: netlify()
});