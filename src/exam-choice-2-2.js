var exams_info = {exams_choice:"选择题"}
var exams_tip = {
  subject:"美术",
  type:"选择题-作品作者",
  questions:"选择题30道",
  time:"60分钟"
}
var exams_choice = [
{'question': '下面关于油画《蒙娜丽莎》的表述不正确的是______。', 'choice': ['佛罗伦萨一位银行家的妻子', '文艺复兴三杰之一达·芬奇的代表作品', '表现了画家对现实生活的不满', '风景在文艺复兴时期只是人物画的背景，没有独成一体'], 'answer': 2},
{'question': '西班牙画家戈雅擅长肖像画，下面哪件作品是他的代表作？______。', 'choice': ['《国王卡洛斯四世一家》', '《杜普教授的解剖学科》', '《法国公使双人像》', '《马拉之死》'], 'answer': 0},
{'question': '下面关于油画《教皇英诺森十世肖像》描述错误的是______。', 'choice': ['此作品的作者是西班牙画家委拉斯贵之', '表现了教皇超高尚的人道主义精神', '火热的红调子表现了特与有的宗教庄严气氛', '此画抓住了人物在瞬间的精神状态'], 'answer': 1},
{'question': '《马拉之死》的作者是______。', 'choice': ['委拉斯贵之', '达维特', '丢勒', '伦勃朗'], 'answer': 1},
{'question': '下面哪位画家与梵高的国籍相同？______。', 'choice': ['丢勒', '毕加索', '达维斯', '伦勃朗'], 'answer': 3},
{'question': '梵高和伦勃朗都为自己留下了很多自画像作品，下面关于二人的描述中错误的是______。', 'choice': ['两人都是荷兰画家', '梵高是后印象主义画家', '伦勃朗善于运用光影表现人物形象', '伦勃朗创作了《星空》'], 'answer': 3},
{'question': '毕加索是著名的立体派绘画大师，其代表作品甚多。下面作品不是他的是______。', 'choice': ['《格尔尼卡》', '《朵拉·玛尔的肖像》', '《亚威农少女》', '《戴帽的芙劳》'], 'answer': 3},
{'question': '以下哪位画家被列为文艺复兴三杰之一______。', 'choice': ['伦勃朗', '梵高', '拉斐尔', '波提切利'], 'answer': 2},
{'question': '以下哪幅是荷兰画家伦勃朗的自画像______。', "image":["src/image/exam-choice-2-2-1.jpeg","src/image/exam-choice-2-2-2.jpeg","src/image/exam-choice-2-2-3.jpeg","src/image/exam-choice-2-2-4.jpeg"], 'choice': ['第1幅', '第2幅', '第3幅', "第4幅"], 'answer': 2},
{'question': '唐朝文化艺术在历史上达到一个顶峰，下列属于唐朝绘画成就代表作品的是______。', 'choice': ['《洛神赋图》', '《韩熙载夜宴图》', '《小庭戏婴图》', '《簪花仕女图》'], 'answer': 3},
{'question': '下列______是达芬奇的作品。', 'choice': ['《麦田上的群鸦》', '《少女肖像》', '《蒙娜丽莎》', '《马拉之死》'], 'answer': 2},
{'question': '西方至今保存较为完好的最早的肖像画是______。', 'choice': ['《少女肖像》', '《蒙娜丽莎》', '《阿尔诺芬尼夫妇像》', '《国王卡洛斯四世一家》'], 'answer': 0},
{'question': '清代“扬州八怪”，也称为“扬州画派”，代表人物是______。', 'choice': ['石涛', '郑燮', '唐寅', '叶欣'], 'answer': 1},
{'question': '《清明上河图》是古代现实主义的艺术杰作，作者是______。', 'choice': ['南宋马远', '北宋张择端', '唐代李思训', '北宋范宽'], 'answer': 1},
{'question': '19世纪印象派画家莫奈主张到大自然中去写生，直接表现光与色的无穷变化，他最著名的代表作是______。', 'choice': ['《日出•印象》', '《林间小道》', '《雪中猎人》', '《教廷的皇宫》'], 'answer': 0},
{'question': '他在绘画中寻求一种坚固稳定的东西，试图把自然界的物质归为各种几何体，被称为“现代绘画之父”的画家是______。', 'choice': ['梵高', '塞尚', '莫奈', '米开朗基罗'], 'answer': 1},
{'question': '印象派代表人物莫奈晚年的______作品被法国政府永久陈列在巴黎土伊勒里宫中。', 'choice': ['《睡莲》', '《草地上的午餐》', '《教廷的皇宫》', '《雪中猎人》'], 'answer': 0},
{'question': '我国存世最早的一件山水画卷是______。', 'choice': ['隋展子虔《游春图》', '北宋张择端《清明上河图》', "隋展子虔《游春图》", '东晋顾恺之《历代帝王图》'], 'answer': 0},
{'question': '北宋范宽的《溪山行旅图》表现了北宋时期北方山水画______的构图特点。', 'choice': ["全景式", '边角式', '三角形', '梯形'], 'answer': 0},
{'question': '唐代大诗人王维以诗入画，被后人奉为______画的鼻祖。', 'choice': ["山水画", '文人画', '花鸟画', '人物画'], 'answer': 1},
{'question': '现代画家傅抱石、关山月的作品______，运用了现实主义和浪漫主义相结合的方法，采用全景图式，把山舞银蛇的北国风光与郁郁葱葱的江南景色有机统一在同一画面之中，使人们更深一层地欣赏到祖国江山的秀美。', 'choice': ["《江山如此多娇》", '《青城山》', '《万山红遍》', '《富春山居图》'], 'answer': 0},
{'question': '19世纪印象派代表人物有：①莫奈②毕沙罗③雷诺阿④透纳______。', 'choice': ['①②', '③④', '①②③', '①②③④'], 'answer': 3},
{'question': '西涅克和修拉在对光、色的研究和表现方面相对于早期的印象派有了更进一步的认识，他们以光学原理为基础，发明了一种全新的绘画方法——______法。', 'choice': ['抽象', '立体主义', '写实主义', '点彩'], 'answer': 3},
{'question': '《盛开的桃花》是______在1888年创作的一幅油画，整个画面盛满粉红色的勃勃生机，显示出创作者积极向上的乐观精神。', 'choice': ["梵高", '毕加索', '马蒂斯', '勃拉克'], 'answer': 0},
{'question': '《梅杜萨之筏》是______一生中最具代表性的浪漫主义杰作。描绘筏上一群幸存者在绝望之际，突然发现远处有一艘轮船在航行，于是不顾一切地挣扎呼救的瞬间。', 'choice': ['达芬奇', '拉斐尔', '委拉斯贵支', '席里柯'], 'answer': 3},
{'question': '油画作品《1808年5月3日夜间的枪杀》，描绘西班牙人民在反对拿破仑军队入侵的斗争中表现出的大无畏的英雄主义精神，其作者是______。', 'choice': ['戈雅', '拉斐尔', '委拉斯贵支', '席里柯'], 'answer': 0},
{'question': '《自由引导人民》是最具有浪漫主义色彩的油画作品之一，现收藏于巴黎卢浮宫。这幅画的作者是______。', 'choice': ['戈雅', '德拉克罗瓦', '委拉斯贵支', '席里柯'], 'answer': 1},
{'question': '彩陶旋纹双耳瓶是______时期的作品。', 'choice': ['战国', '秦朝', '新石器时期', '汉代'], 'answer': 2},
{'question': '《萧何月下追韩信》的青花梅瓶是哪个朝代的？______。', 'choice': ['元代', '唐代', '清代', '宋代'], 'answer': 0},
{'question': '《兰竹图》（中国画）是哪个画家的作品？______。', 'choice': ['任伯年', '郑板桥', '朱耷', '齐白石'], 'answer': 1}
]