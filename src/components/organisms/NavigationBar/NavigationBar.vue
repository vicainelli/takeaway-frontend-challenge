<template>
  <div class="border-t lg:border-0 lg:mt-6">
    <nav class="flex lg:block">
      <navbar-link :label="$t('home')" path-to="home"> </navbar-link>
      <navbar-link :label="$t('orders')" path-to="orders"></navbar-link>
      <navbar-link :label="$t('profile')" path-to="profile"></navbar-link>
    </nav>
  </div>
</template>

<script>
import NavbarLink from '@/components/molecules/NavbarLink'
export default {
  name: 'navigation-bar',
  components: {
    'navbar-link': NavbarLink
  }
}
</script>
