<script setup lang="ts">
import logo from '~/assets/logo-modn-white.svg'
</script>

<template>
  <div bg-cool p-xl>
    <div class="2xl:max-w-1600px" mx-auto px-54px>
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
                <TheImageCard />
              </div>
              <div mb-5 me-5>
                <TheImageCard />
              </div>
            </div>
            <div flex justify-end>
              <div mb-5 me-5>
                <TheImageCard />
              </div>
              <div mb-5 me-5>
                <TheImageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
