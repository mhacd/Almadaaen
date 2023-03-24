<script setup lang="ts">
import AOS from 'aos'
const intro = ref(true)
onMounted(() => {
  AOS.init()
})
// setTimeout(() => {
//   intro.value = false
// }, 2800)
</script>

<template>
  <Intro v-show="intro" />
  <div relative>
    <HeroLayout />
    <WhiteSection />
    <CoolSection />
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <div>
        <button
          btn data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="4000"
        >
          aos
        </button>
      </div>
      <div
        text-center
      >
        {{ $route.fullPath }}
      </div>
      <TheFooter />
    </main>
  </div>
</template>
