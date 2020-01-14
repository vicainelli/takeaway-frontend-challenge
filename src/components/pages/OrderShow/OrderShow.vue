<template>
  <base-template :page-title="$t('orderDetail')" :back-button="{ pathTo: 'orders' }">
    <div v-if="didOrderLoad">
      <SectionCard>
        <h2 class="font-bold text-gray-900 text-base mb-6">{{ getOrder.restaurantName }}</h2>
        <p class="text-sm text-gray-800">
          {{ $t('orderedOn') }} <format-date-time :data="{ date: getOrder.orderTime, format: 'lll' }" />
        </p>
        <div class="my-6">
          <div class="text-sm text-gray-800 mb-2">{{ getOrder.status.currentStatus }}</div>
          <div
            class="flex justify-between text-sm text-gray-800 mb-2"
            v-for="(step, index) in getOrder.status.history"
            :key="index"
          >
            <div class="flex-1">{{ step.status }}</div>
            <div><format-date-time :data="{ date: step.statusEnd, format: 'LT' }" /></div>
          </div>
        </div>

        <h3 class="font-bold text-sm text-gray-900 mb-2">{{ $t('order') }} {{ getOrder.orderReference }}</h3>
        <div class="mb-6">
          <div
            class="flex justify-between text-sm text-gray-800 mb-2"
            v-for="(product, index) in getOrder.products"
            :key="index"
          >
            <div class="mr-2">{{ product.amount }}</div>
            <div class="flex-1">{{ product.productName }}</div>
            <div>{{ product.pricePerUnitWithTax }}</div>
          </div>
          <div class="flex justify-between text-sm text-gray-800 mb-2">
            <div class="capitalize">{{ $t('deliveryFee') }}</div>
            <div>{{ getOrder.deliveryCosts }}</div>
          </div>
          <div class="flex justify-between text-sm text-gray-900 font-bold mb-2">
            <div class="capitalize">{{ $t('total') }}</div>
            <div>{{ getOrder.orderTotal }}</div>
          </div>
        </div>

        <div class="flex justify-between text-sm text-gray-800 mb-6">
          <div class="capitalize">{{ $t('paymentMethod') }}</div>
          <div>{{ getOrder.paymentMethod }}</div>
        </div>

        <div>
          <h4 class="uppercase text-xs text-gray-800 tracking-wide">{{ $t('deliveryAddress') }}</h4>
          <address class="text-gray-800 not-italic text-sm">{{ getOrder.deliveryAddress }}</address>
        </div>
      </SectionCard>
    </div>
    <div v-else>
      <pulse-loader />
    </div>
  </base-template>
</template>

<script>
import moment from 'moment'
import FormatDateTime from '@/components/atoms/FormatDateTime'
import SectionCard from '@/components/atoms/SectionCard'
import PulseLoader from '@/components/atoms/PulseLoader'
import BaseTemplate from '@/components/templates/BaseTemplate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'page-order-show',
  components: {
    'base-template': BaseTemplate,
    SectionCard: SectionCard,
    'format-date-time': FormatDateTime,
    'pulse-loader': PulseLoader
  },
  data() {
    return {
      moment
    }
  },
  computed: {
    ...mapGetters(['getOrder', 'didOrderLoad'])
  },
  created() {
    this.fetchOrder()
  },
  methods: {
    ...mapActions(['fetchOrder'])
  }
}
</script>

<style lang="scss" scoped></style>
