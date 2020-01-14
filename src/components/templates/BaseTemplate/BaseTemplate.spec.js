import { shallowMount } from '@vue/test-utils'
import BaseTemplate from './'
import NavigationBar from '@/components/organisms/NavigationBar'

describe('BaseTemplate.vue', () => {
  const wrapper = shallowMount(BaseTemplate, {
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
