<script setup lang="ts">
const intro = ref(true)
setTimeout(() => {
  intro.value = false
}, 2800)
</script>

<template>
  <Intro v-show="intro" />
  <div relative>
    <HeroLayout />
    <WhiteSection />
    <CoolSection />
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <div text-center>
        {{ $route.fullPath }}
      </div>
      <TheFooter />
    </main>
  </div>
</template>
