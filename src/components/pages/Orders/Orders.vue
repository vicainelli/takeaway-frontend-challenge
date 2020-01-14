<template>
  <base-template :page-title="$t('orders')">
    <div v-if="didOrdersLoad">
      <div>
        <button @click="setActiveOrder">Set Order</button>
      </div>
      <div v-for="(value, key) in allOrders" :key="key">
        <card-order
          :orderReference="key"
          :orderTime="value.orderTime"
          :restaurantName="value.restaurantName"
          :orderTotal="value.orderTotal"
          :deliveryAddress="value.deliveryAddress"
          :status="value.status"
        ></card-order>
      </div>
    </div>
    <div v-else><pulse-loader /></div>
  </base-template>
</template>

<script>
import PulseLoader from '@/components/atoms/PulseLoader'
import CardOrder from '@/components/molecules/CardOrder'
import BaseTemplate from '@/components/templates/BaseTemplate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'page-orders',
  components: {
    'base-template': BaseTemplate,
    'pulse-loader': PulseLoader,
    'card-order': CardOrder
  },
  computed: {
    ...mapGetters(['allOrders', 'didOrdersLoad'])
  },
  created() {
    this.fetchOrders()
  },
  methods: {
    ...mapActions(['fetchOrders', 'setActiveOrder'])
  }
}
</script>
