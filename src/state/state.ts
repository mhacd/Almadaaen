// import img1 from '~/assets/img1.png'
// import img2 from '~/assets/img2.png'
// import img3 from '~/assets/img3.png'
// import img4 from '~/assets/img4.png'
import heroBg from '~/assets/hero-bg.png'

export const list = ref([
  heroBg,
  'http://imageupload.mhacd.com/uploads/025634Group%20174567.jpg',
  'http://imageupload.mhacd.com/uploads/025706Group%20174568.jpg',
  'http://imageupload.mhacd.com/uploads/025752Group%20174569.jpg',
])
export const idx = ref(0)
export function change() {
  idx.value = Math.floor(Math.random() * 4)
}
