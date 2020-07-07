<template>
  <div class="layout overflow-x-hidden flex flex-col min-h-screen">
    <Navbar class="mt-4 px-3" />
    <div class="flex-1">
      <!-- <transition name="fade"> -->
        <slot />
      <!-- </transition> -->
    </div>
    <Footer />
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
  transition: opacity 0.5s

.fade-enter
  opacity: 0
</style>
