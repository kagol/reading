export function sidebarJunior() {
  return [
    {
      text: '七年级上册',
      collapsed: true,
      items: [
        { text: '春', link: '/junior/spring' }
      ]
    },
    {
      text: '七年级下册',
      collapsed: true,
      items: [
        { text: '河中石兽', link: '/junior/hezhongshishou' },
        { text: '陋室铭', link: '/junior/loushimin' },
        { text: '木兰诗', link: '/junior/mulanshi' },
        { text: '驿路梨花', link: '/junior/yilulihua' },
        { text: '紫藤萝瀑布', link: '/junior/zitengluopubu' },
        { text: '最苦与最乐', link: '/junior/zuikuyuzuile' },
      ]
    }
  ]
}

export function sidebarSenior() {
  return [
    {
      text: '高一',
      collapsed: true,
      items: [
        { text: 'xxx', link: '/senior/xxx' }
      ]
    }
  ]
}
