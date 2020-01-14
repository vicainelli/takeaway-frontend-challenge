import { shallowMount } from '@vue/test-utils'
import SectionCard from './'

describe('SectionCard.vue', () => {
  const wrapper = shallowMount(SectionCard)

  it('has SectionCard component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
