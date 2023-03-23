<script setup lang="ts">
import union from '~/assets/union.svg'
import MissionIcon from '~/assets/planet-icon.svg'
import ValuesIcon from '~/assets/ec-icon.svg'
</script>

<template>
  <div layers>
    <div r-layer-content>
      <div bg-white py-70px overflow-hidden>
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
                  <TheCard title="Vision" text="Based on the strong principles of our Founders, we aim to be a leading diversified group operating world-wide" />
                </div>
                <div relative>
                  <div absolute w-full flex fc top="-56px">
                    <img :src="union" alt="union svg">
                  </div>
                  <TheCard title="Mission" text="Our mission is to deliver quality, innovative, price sensitive products, services, and investment opportunities">
                    <template #icon>
                      <img :src="MissionIcon" alt="">
                    </template>
                  </TheCard>
                </div>
                <div relative>
                  <div absolute right="-56px" top="-56px">
                    <img :src="union" alt="union svg">
                  </div>
                  <TheCard title="Values" text="Dedicated to providing high quality products. Continually striving for the best, through innovation">
                    <template #icon>
                      <img my-2 :src="ValuesIcon" alt="">
                    </template>
                  </TheCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div a-layer>
      <div full flex>
        <div flex w-full justify-end px-2xl>
          <div flex flex-col>
            <div>
              <div w-36px flex fc mb-10px>
                <div w-1px bg-cool relative h-45px />
              </div>
            </div>
            <div>
              <div rounded-full border="1 cool" w-36px h-36px flex fcc>
                <span text="cool xl " font-bold>2</span>
              </div>
              <div w-36px flex fc mt-10px>
                <div w-1px bg-cool h-150px />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
