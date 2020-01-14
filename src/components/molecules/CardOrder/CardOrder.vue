<template>
  <div class="tracking-wide">
    <div class="text-xs font-semibold">
      <format-date-time :data="{ date: orderTime, format: 'ddd, MMM D, YYYY' }" />
    </div>
    <div class="px-4 shadow-md mt-1 mb-6 bg-white pt-4 rounded">
      <div>
        <h2 class="text-sm font-semibold text-gray-800">{{ restaurantName }}</h2>
      </div>
      <div class="text-sm my-4">{{ status }} {{ orderReference }}</div>
      <div class="text-sm my-4">Total: {{ orderTotal }}</div>
      <div class="text-center text-xs border-t border-gray-300">
        <router-link
          class="w-full block p-4 text-takeaway-500"
          :to="{ name: 'orderShow', params: { id: orderReference } }"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import FormatDateTime from '@/components/atoms/FormatDateTime'
export default {
  name: 'card-order',
  components: {
    'format-date-time': FormatDateTime
  },
  props: {
    orderReference: {
      type: String,
      default: null
    },
    orderTime: {
      type: String,
      default: null
    },
    restaurantName: {
      type: String,
      default: null
    },
    orderTotal: {
      type: String,
      default: null
    },
    deliveryAddress: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
