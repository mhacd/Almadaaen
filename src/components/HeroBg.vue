<script setup lang="ts">
import heroBg from '~/assets/hero-bg.png'
</script>

<template>
  <div h-screen layers>
    <div a-layer>
      <img r-layer object-cover :src="heroBg">
      <div a-layer class="colored" />
    </div>
    <div r-layer>
      <slot />
    </div>
  </div>
</template>

<style>
.colored {
  background: linear-gradient(204.65deg, rgba(41, 55, 68, 0) 15.73%, #212D37 96.38%);
}
</style>
