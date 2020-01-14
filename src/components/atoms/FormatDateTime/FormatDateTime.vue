<template>
  <span>
    {{ moment(data.date).format(data.format) }}
  </span>
</template>

<script>
import moment from 'moment'
export default {
  name: 'format-date-time',
  data() {
    return {
      moment
    }
  },
  props: {
    data: {
      type: Object,
      default: undefined
    }
  }
}
</script>
