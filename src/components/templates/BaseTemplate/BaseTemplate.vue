<template>
  <div class="lg:flex lg:relative">
    <div
      class="bottom-0 z-20 lg:z-10 fixed w-full bg-white lg:bg-gray-200 lg:bottom-auto lg:max-w-xs lg:h-screen lg:sticky lg:top-0"
    >
      <navigation-bar />
    </div>
    <!-- Main content -->
    <div class="lg:flex-1">
      <div class="px-4 py-6 mb-6 border-b bg-white ">
        <h1 class="text-center lg:text-left uppercase tracking-wide">{{ pageTitle }}</h1>
      </div>
      <div class="px-4 pb-12">
        <slot />
      </div>
    </div>

  </div>
</template>

<script>
import NavigationBar from '@/components/organisms/NavigationBar'
export default {
  name: 'base-template',
  components: {
    'navigation-bar': NavigationBar
  },
  props: {
    pageTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
