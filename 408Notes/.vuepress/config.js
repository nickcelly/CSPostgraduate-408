module.exports = {
    title: "CSPostgraduate",
    base: "/2021-CSPostgraduate-408/",
    repo: "https://github.com/KimYangOfCat/2021-CSPostgraduate-408",
    description:"2021 CSPostgraduate 408",
    port:4080,

    theme: '@vuepress/theme-default',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '数据结构', link: '/DataStructure/'},
            {text: '计算机组成原理', link: '/ComputerOrganization/'},
            {text: '计算机网络', link: '/ComputerNetwork/'},
            {text: '操作系统', link: '/OperatingSystem/'},
            {text: '联系我', link: '/contact'},
            // {text: 'GitHub', link: 'https://github.com/KimYangOfCat/2021-CSPostgraduate-408', target: '_blank'},
        ],
        sidebar:
            {
                '/DataStructure/': getDataStructureSidebar(),
                '/ComputerOrganization/': getComputerOrganizationSidebar(),
                '/ComputerNetwork/': getComputerNetworkSidebar(),
                '/OperatingSystem/': getOperatingSystemSidebar(),
                // fallback
                '/': [
                    // '',        /* / */
                    'contact', /* /contact.html */
                ]
            },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated:"最后更新时间：",
        smoothScroll: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '408Notes',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们完善此页面吧～'
    }
}

function getDataStructureSidebar() {
    return [
        '/DataStructure/',
        {
            title: '0、绪论',   // 必要的
            path: '/DataStructure/DS_0_Introduction',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_0_Introduction/Doc_0_0_数据结构基本概念',
                '/DataStructure/DS_0_Introduction/Doc_0_1_算法基本概念',
                '/DataStructure/DS_0_Introduction/Doc_0_2_错题总结',
            ]
        },
        {
            title: '1、线性表',   // 必要的
            path: '/DataStructure/DS_1_LinearList',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_1_LinearList/Doc_1_0_线性表',
                '/DataStructure/DS_1_LinearList/Doc_1_1_顺序表',
                '/DataStructure/DS_1_LinearList/Doc_1_2_单链表',
                '/DataStructure/DS_1_LinearList/Doc_1_3_双链表',
                '/DataStructure/DS_1_LinearList/Doc_1_4_循环链表',
                '/DataStructure/DS_1_LinearList/Doc_1_5_静态链表',
                '/DataStructure/DS_1_LinearList/Doc_1_6_章节总结',
            ]
        },
        {
            title: '2、栈与队列',   // 必要的
            path: '/DataStructure/DS_2_StackAndQueue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_2_StackAndQueue/Doc_2_0_栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_1_顺序栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_2_链栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_3_队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_4_顺序队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_5_链式队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_6_双端队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_7_栈的应用',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_8_队列的应用',
            ]
        },
        {
            title: '3、字符串',   // 必要的
            path: '/DataStructure/DS_3_String',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_3_String/Doc_3_0_串',
                '/DataStructure/DS_3_String/Doc_3_1_串的存储结构',
                '/DataStructure/DS_3_String/Doc_3_2_模式匹配',
                '/DataStructure/DS_3_String/Doc_3_3_KMP算法',
                '/DataStructure/DS_3_String/Doc_3_4_KMP算法的优化',
            ]
        },
        {
            title: '4、树与二叉树',   // 必要的
            path: '/DataStructure/DS_4_TreeAndBinaryTree',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_0_树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_1_树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_2_二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_3_二叉树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_4_二叉树的存储结构',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_5_二叉树的遍历',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_6_二叉树的构造',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_7_线索二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_8_二叉树的线索化',
            ]
        },
        {
            title: '5、图',   // 必要的
            path: '/DataStructure/DS_5_Graph/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '6、搜索',   // 必要的
            path: '/DataStructure/DS_6_Search/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '7、排序',   // 必要的
            path: '/DataStructure/DS_7_Sort/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },

    ]
}

function getComputerOrganizationSidebar() {
    return [
        '/ComputerOrganization/',
    ]
}

function getComputerNetworkSidebar() {
    return [
        '/ComputerNetwork/',
    ]
}

function getOperatingSystemSidebar() {
    return [
        '/OperatingSystem/',
    ]
}