import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'common/login'
import items from 'components/itemList'
import Daojia from 'components/Daojia'
import Rec from 'components/recommend/Rec'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/logistic',
            name: 'Login',
            component: Login
        },
        {
            path: '/items',
            name: 'items',
            component: items
        },
        {
            path: '/rec',
            name: 'Rec',
            component: Rec
        },
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/daojia',
            name: 'Daojia',
            component: Daojia
        }

    ]
})