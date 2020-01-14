import { shallowMount } from '@vue/test-utils'
import PulseLoader from './'

describe('PulseLoader.vue', () => {
  const wrapper = shallowMount(PulseLoader)

  it('has PulseLoader component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
