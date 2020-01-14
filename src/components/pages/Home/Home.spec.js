import { shallowMount } from '@vue/test-utils'
import Home from './'
import BaseTemplate from '@/components/templates/BaseTemplate'

describe('Home.vue', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $t: () => {}
    }
  })

  it('has Home page', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('content wrapped by BaseTemplate', () => {
    expect(wrapper.find(BaseTemplate).exists()).toBe(true)
  })
})
