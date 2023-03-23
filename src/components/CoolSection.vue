<script setup lang="ts">
import logo from '~/assets/logo-modn-white.svg'
import union from '~/assets/union-white.svg'
import icon1 from '~/assets/back-time-icon.svg'
import icon2 from '~/assets/ssr-icon.svg'
import icon3 from '~/assets/build-icon.svg'
import icon4 from '~/assets/home-icon.svg'
import img1 from '~/assets/img1.png'
import img2 from '~/assets/img2.png'
import img3 from '~/assets/img3.png'
import img4 from '~/assets/img4.png'
</script>

<template>
  <div bg-cool p-xl relative overflow-hidden>
    <div relative w-full py-1>
      <div absolute z-1 top-40px right--250px>
        <img w-500px :src="union" alt="union">
      </div>
    </div>
    <div relative z-2 class="2xl:max-w-1600px" mx-auto px-54px>
      <div>
        <div mb-18px>
          <img w-95px :src="logo" alt="logo">
        </div>
        <div mb-18px text-white text-22px underline>
          Apartments
        </div>
        <div text-white text-34px font-bold>
          Featured Listings
        </div>
      </div>
      <div flex py-110px>
        <div flex-1 ps-2xl>
          <HighlyDiversifiedTypography />
        </div>
        <div w="60%">
          <div flex flex-col>
            <div flex justify-end>
              <div mb-5 me-5>
                <TheImageCard :img="img1" text="Contracting and Services ">
                  <template #icon>
                    <img :src="icon1" alt="">
                  </template>
                </TheImageCard>
              </div>
              <div mb-5 me-5>
                <TheImageCard :img="img2" text="Telecommunication">
                  <template #icon>
                    <img :src="icon2" alt="">
                  </template>
                </TheImageCard>
              </div>
            </div>
            <div flex justify-end>
              <div mb-5 me-5>
                <TheImageCard :img="img3" text="Facility Management">
                  <template #icon>
                    <img :src="icon3" alt="">
                  </template>
                </TheImageCard>
              </div>
              <div mb-5 me-5>
                <TheImageCard :img="img4" text="Industries and Real Estate">
                  <template #icon>
                    <img :src="icon4" alt="">
                  </template>
                </TheImageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
