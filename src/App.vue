<template>
  <div class="border-t-4 border-takeaway-500" id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.fetchActiveOrder()
  },
  methods: {
    ...mapActions(['fetchActiveOrder'])
  }
}
</script>
