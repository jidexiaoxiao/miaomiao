export default {
    path: '/movie',
    // 按需导入所以使用箭头函数，@代表src目录
    component: () =>
        import ('@/views/Movie'),
	children:[
		{
			// 不要加/,会跟Movie拼接在一起,加了就是绝对路径了
			path:'city',
			component:()=>import('@/components/City')
		},{
			path:'nowPlaying',
			component:()=>import('@/components/NowPlaying')
		},{
			path:'comingSoon',
			component:()=>import('@/components/ComingSoon')
		},{
			path:'search',
			component:()=>import('@/components/Search')
		},{
			path:'/movie',
			redirect:'/movie/nowPlaying'
		}
	]
}