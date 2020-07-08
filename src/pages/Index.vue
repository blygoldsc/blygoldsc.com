<template>
  <Layout>
    <main>
      <div class="hero text-white h-screen w-screen px-6 flex flex-col justify-center md:mx-auto md:px-16 md:max-w-5xl">
        <img class="absolute top-0 left-0 h-screen w-screen object-cover object-left hero-image z-neg-1" src="@/assets/image/hero-image_flipped.png" />

        <g-image class="w-56 mt-12 md:mt-0 md:hidden" src="@/assets/image/logo/logo_white.svg" />
        <div>
          <h1 class="mt-8 text-hero leading-tight font-semibold md:mt-24 lg:mt-0 md:text-4xl lg:text-5xl md:max-w-2xl">Low-cost and efficient commercial HVAC component coating.</h1>
          <object class="float-right p-2 -mr-24 -mt-12 md:hidden">
            <svg height="135" width="135">
              <circle cx="75" cy="65" r="60" stroke="#ffba00" stroke-width="0" fill="#ffba00" />
            </svg>
          </object>
          <p class="mt-6 font-light pb-6 md:text-xl md:max-w-2xl animated-dashed-border">
            Blygold is an innovative and forward-thinking company offering unique and sustainable high-quality protection against corrosion. With over 40 years experience, we have the know-how and state-of-the-art products and techniques to solve any corrosion problem. Our multitude of success stories says it all.
          </p>
        </div>
      </div>
      <div class="mt-24 ml-auto max-w-lg md:max-w-4xl md:mx-auto md:flex justify-center items-center">
        <img class="w-40r p-16 hidden md:block dots scroll-animated" src="@/assets/image/clipart/dots-primary.svg" />
        <div class="md:p-16">
          <g-image class="ml-6" src="@/assets/image/hero-image_flipped.png" />
          <div class="ml-8 mt-6 flex flex-col px-4 md:ml-2">
            <h3 class="text-black self-start px-2 text-3xl font-semibold scroll-animated animated-header">FULLY CERTIFIED</h3>
            <p class="mt-4">With more than 40 years of experience and know-how, Blygold is the market leader in high-end corrosion protection of HVAC equipment.</p>
          </div>
        </div>
      </div>
      <div class="mt-24 max-w-lg md:max-w-4xl md:mx-auto md:flex justify-center items-center">
        <div class="md:p-16">
          <g-image class="-ml-6" src="@/assets/image/hero-image_flipped.png" />
          <div class="mr-8 mt-6 flex flex-col px-4 md:mr-2">
            <h3 class="text-black self-end px-2 text-3xl font-semibold scroll-animated animated-header">EFFICIENT</h3>
            <p class="mt-4 text-right">With more than 40 years of experience and know-how, Blygold is the market leader in high-end corrosion protection of HVAC equipment.</p>
          </div>
        </div>
        <img class="w-40r p-16 hidden md:block dots scroll-animated" src="@/assets/image/clipart/dots.svg" />
      </div>
      <div class="text-white bg-black py-12 px-6 mt-16 md:mt-32 md:max-w-xl md:p-20 md:mx-auto description-box scroll-animated">
        <section>
          <header class="flex flex-row items-center">
            <img src="@/assets/image/clipart/check.svg" />
            <h3 class="text-hero font-semibold ml-6">PROJECTS</h3>
          </header>
          <p class="mt-6 ml-2">Blygold focuses on services and products that offer sustainable solutions for the problems that our clients are facing. Next to corrosion causing economical damage, it also affects health, safety and environmental issues.</p>
        </section>
        <section class="mt-16 md:mt-24">
          <header class="flex flex-row items-center">
            <img class="ml-auto" src="@/assets/image/clipart/arcs.svg" />
            <h3 class="text-hero font-semibold ml-6 mr-2">SERVICES</h3>
          </header>
          <p class="mt-6 mr-2 text-right">Blygold focuses on services and products that offer sustainable solutions for the problems that our clients are facing. Next to corrosion causing economical damage, it also affects health, safety and environmental issues.</p>
        </section>
      </div>
      <div class="py-32 pl-8 flex md:pl-0 md:my-24">
        <div class="md:mx-auto">
          <h2 class="text-4xl font-semibold scroll-animated contact-header">Contact us today.</h2>
          <p class="mt-4 text-2xl">blygoldsc@gmail.com</p>
          <p class="text-2xl">(843) 555-5555</p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  mounted() {
    const SELECTOR = '.scroll-animated'
    const ANIMATE_CLASS_NAME = 'active'
  
    const animate = element => {
      element.classList.add(ANIMATE_CLASS_NAME)
    };

    const removeAnimation = element => {
      element.classList.remove(ANIMATE_CLASS_NAME)
    }

    const isAnimated = element => (
      element.classList.contains(ANIMATE_CLASS_NAME)
    );

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        
        // when element's is in viewport,
        // animate it!
        if (entry.intersectionRatio > 0) {
          animate(entry.target);
        }

        if (entry.intersectionRatio === 0) {
          removeAnimation(entry.target);
        }
      });
    });

    // get only these elements,
    // which are not animated yet
    const elements = [].filter.call(
      document.querySelectorAll(SELECTOR),
      element => !isAnimated(element, ANIMATE_CLASS_NAME),
    );

    // start observing your elements
    elements.forEach((element) => intersectionObserver.observe(element));
  }
}
</script>

<style lang="sass" scoped>
.hero-image
  filter: brightness(25%)

.animated-dashed-border
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, transparent 50%), linear-gradient(90deg, #ffba00 50%, transparent 50%)
  background-repeat: repeat-x, repeat-x
  background-size: 15px 2px, 15px 2px
  background-position: left top, right bottom
  animation: border-dance 1s infinite linear

@keyframes border-dance
  0%
    background-position: left top, right bottom
  100%
    background-position: left 15px top, right 15px bottom

.dots
  transition: transform 400ms ease
  transition-delay: 175ms

  &.active
    transform: scale(1.2)

.animated-header
  position: relative
  -webkit-transform: translateZ(0)
  transform: translateZ(0)
  -webkit-transition: color 100ms
  transition: color 100ms
  &:before
    content: ""
    position: absolute
    z-index: -1
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    -webkit-transform: scaleX(0)
    transform: scaleX(0)
    -webkit-transform-origin: 100% 50%
    transform-origin: 100% 50%
    -webkit-transition-property: transform
    transition-property: transform
    -webkit-transition: 200ms ease-out
    transition: 200ms ease-out
  &.active:before
    -webkit-transform: scaleX(1)
    transform: scaleX(1)
  &.active
    color: #fff

.contact-header
  &::after
    content: ''
    height: 3px
    transition: width 400ms ease-out
    transition-delay: 250ms
    @apply w-0
    @apply mr-auto
    @apply block
    @apply bg-black

  &.active::after
    @apply w-full

@screen md
  .description-box
    transition: box-shadow 800ms ease-out
    transition-delay: 400ms
    box-shadow: 0px

    &.active
      box-shadow: 20px 20px 0px #aaa
</style>