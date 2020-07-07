<template>
  <nav class="flex flex-row flex-shrink-0 h-24 w-full" :class="{ absolute: isIndexPage }">
    <MobileMenu :active="menuButtonActive" @close="closeMenu" />
    <g-link
      class="logo w-48 flex items-center ml-2"
      v-show="!menuButtonActive && (!isMobile || (!isIndexPage && isMobile))"
      to="/"
    >
      <img v-show="!isIndexPage" src="@/assets/image/logo/logo_black.svg"/>
      <img v-show="isIndexPage" src="@/assets/image/logo/logo_white.svg"/>
    </g-link>
    <ul
      class="hidden md:flex flex-row my-auto flex-1 items-center ml-8"
      :class="{ 'text-white': isIndexPage }"
    >
      <li>
        <g-link to="/">HOME</g-link>
      </li>
      <li>
        <g-link to="/contact">CONTACT</g-link>
      </li>
    </ul>
    <button
      class="btn btn-secondary ml-auto mr-4 pt-button-fix my-auto md:hidden z-10"
      :class="{ 'text-white': isIndexPage || menuButtonActive }"
      @click="toggleMenu"
    >
      {{ menuButtonActive ? 'CLOSE MENU' : 'MENU' }}
    </button>
  </nav>
</template>

<script>
import MobileMenu from '@/components/nav/MobileMenu'

export default {
  name: 'Navbar',
  components: {
    MobileMenu,
  },
  data() {
    return {
      menuButtonActive: false,
      isMobile: window.outerWidth < 768,
    }
  },
  computed: {
    isIndexPage() {
      return this.$route.path === '/'
    },
  },
  methods: {
    toggleMenu() {
      this.menuButtonActive = !this.menuButtonActive
      this.toggleBodyOverflow()
    },
    toggleBodyOverflow() {
      // no ssr
      if (process.isClient) {
        window.scrollTo(0, 0)
        const el = document.body
        const className = 'overflow-hidden'
        this.menuButtonActive
          ? el.classList.add(className)
          : el.classList.remove(className)
      }
    },
    closeMenu() {
      this.menuButtonActive = false
      this.toggleBodyOverflow()
    },
    onResize() {
      this.isMobile = window.outerWidth < 768
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
}
</script>

<style lang="sass" scoped>
.logo
  transition: display 0.5s ease-in

ul > li
  @apply px-12

  & > a
    &::after
      content: ''
      height: 2px
      transition: width 0.2s
      transition-delay: 0.1s
      @apply w-0
      @apply mx-auto
      @apply block
      @apply bg-primary

    &.active--exact::after
      @apply w-full

    &:hover::after
      @apply w-1/2
</style>
