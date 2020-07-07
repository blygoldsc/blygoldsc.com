<template>
  <footer class="bg-black text-white py-8 px-6 items-center w-full">
    <div class="mx-auto md:flex flex-row items-center justify-center md:min-w-32">
      <g-image class="w-40 md:mx-16" src="@/assets/image/logo/logo_white.svg" />
      <Links class="mt-8 md:my-0 md:mx-16" />
      <p class="mt-4 md:my-0 md:mx-16">blygoldsc@gmail.com</p>
    </div>
    <p class="mt-6 text-center text-xs text-gray-400">Copyright 2020 Custom HVAC Coatings</p>
  </footer>
</template>

<script>
import Links from '@/components/Links'

export default {
  components: {
    Links
  }
}
</script>