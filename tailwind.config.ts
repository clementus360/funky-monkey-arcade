import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#050917',
        'primary': '#DA1C5C',
        'text': '#686868',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        text: ['var(--font-gilroy)'],
        title: ['var(--font-play)'],
      },
    },
  },
  plugins: [
    plugin(function({matchUtilities} : any) {
      matchUtilities({
        vw: (value: number) => ({width: (value / 1440) * 100 + 'vw'}),
        vh: (value: number) => ({height: (value / 1080) * 100 + 'vh'}),
        textvw: (value: number) => ({fontSize: (value/1440) * 100 + 'vw'}),
        textvh: (value: number) => ({fontSize: (value/1080) * 100 + 'vh'}),
        gapvw: (value: number) => ({gap: (value / 1440) * 100 + 'vw'}),
        gapvh: (value: number) => ({gap: (value / 1080) * 100 + 'vh'}),
        ptvh: (value: number) => ({paddingTop: (value / 1080) * 100 + 'vh'}),
        pbvh: (value: number) => ({paddingBottom: (value / 1080) * 100 + 'vh'}),
        plvw: (value: number) => ({paddingLeft: (value / 1440) * 100 + 'vw'}),
        prvw: (value: number) => ({paddingRight: (value / 1440) * 100 + 'vw'}),
        lineheight: (value: number) => ({lineHeight: (value/20)}),
      })
    }) 
  ]
}
export default config
