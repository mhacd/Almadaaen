<script setup lang="ts">
import { change, inc, red } from '~/state/state'
import arLeft from '~/assets/arrow-left.svg'
import arRight from '~/assets/arrow-right.svg'
import arDown from '~/assets/arrow-down-light.svg'
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
          <div full :style="{ 'backdrop-filter': 'blur(6px)' }" bg="#ffffff33" />
        </div>
      </div>
    </div>
    <div a-layer pt-79px>
      <div full flex flex-col>
        <div pt-110px class="2xl:pt-190px" />
        <div class="2xl:max-w-1600px " w-full mx-auto px-54px>
          <div w-full pe-120px>
            <div w-full flex items-end>
              <div flex-1>
                <div>
                  <button data-aos="fade-right" transition-delay-3400 data-aos-duration="1000" bg="#fff6" px-3 py-2 backdrop-blur-sm rounded-full text-white hover:shadow>
                    Building award winning properties across London
                  </button>
                </div>
                <div data-aos="fade-down" transition-delay-3300 data-aos-duration="1000">
                  <div text-white font-bold class="xl:text-60px 2xl:text-80px" text-100px v-html="'Let’s find <br>yours Dream..'" />
                </div>
              </div>
              <div flex-1 flex justify-end>
                <div mb-10px data-aos="fade" transition-delay-3800 data-aos-duration="3000">
                  <img :src="visionLogoDark" select-none>
                </div>
              </div>
            </div>
            <div data-aos="flip-right" mt-4 w-full bg-gradient="to-r from-white to-black" py-2px />
            <div w-full flex mt-7>
              <div flex-1>
                <div text-white>
                  Building award winning properties across London
                </div>
              </div>
              <div flex-1 flex justify-end>
                <div max-w-400px text-end text="#222" data-aos="fade-up" transition-delay-3600 data-aos-duration="1000">
                  Whether you are a client, a partner, a career seeker, or an interested reader we would like to take this opportunity to welcome you to our website. We trust that it will tell you everything you need to
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div a-layer pt-79px in-vis>
      <div full flex items-end>
        <div flex w-full fb items-end px-2xl>
          <div relative vis cursor-pointer select-none @click="inc()">
            <div absolute full flex fcc text="white 12px" pb-25px>
              <span translate-x-54px>PREVIOUS</span>
            </div>
            <div mb-25px inline-flex fcc rounded-full border-2 border-white w-36px h-36px>
              <img w-14px :src="arLeft" alt="">
            </div>
          </div>
          <div mb-25px vis inline-flex fcc rounded-full border-1 border-white w-40px h-40px>
            <img class="arr-down" w-20px translate-y--10px :src="arDown" alt="">
          </div>
          <div flex flex-col items-end>
            <div>
              <div rounded-full border="1 white" w-36px h-36px flex fc mb-30px>
                <span text="white xl " font-bold translate-y-4px translate-x-3px>1</span>
              </div>
              <div w-36px flex fc mb-70px>
                <div w-3px bg-white relative h-150px op-86 rounded-full>
                  <div absolute w-1px bg-white relative h-200px left-1px rounded-full op-100 />
                </div>
              </div>
            </div>
            <div relative cursor-pointer vis select-none @click="red()">
              <div absolute full flex fcc text="white 12px" mx-3>
                <span translate-x--54px>Next</span>
              </div>
              <div inline-flex fcc rounded-full border-2 border-white w-36px h-36px>
                <img w-14px :src="arRight" alt="">
              </div>
            </div>
            <div>
              <div w-36px flex fc>
                <div w-1px bg-white relative h-25px />
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

.arr-down {
  animation-name: arr-down;
   animation-delay: 3s;
  animation-duration: 1.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
@keyframes arr-down {
  0% {
    transform:translateY(-12px)
  }
  30% {
    transform:translateY(-5px)
  }

  100% {
    transform:translateY(-12px)
  }

}
</style>
