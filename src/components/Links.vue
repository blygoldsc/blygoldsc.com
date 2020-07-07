<template>
  <nav class="flex flex-col">
    <g-link class="nav-item" to="/" @click="$emit('click')">HOME</g-link>
    <g-link class="nav-item" to="/contact" @click="$emit('click')">CONTACT</g-link>
  </nav>
</template>

<script>
export default {
  name: 'NavItems',
}
</script>
