import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      see: 'bg-#222',
      see2: 'bg-#221',
    },
    {
      'fc': 'flex justify-center',
      'fi': 'flex items-center',
      'fb': 'flex justify-between',
      'fcc': 'fc items-center',
      'full': 'w-full h-full',
      'layers': 'relative',
      'r-layer': 'relative w-full h-full',
      'a-layer': 'absolute w-full h-full top-0 left-0',
      'r-layer-content': 'relative ',
    },

    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    {
      'bg-dark-blue': 'bg-#0856A2',
      'text-dark-blue': 'text-#0856A2',
      'text-blue': 'text-#509AEB',
      'bg-blue': 'bg-#509AEB',
      'bg-header': 'bg-#47484E',
      'bg-card': 'bg-#E5E5E5',
      'txt-dark': 'text-#707070',
      'bg-cool': 'bg-#212D37',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
