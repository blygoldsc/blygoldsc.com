<template>
  <Layout>
    <div class="hero text-white mt-12 px-6 md:mx-auto md:max-w-4xl md:mt-24">
      <img class="absolute top-0 left-0 h-screen w-screen object-cover object-left hero-image z-neg-1" src="@/assets/image/hero-image_flipped.png" />

      <g-image class="w-56 md:hidden" src="@/assets/image/logo/logo_white.svg" />
      <h1 class="mt-8 text-hero leading-tight font-semibold md:text-5xl md:max-w-2xl">Low-cost and efficient commercial HVAC component coating.</h1>
      <object class="float-right p-2 -mr-24 -mt-12 md:hidden">
        <svg height="135" width="135">
          <circle cx="75" cy="65" r="60" stroke="#ffba00" stroke-width="0" fill="#ffba00" />
        </svg>
      </object>
      <p class="mt-6 font-light border-b-2 border-dashed border-primary pb-6 md:text-xl md:max-w-2xl">
        Blygold is an innovative and forward-thinking company offering unique and sustainable high-quality protection against corrosion. With over 40 years experience, we have the know-how and state-of-the-art products and techniques to solve any corrosion problem. Our multitude of success stories says it all.
      </p>
    </div>
    <div class="mt-32 md:mt-64">
      <g-image class="ml-6" src="@/assets/image/hero-image_flipped.png" />
      <div class="ml-8 mt-6 flex flex-col px-4">
        <h3 class="bg-black text-white self-start px-2 text-3xl font-semibold">FULLY CERTIFIED</h3>
        <p class="mt-4">With more than 40 years of experience and know-how, Blygold is the market leader in high-end corrosion protection of HVAC equipment.</p>
      </div>
    </div>
    <div class="mt-24">
      <g-image class="-ml-6" src="@/assets/image/hero-image_flipped.png" />
      <div class="mr-8 mt-6 flex flex-col px-4">
        <h3 class="bg-black text-white self-end px-2 text-3xl font-semibold">EFFICIENT</h3>
        <p class="mt-4 text-right">With more than 40 years of experience and know-how, Blygold is the market leader in high-end corrosion protection of HVAC equipment.</p>
      </div>
    </div>
    <div class="text-white bg-black py-12 px-6 mt-16">
      <section>
        <header class="flex flex-row items-center">
          <g-image src="@/assets/image/clipart/check.svg" />
          <h3 class="text-hero font-semibold ml-6">PROJECTS</h3>
        </header>
        <p class="mt-6 ml-2">Blygold focuses on services and products that offer sustainable solutions for the problems that our clients are facing. Next to corrosion causing economical damage, it also affects health, safety and environmental issues.</p>
      </section>
      <section class="mt-12">
        <header class="flex flex-row items-center">
          <g-image class="ml-auto" src="@/assets/image/clipart/arcs.svg" />
          <h3 class="text-hero font-semibold ml-6 mr-2">SERVICES</h3>
        </header>
        <p class="mt-6 mr-2 text-right">Blygold focuses on services and products that offer sustainable solutions for the problems that our clients are facing. Next to corrosion causing economical damage, it also affects health, safety and environmental issues.</p>
      </section>
    </div>
    <div class="py-24 pl-8">
      <h2 class="text-4xl font-semibold">Contact us today.</h2>
      <p class="mt-4 text-2xl">blygoldsc@gmail.com</p>
      <p class="text-2xl">(843) 555-5555</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="sass" scoped>
.hero-image
  filter: brightness(25%)
</style>