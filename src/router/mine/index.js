export default {
    path: '/mine',
    // 按需导入所以使用箭头函数，@代表src目录
    component: () =>
        import ('@/views/Mine')
}