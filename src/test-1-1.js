var exams_info = {exams_choice:"选择题",exams_judge:"判断题",exams_write:"填空题",exams_others:null}
var exams_tip = {
  subject:"美术",
  type:"全真中考",
  questions:"选择题10道，判断题5道，填空题5道，赏析题1道，实践题3道（自选1道）",
  time:"60分钟"
}
var exams_choice = [
  {
    question:"色彩中的三原色是指______。",
    choice:["红、黄、蓝","红、绿、蓝","橙、绿、紫","红、黄、青"],
    answer:0
  },
  {
    question:"中国画的主要工具材料中的纸是指我国的传统绘画用纸______。",
    choice:["水彩纸","素描纸","宣纸","水粉纸"],
    answer:0
  },
  {
    question:"在绘画作品中注重外光和色彩表现的是______画派。",
    choice:["立体主义","印象主义","野兽主义","抽象主义"],
    answer:0
  },
  {
    question:"人体比例是指人体各部分之间的度量比较，人们常常习惯于以______为一个度量单位，以此来测量全身各部分之间的比例。",
    choice:["头的宽度","手的宽度","头的高度","手的长度"],
    answer:3
  },
  {
    question:"达芬奇的《最后的晚餐》将画中厅堂的透视构图与饭厅建筑结构相连接，画中所表现的透视现象是一种______。",
    choice:["三点透视","成角透视","散点透视","平行透视"],
    answer:0
  },
  {
    question:"优秀的标志设计应具有的特点是______。",
    choice:["表意明确","内容繁杂","易于记忆","简洁凝练"],
    answer:3
  },
  {
    question:"情趣盎然的美术作品离不开______。",
    choice:["生活情趣","情景交融","高雅品味","精湛技艺"],
    answer:1
  },
  {
    question:"学生装要______。",
    choice:["符合年龄和身份","颜色搭配合理","款式新颖","面料好"],
    answer:0
  },
  {
    question:"全身像素描和速写要______。",
    choice:["人身比例准确","动态生动","画面效果好","贴近实际"],
    answer:0
  },
  {
    question:"下列属于纹样的组织形式的是______。",
    choice:["单独式","均衡式","对称式","放射式"],
    answer:0
  }
]
var exams_write = [
  {
    question:"标志是人们用来识别和______的象征性视觉符号。",
    answer:["传达信息"]
  },
  {
    question:"剪纸的方法：剪，______，镂。",
    answer:["刻"]
  },
  {
    question:"清代四僧是指明末清初四个出家为僧的画家。他们是原济(______)、朱耷(八大山人)、髡残(石溪)和弘仁，四人都擅长山水画。",
    answer:["石涛"]
  },
  {
    question:"品评古代中国画的标准“六法”:①气韵生动;②骨法用笔;③____;④随类赋彩;⑤经营位置;⑥传移模写。",
    answer:["应物象形"]
  }
]
var exams_judge = [
  {
    question:"三原色是指红、黄、蓝色。",
    answer:0
  },
  {
    question:"美术作品中，线是构成视觉艺术形象的唯一元素。",
    answer:1
  },
  {
    question:"美术就是绘画。",
    answer:1
  },
  {
    question:"人体的比例关系就是站五坐七盘三半。",
    answer:1
  },
  {
    question:"墨分五色即焦墨、浓墨、重墨、淡墨、清墨。",
    answer:0
  }
]
var exams_others = [
  {
    type:"赏析题",
    image:"src/test-1-1-1.jpg",
    question:"写出作者、作品名称、画种、国家、年代、基本内容，艺术流派、艺术风格等。",
    answer:"清明上河图，中国十大传世名画之一。为北宋风俗画，北宋画家张择端仅见的存世精品。作品以长卷形式，采用散点透视构图法，生动记录了中国十二世纪北宋都城东京（又称汴京，今河南开封）的城市面貌和当时社会各阶层人民的生活状况。结构严谨，繁而不乱，长而不冗，段落分明。"
  },
  {
    type:"实践题-命题绘画（改编）",
    question:"以中国共产党诞生100周年为主题，请你为班级黑板报设计一个版式。要求：版面对称与均衡、空白与疏密设计合理",
    answer:"略"
  },
  {
    type:"实践题-手工制作（改编）",
    question:"以环保为主题进行手工制作。",
    answer:"略"
  },
  {
    type:"实践题-书法（改编）",
    question:"用毛笔书写“山重水复疑无路，柳暗花明又一村”，要求：字体饱满圆润，工整美观。",
    answer:"略"
  }
]