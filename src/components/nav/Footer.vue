<template>
  <footer class="bg-black text-white flex flex-row py-8 px-6 items-center">
    <div class="md:ml-48">
      <g-image class="w-40" src="@/assets/image/logo/logo_white.svg" />
      <p class="mt-6">blygoldsc@gmail.com</p>
    </div>
    <Links class="ml-12 pb-4 md:self-end md:ml-32" />
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