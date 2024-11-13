//用于配制侧边栏

export default [
    {
        label: '仪表盘',
        route: '/home',
        icon: 'Plus',
        index: '1',

        children: null,
    },
    {
        label: '用户管理',
        route: '/user',
        icon: 'Plus',
        index: '2',
    },
    {
        label: '任务管理',
        route: '',
        icon: 'Plus',
        index: '3',

        children: [
            {
                label: '私信任务',
                route: '/private',
                icon: 'Plus',
                index: '3-1',

                children: null,
            },
            {
                label: '动态任务',
                route: '/dynamic',
                icon: 'Plus',
                index: '3-2',

                children: null,
            },
            {
                label: '拉群任务',
                route: '/group',
                icon: 'Plus',
                index: '3-3',

                children: null,
            },
        ],
    },
    {
        label: '素材管理',
        route: '/material',
        icon: 'Plus',
        index: '4',

        children: [
            {
                label: 'WhatsApp素材',
                route: '/wa',
                icon: 'Plus',
                index: '4-1',

                children: null,
            },
            {
                label: 'TK素材',
                route: '/tk',
                icon: 'Plus',
                index: '4-2',

                children: null,
            },
        ],
    },
];
