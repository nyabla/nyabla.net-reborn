import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

const stack = "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          stack,
          {
            fontFeatureSettings: '"zero" on, "cv01" on, "cv05" on',
            },
        ],
        display: [
          `"Inter Display", ${stack}`,
          {
            fontFeatureSettings: '"zero" on, "cv01" on, "cv05" on',
          }
        ],
      },
      colors: {
        "nyabla-pink": "#D40055",
      }
    },
  },
  plugins: [
    typography,

    // add image-rendering utility
    plugin(function imageRenderPlugin(api) {
      api.addUtilities({
        ".render-pixels": { "image-rendering": "pixelated" },
        ".render-auto" : { "image-rendering": "auto" },
      })
    }),
  ],
}
