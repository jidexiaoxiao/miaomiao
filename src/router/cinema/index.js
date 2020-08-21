export default {
    path: '/cinema',
    // 按需导入所以使用箭头函数，@代表src目录
    component: () =>
        import ('@/views/Cinema')
}