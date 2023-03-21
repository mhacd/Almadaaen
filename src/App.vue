<template>
  <HeroLayout />
  <div bg-white py-70px>
    <div class="2xl:max-w-1600px" mx-auto px-54px>
      <div flex py-40px>
        <div class="2xl:w-[30%] w-[35%] ">
          <WhoWeAreTypography />
        </div>
        <div flex-1>
          <div flex w-full justify-end class="2xl:gap-70px gap-12px">
            <TheCard />
            <TheCard />
            <TheCard />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div bg-cool p-xl>
    <HighlyDiversifiedTypography />
  </div>
  <div bg-white p-xl>
    <TheCard />
  </div>
  <div bg-white p-xl>
    <TheImageCard />
  </div>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <TheFooter />
  </main>
</template>
