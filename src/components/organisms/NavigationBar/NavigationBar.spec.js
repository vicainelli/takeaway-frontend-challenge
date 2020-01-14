import { shallowMount } from '@vue/test-utils'
import NavigationBar from './'
import NavbarLink from '@/components/molecules/NavbarLink'

describe('NavigationBar.vue', () => {
  const wrapper = shallowMount(NavigationBar, {
    stubs: ['router-link'],
    mocks: {
      $t: () => {}
    }
  })

  it('has NavigationBar component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has NavbarLink component', () => {
    expect(wrapper.find(NavbarLink).exists()).toBe(true)
  })
})
