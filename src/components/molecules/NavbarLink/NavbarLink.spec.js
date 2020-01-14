import { shallowMount } from '@vue/test-utils'
import NavbarLink from './'

describe('NavbarLink.vue', () => {
  const wrapper = shallowMount(NavbarLink, {
    stubs: ['router-link'],
    mocks: {
      $t: () => {}
    }
  })

  it('has NavbarLink component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
