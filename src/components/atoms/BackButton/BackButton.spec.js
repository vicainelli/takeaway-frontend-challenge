import { shallowMount } from '@vue/test-utils'
import BackButton from './'

const pathTo = 'orders'

describe('BackButton.vue', () => {
  const wrapper = shallowMount(BackButton, {
    stubs: ['router-link'],
    propsData: {
      pathTo
    }
  })

  it('has BackButton component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
