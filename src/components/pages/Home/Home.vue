<template>
  <base-template :page-title="$t('home')">
    <div class="text-center">
      <span class="text-5xl">🚧</span>
      <p class="text-gray-700">{{ $t('workingInProgress') }}</p>
    </div>
  </base-template>
</template>

<script>
import BaseTemplate from '@/components/templates/BaseTemplate'
export default {
  name: 'page-home',
  components: {
    'base-template': BaseTemplate
  }
}
</script>

<style lang="scss" scoped></style>
