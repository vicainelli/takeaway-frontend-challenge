import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import OrderShow from './'
import BaseTemplate from '@/components/templates/BaseTemplate'

describe('OrderShow.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const wrapper = shallowMount(OrderShow, {
    store,
    localVue,
    mocks: {
      $t: () => {}
    }
  })

  it('has OrderShow page', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('content wrapped by BaseTemplate', () => {
    expect(wrapper.find(BaseTemplate).exists()).toBe(true)
  })
})
