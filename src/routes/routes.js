import Home from '@/components/pages/Home'
import Orders from '@/components/pages/Orders'
import Profile from '@/components/pages/Profile'
import OrderShow from '@/components/pages/OrderShow'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/orders/:id',
    name: 'orderShow',
    component: OrderShow
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

export default routes
