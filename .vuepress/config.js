module.exports = {
  "title": "巨蟹座的刘大壮",
  "description": "巨蟹座，一个极具人格魅力的星座，一个温柔与冷漠并存的星座",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": true, // 默认 true，false 不显示模式调节按钮，true 则显示
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      /*   {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }*/
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    // "blogConfig": {
    //   "category": {
    //     "location": 2,
    //     "text": "Category"
    //   },
    //   "tag": {
    //     "location": 3,
    //     "text": "Tag"
    //   }
    // },
    // "friendLink": [
    //   {
    //     "title": "刘大壮",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    // "search": true,
    // "searchMaxSuggestions": 10,
    "lastUpdated": "巨蟹座的刘大壮",
    "author": "巨蟹座的刘大壮",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/rvcode_qq.png'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        },
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        }
      ]
    }],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku',
          'whiteCat',
          'haru1',
          'haru2',
          'haruto',
          'koharu',
          'izumi',
          'shizuku',
          'wanko',
          'blackCat',
          'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    ["@vuepress-reco/vuepress-plugin-bgm-player",{
      autoplay: true,
      audios: [
        // 本地文件示例
        // {
        //   name: '장가갈 수 있을까',
        //   artist: '咖啡少年',
        //   url: '/bgm/1.mp3',
        //   cover: '/bgm/1.jpg'
        // },
        // 网络文件示例
        {
          name: 'Breathe',
          artist: 'EMBRZ',
          url: '/audio/EMBRZ-Breathe.mp3',
          cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000vfsYu1T64L9.jpg?max_age=2592000'
        },
        {
          name: 'pianai',
          artist: 'null',
          url: '/audio/pianai.mp3',
          cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000vfsYu1T64L9.jpg?max_age=2592000'
        },
        {
          name: 'Umbrella',
          artist: 'null',
          url: '/audio/Umbrella.mp3',
          cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000vfsYu1T64L9.jpg?max_age=2592000'
        },
      ]
    }],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ],
}
