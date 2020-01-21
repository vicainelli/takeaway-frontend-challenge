const Home = () => import(/* webpackChunkName: "home" */ '@/components/pages/Home');
const Orders = () => import(/* webpackChunkName: "orders" */ '@/components/pages/Orders');
const Profile = () => import(/* webpackChunkName: "profile" */ '@/components/pages/Profile');
const OrderShow = () => import(/* webpackChunkName: "order_show" */ '@/components/pages/OrderShow');

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
