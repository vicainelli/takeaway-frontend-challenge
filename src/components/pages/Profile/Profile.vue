<template>
  <base-template :page-title="$t('profile')">
    <div v-if="didProfileLoad">
      <section-card>
        <div class="flex items-center">
          <div class="mr-3">
            <img
              class="rounded-full bg-gray-200"
              :src="getProfile.picture.thumbnail"
              :alt="`${getProfile.firstName} ${getProfile.lastName}`"
            />
          </div>
          <div class="flex-1">
            <span class="text-lg font-semibold text-gray-900"
              >{{ getProfile.firstName }} {{ getProfile.lastName }}</span
            >
          </div>
        </div>

        <div class="my-6">gender: {{ getProfile.gender }}</div>

        <div class="my-6">emailAddress: {{ getProfile.emailAddress }}</div>

        <div class="my-6">address: {{ getProfile.address }}</div>

        <div class="my-6">birthday: {{ getProfile.birthday }}</div>
      </section-card>
      <section-card>
        <h2 class="uppercase tracking-wide text-sm text-gray-800">App Settings</h2>

        <div class="my-6">language: {{ getProfile.language }}</div>

        <div class="my-6">currency: {{ getProfile.currency }}</div>
      </section-card>
    </div>
    <div v-else><pulse-loader /></div>
  </base-template>
</template>

<script>
import SectionCard from '@/components/atoms/SectionCard'
import PulseLoader from '@/components/atoms/PulseLoader'
import BaseTemplate from '@/components/templates/BaseTemplate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'page-profile',
  components: {
    'section-card': SectionCard,
    'base-template': BaseTemplate,
    'pulse-loader': PulseLoader
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getProfile', 'didProfileLoad'])
  },
  created() {
    this.fetchProfile()
  },
  methods: {
    ...mapActions(['fetchProfile'])
  }
}
</script>
