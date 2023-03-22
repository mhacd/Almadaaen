<script setup lang="ts">
import { change } from '~/state/state'
// import heroBg from '~/assets/hero-bg.png'
import visionLogoDark from '~/assets/vision-dark.svg'
</script>

<template>
  <div h-screen layers @dblclick="change()">
    <div a-layer pt-79px>
      <!-- <img r-layer object-cover :src="heroBg"> -->
      <MakeCarousel />
      <div a-layer class="colored" />
    </div>
    <div r-layer pt-79px>
      <div full flex>
        <div w="50%" />
        <div w="50%">
          <div full :style="{ 'backdrop-filter': 'blur(6px)' }" bg="#ffffff11" />
        </div>
      </div>
    </div>
    <div a-layer pt-79px>
      <div full flex flex-col>
        <div pt-110px />
        <div class="2xl:max-w-1600px " w-full mx-auto px-54px>
          <div w-full pe-120px>
            <div w-full flex items-end>
              <div flex-1>
                <div>
                  <button bg="#fff6" px-3 py-2 backdrop-blur-sm rounded-full text-white hover:shadow>
                    Building award winning properties across London
                  </button>
                </div>
                <div text-white font-bold class="xl:text-60px 2xl:text-80px" text-100px v-html="'Let’s find <br>yours Dream..'" />
              </div>
              <div flex-1 flex justify-end>
                <div mb-10px>
                  <img :src="visionLogoDark" select-none>
                </div>
              </div>
            </div>
            <div mt-4 w-full bg-gradient="to-r from-white to-black" py-2px />
            <div w-full flex mt-7>
              <div flex-1>
                <div text-white>
                  Building award winning properties across London
                </div>
              </div>
              <div flex-1 flex justify-end>
                <div max-w-400px text-end>
                  Whether you are a client, a partner, a career seeker, or an interested reader we would like to take this opportunity to welcome you to our website. We trust that it will tell you everything you need to
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.colored {
  background: linear-gradient(204.65deg, rgba(41, 55, 68, 0) 15.73%, #212D37 96.38%);
}
</style>
