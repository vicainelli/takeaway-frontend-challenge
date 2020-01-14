<template>
  <base-template :page-title="$t('profile')">
    <div v-if="didProfileLoad">
      <section-card>
        <!-- <h2 class="uppercase tracking-wide text-sm text-gray-800">Personal Info</h2> -->
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

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('gender') }}</span> <br />
          <span>{{ getProfile.gender }}</span>
        </div>

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('emailAddress') }}</span> <br />
          <span>{{ getProfile.emailAddress }}</span>
        </div>

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('address') }}</span> <br />
          <span>{{ getProfile.address }}</span>
        </div>

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('birthday') }}</span> <br />
          <span><format-date-time :data="{ date: getProfile.birthday, format: 'MMM DD, YYYY' }"/></span>
        </div>

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('language') }}</span> <br />
          <span>{{ getProfile.language }}</span>
        </div>

        <div class="my-6">
          <span class="uppercase text-xs tracking-wide text-gray-800">{{ $t('currency') }}</span> <br />
          <span>{{ getProfile.currency }}</span>
        </div>
      </section-card>
    </div>
    <div v-else><pulse-loader /></div>
  </base-template>
</template>

<script>
import FormatDateTime from '@/components/atoms/FormatDateTime'
import SectionCard from '@/components/atoms/SectionCard'
import PulseLoader from '@/components/atoms/PulseLoader'
import BaseTemplate from '@/components/templates/BaseTemplate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'page-profile',
  components: {
    'section-card': SectionCard,
    'format-date-time': FormatDateTime,
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
