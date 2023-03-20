<script setup lang="ts">
import bg from '~/assets/city.png'
</script>

<template>
  <div layers w-326px h-227px rounded-20px>
    <div a-layer>
      <img full rounded-20px object-cover :src="bg" alt="random">
    </div>
    <div r-layer>
      <div full flex flex-col fb>
        <div px-20px py-15px>
          <div w-60px h-60px flex fcc rounded-full :style="{ 'backdrop-filter': 'blur(10px)' }">
            <div color-white text-xl i-carbon-moon />
          </div>
        </div>
        <div px-20px py-15px rounded-b-20px text-22px text-white :style="{ 'backdrop-filter': 'blur(6px)' }">
          Telecommunication
        </div>
      </div>
    </div>
  </div>
</template>
