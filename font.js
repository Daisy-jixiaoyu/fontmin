var Fontmin = require('fontmin');//引入插件，当第一步中，使用全局下载的插件，这里路径要注意匹配，否则后面运行时会报找不到模块的错误，所以建议使用第二种：下载到当前项目的依赖中，本文件（fontmin.js）也建在当前项目目录下
 
var srcPath = './fonts/SourceHanSansCN-Medium.ttf'; // 字体源文件路径，需fonts\Soleil-Semibold.ttf要保证该ttf文件存在
var destPath = './fontmin';    // 字体输出路径
var text = `即日起至2020年2月16日，登录不背单词，柯林斯词典和词根词缀各赠 1 个月权限； 已购买装备的用户，权限自动延期一个月
。注：已购买词根词缀终身的用户，默认只添加柯林斯词典权限';//这里进行配置需要用到的字符，可以是中文或英文字母
如何查看装备权限时长  在首页点击头像， 进入个人中心页面， 查看头像下方的「装备」进入装备后， 可查看对应装备的 到期时间。如何使用已有学习装备使用柯林斯点击底部放大镜，进入柯林斯双解， 查看英英详解和词频。
使用词根词缀学习时 点击词根解析， 进入词根卡片。卡片内可查看 词根词缀详解和 更多相关同根词。疫情挡得住外出的脚步 却挡不住提升的脚步 我们同在
分享这个消息给你的小伙伴，叫上 TA 一起学立即分享下载012不背单词 - 助力武汉抗疫公益活动登录后自动添加权限，一起来学吧～
`
 
// 初始化
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))
    // .use(Fontmin.ttf2eot())     // eot 转换插件
    // .use(Fontmin.ttf2woff())    // woff 转换插件     
    // .use(Fontmin.ttf2svg())     // svg 转换插件
    // .use(Fontmin.css())         // css 生成插件
    .dest(destPath);            // 输出配置
 
// 执行
fontmin.run(function (err, files, stream) {
 
    if (err) {                  // 异常捕捉
        console.error(err);
    }
 
    console.log('done');        // 成功
});
