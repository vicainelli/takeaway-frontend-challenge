<template>
  <router-link
    class="flex-1 text-center text-xs py-3  text-gray-900 lg:flex-none lg:block lg:text-left lg:text-sm lg:tracking-wide lg:mx-3 lg:px-3 rounded"
    exact-active-class="lg:bg-gray-400 font-semibold text-gray-900 lg:font-normal"
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
