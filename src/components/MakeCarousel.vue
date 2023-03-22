<script setup lang="ts">
import { change, idx, list } from '~/state/state'
onMounted(() => {
  const els: HTMLImageElement[] = []
  list.value.forEach((url) => {
    const img = new Image()
    els.push(img)
    img.src = url
  })

  // eslint-disable-next-line no-console
  console.log(els)
  setInterval(() => {
    change()
  }, 3000)
})
</script>

<template>
  <div full layers>
    <div a-layer>
      <img :key="list[idx]" r-layer object-cover :src="list[idx]">
    </div>
    <div a-layer>
      <Transition name="fade" mode="out-in">
        <img :key="list[idx]" r-layer object-cover :src="list[idx]">
      </Transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
