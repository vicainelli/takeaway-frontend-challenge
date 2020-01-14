import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import Profile from './'
import BaseTemplate from '@/components/templates/BaseTemplate'

describe('Profile.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const wrapper = shallowMount(Profile, {
    store,
    localVue,
    mocks: {
      $t: () => {}
    }
  })

  it('has Profile page', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('content wrapped by BaseTemplate', () => {
    expect(wrapper.find(BaseTemplate).exists()).toBe(true)
  })
})
