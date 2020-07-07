<template>
  <transition name="slide-fade">
    <div
      v-if="active"
      class="absolute bg-black text-white left-0 top-0 w-screen h-screen flex flex-col px-6 z-10 pt-24 menu"
    >
      <Links class="flex-1 nav-links mt-8" @click="$emit('close')" />
      <div class="mx-auto">
        <g-image class="w-48 mx-auto" src="@/assets/image/logo/logo_white.svg" />
        <p class="text-sm text-gray-400 my-6">Copyright 2020 Custom HVAC Coatings</p>
      </div>
    </div>
  </transition>
</template>

<script>
import Links from '@/components/Links'

export default {
  name: 'NavMenu',
  props: {
    active: Boolean,
  },
  components: {
    Links,
  },
  beforeDestroy() {
    // component is unmounted on route change
    this.$emit('close')
  },
}
</script>

<style lang="sass" scoped>
/* fill rest of screen height */
// .menu
//   height: calc(100vh - 6em)

.slide-fade-enter-active
  transition: all 0.3s ease

.slide-fade-leave-active
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1)

.slide-fade-enter,
.slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

::v-deep .nav-links > a
  @apply bg-white text-black self-end text-6xl font-semibold mt-4 px-3 py-2 leading-none
</style>
