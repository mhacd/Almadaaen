<template>
  <HeroLayout />
  <div bg-white>
    <div max-w-1400px mx-auto px-lg>
      <div flex py-40px>
        <div w="30%">
          <WhoWeAreTypography />
        </div>
        <div flex-1>
          <div flex fb w-full gap-30px>
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
