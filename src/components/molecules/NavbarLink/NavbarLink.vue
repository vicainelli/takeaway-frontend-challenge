<template>
  <router-link
    class="flex-1 text-center text-xs py-3 lg:flex-none lg:block lg:text-left lg:text-base"
    :to="{ name: pathTo }"
  >
    <div class="">
      <div><slot></slot></div>
      <div>
        <span class="">{{ label }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'navbar-link',
  props: {
    label: {
      type: String,
      default: undefined
    },
    pathTo: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
