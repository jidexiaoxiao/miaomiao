import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        movieRouter,
        cinemaRouter,
        mineRouter,
		{
			// 重定向操作,/后面不匹配任何路由,默认匹配到movie
			path:'/*',
			redirect:'movie'
		}
    ]
})