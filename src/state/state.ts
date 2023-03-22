// import img1 from '~/assets/img1.png'
// import img2 from '~/assets/img2.png'
// import img3 from '~/assets/img3.png'
// import img4 from '~/assets/img4.png'
import heroBg from '~/assets/hero-bg.png'

export const list = ref([
  heroBg,
  'https://raw.githubusercontent.com/moHaHa/public/images/images/1.jpg',
  'https://raw.githubusercontent.com/moHaHa/public/images/images/2.jpg',
  'https://raw.githubusercontent.com/moHaHa/public/images/images/3.jpg',
])
export const idx = ref(0)
export function change() {
  idx.value = Math.floor(Math.random() * 4)
}
