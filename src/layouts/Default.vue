<template>
  <div class="layout overflow-x-hidden flex flex-col min-h-screen">
    <Navbar class="pt-4 px-3 md:px-12 lg:pl-32" />
    <div class="flex flex-grow justify-center">
      <transition name="fade" appear>
        <slot />
      </transition>
    </div>
    <Footer class="flex-0" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/nav/Footer'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="sass">
body
  @apply font-sans

.fade-enter-active
  transition: opacity 0.4s

.fade-enter
  opacity: 0
</style>
