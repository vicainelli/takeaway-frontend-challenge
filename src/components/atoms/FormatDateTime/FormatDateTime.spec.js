import { shallowMount } from '@vue/test-utils'
import FormatDateTime from './'

const data = {
  date: new Date().getTime(),
  format: 'LLL'
}

describe('FormatDateTime.vue', () => {
  const wrapper = shallowMount(FormatDateTime, {
    propsData: {
      data
    }
  })

  it('has FormatDateTime component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
