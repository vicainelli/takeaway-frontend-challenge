import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import BaseTemplate from './'
import NavigationBar from '@/components/organisms/NavigationBar'

describe('BaseTemplate.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const wrapper = shallowMount(BaseTemplate, {
    store,
    localVue,
    mocks: {
      $t: () => {}
    }
  })

  it('has BaseTemplate component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has NavigationBar component', () => {
    expect(wrapper.find(NavigationBar).exists()).toBe(true)
  })
})
