import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [

  	{
      path: '/contact',
      name: 'Contcat',
      component: Contact
    },

  	 {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
