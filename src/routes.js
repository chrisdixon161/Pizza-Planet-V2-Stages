import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About'
import Contact from './components/Contact'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'

export const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: 'contact', name: 'contactLink', component: Contact },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This area is for authorised users only, please login to continue')
      next()
    }
  },
  {
    path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide },
    ]
  },
  { path: '*', redirect: '/' }
]