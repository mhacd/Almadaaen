<script setup lang="ts">
import union from '~/assets/union.svg'
</script>

<template>
  <div bg-white py-70px>
    <div class="2xl:max-w-1600px" mx-auto px-54px>
      <div flex py-40px>
        <div class="2xl:w-[30%] w-[35%] ">
          <WhoWeAreTypography />
        </div>
        <div flex-1>
          <div flex w-full justify-end class="2xl:gap-70px gap-12px">
            <div relative>
              <div absolute left="-56px" top="-56px">
                <img :src="union" alt="union svg">
              </div>
              <TheCard />
            </div>
            <div relative>
              <div absolute w-full flex fc top="-56px">
                <img :src="union" alt="union svg">
              </div>
              <TheCard />
            </div>
            <div relative>
              <div absolute right="-56px" top="-56px">
                <img :src="union" alt="union svg">
              </div>
              <TheCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
