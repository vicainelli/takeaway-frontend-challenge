import { shallowMount } from '@vue/test-utils'
import CardOrder from './'

describe('CardOrder.vue', () => {
  const wrapper = shallowMount(CardOrder, {
    stubs: ['router-link']
  })

  it('has CardOrder component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
