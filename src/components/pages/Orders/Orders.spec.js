import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import Orders from './'
import BaseTemplate from '@/components/templates/BaseTemplate'

describe('Orders.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const wrapper = shallowMount(Orders, {
    store,
    localVue,
    mocks: {
      $t: () => {}
    }
  })

  it('has Orders page', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('content wrapped by BaseTemplate', () => {
    expect(wrapper.find(BaseTemplate).exists()).toBe(true)
  })
})
