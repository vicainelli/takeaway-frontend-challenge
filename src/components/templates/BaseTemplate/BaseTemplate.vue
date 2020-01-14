<template>
  <div class="lg:flex lg:relative">
    <div
      class="bottom-0 z-20 lg:z-10 fixed w-full bg-white lg:bg-gray-200 lg:bottom-auto lg:max-w-xs lg:h-screen lg:sticky lg:top-0"
    >
      <navigation-bar />
    </div>
    <!-- Main content -->
    <div class="lg:flex-1">
      <div class="px-4 py-6 mb-6 border-b bg-white relative ">
        <div v-if="backButton" class="absolute w-3 lg:hidden">
          <back-button class="text-gray-600" :path-to="backButton.pathTo"></back-button>
        </div>
        <div class="w-full">
          <h1 class="text-center lg:text-left uppercase tracking-wide">{{ pageTitle }}</h1>
        </div>
      </div>
      <div class="px-4" :class="[getActiveOrder ? 'pb-28' : 'pb-12']">
        <slot />
      </div>
    </div>

    <!-- Active Order -->
    <div v-if="getActiveOrder" class="fixed z-10 lg:z-20 bottom-0 left-0 right-0 w-full">
      <div to="" class="mb-12 lg:mb-4 shadow  mx-2 rounded  bg-white border-t-2 border-takeaway-400">
        <router-link
          class="border p-4 block"
          :to="{ name: 'orderShow', params: { id: Object.keys(getActiveOrder)[0] } }"
        >
          <span class="text-xs uppercase tracking-wide mr-3">Active Order</span>

          <span class="font-mono tracking-wide text-gray-800 text-xs">{{ Object.keys(getActiveOrder)[0] }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/atoms/BackButton'
import NavigationBar from '@/components/organisms/NavigationBar'
import { mapGetters } from 'vuex'
export default {
  name: 'base-template',
  components: {
    'navigation-bar': NavigationBar,
    'back-button': BackButton
  },
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    backButton: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters(['getActiveOrder'])
  }
}
</script>
