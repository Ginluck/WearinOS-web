import { langType } from './lang-base';

export const lang: langType = {
  title: 'VUE H5开发模板',
  tabbar: {
    home: '健康',
    list: '运动',
    member: '设备',
    demo: '示例',
  },
  language: {
    en: '英文',
    zh: '中文',

  },
  introduction: '一个快速开发vue3的移动端模板',
  home: {
    Usage: '使用指引',
    support: '支持',
    cssMultiLanguage: 'css图片多语言',

    health: '健康卡片',
    the_heart: '心相伴',
    person: '个人信息',
    Guess: '猜你想问',
    fast: '快速上手',
    tools: '工具类',
    health2: '健康管理',
    sport: '运动功能',
    other: '其他设置',

    sportstart: '开始运动',
    walk: '计步',
    health3: '健康',
    sport2: '运动',
    device: '设备',
  },
  health: {
    o2: '了解血氧卡片',
    Blood: '了解血压卡片',
    sugar: '了解血糖卡片',
    heart: '了解心率卡片',
    sleep: '了解睡眠卡片',
    pressure: '了解压力卡片',
    Meto: '了解梅托卡片',
    breathe: '呼吸频率',

    heart_te: '心率是指人体心脏每分钟搏动的次数，为人的基本生命体征之一。',
    heart_te2:
      '正常成年人安静时的心率有显著的个体差异，平均在75次/分左右(60—100次/分之间)。心率可因年龄、性别及其它生理情况而不同。初生儿的心率很快，可达130次/分以上。在成年人中，女性的心率一般比男性稍快。同一个人，在安静或睡眠时心率减慢，运动时或情绪激动时心率加快，在某些药物或神经体液因素的影响下，会使心率发生加快或减慢。经常进行体力劳动和体育锻炼的人，平时心率较慢。',
    heart_te3:'查看心率',
    heart_te4:'范围示例',
    heart_te5:'*数据仅供参考，不能作为医疗临床诊断!',
    heart_te6:'在WearinOS首页页面点击心率卡片，即可查看您的心率数据。支持按日、周、月、年查看心率数据。',


    sleep_title1:'了解睡眠卡片',
    sleep_desc1:'睡眠（sleep），人一生中有三分之一的时间是在睡眠中度过，睡眠是生命的需要，人不能没有睡眠，睡眠质量对于人体健康起着至关重要的作用',
    sleep_desc2:'从睡眠仪的检查结果来看，正常人在睡眠时有时眼球不活动或者只有很慢的浮动，这段时间比较长；但有时眼球很快地来回活动，这段时间比较短，与眼球慢动或快动的同时，脑电图出现不同的变化。由此，科学家把睡眠分成非快速眼动相睡眠和快速眼动相睡眠两部分，为书写方便起见，在文献中都用英文缩写的第一个大写字母来表示，非快速眼动相睡眠写作NREM，而快速眼动相睡眠写作REM。正常睡眠时的基本规律是，正常成年人在睡眠一开始先进入NREM，由浅入深，大概经过60～90分钟后，转成REM，REM持续时间只有10～15分钟左右，然后又转成NREM，就这样周期性地交替出现NREM和REM，一夜出现4～6次，直到清醒为止。',
    sleep_title2:'查看睡眠',
    sleep_desc3:'在WearinOS首页页面点击睡眠卡片，即可查看您的睡眠数据。',


    bo_title1:'了解血氧卡片',
    bo_desc1:'血氧，是指血液中的氧气，人体正常血氧饱和度为95%以上。',
    bo_desc2:'人是靠氧气生存的，氧气从肺部吸入后氧就经毛细血管进入到血液中，由血液传送给身体各部位器官或细胞使用。血液中含氧量越高，人的新陈代谢就越好。当然血氧含量高并不是一个好的现象，人体内的血氧都是有一定的饱和度，过低会造成机体供氧不足，过高会导致体内细胞老化。O2和CO2都以两种形式存在于血液：物理溶解的和化学结合。气体与血红蛋白以配合物形式存在，如果氧气浓度大，血红蛋白就与氧气配合，如果二氧化碳浓度大，血红蛋白就与二氧化碳配合，在体内动脉血液中，氧气浓度大，在体内静脉血液中，二氧化碳浓度大。',
    bo_title2:'查看血氧',
    bo_desc3:'在WearinOS首页页面点击血氧卡片，即可查看您的血氧数据。支持按日、周、月、年查看血氧数据。',


    bp_title1:'了解血压卡片',
    bp_desc1:'血压（blood pressure，BP）是指血液在血管内流动时作用于单位面积血管壁的侧压力，它是推动血液在血管内流动的动力。在不同血管内被分别称为动脉血压、毛细血管压和静脉血压，通常所说的血压是指体循环的动脉血压',
    bp_desc2:'1.正常血压正常成人安静状态下的血压范围较稳定，正常范围收缩压90～139mmHg，舒张压60～89mmHg，脉压30～40mmHg。2.异常血压（1）高血压：未使用抗高血压药的前提下，18岁以上成人收缩压≥140mmHg和（或）舒张压≥90mmHg。（2）低血压：收缩压≤90mmHg和（或）舒张压≤60mmHg。',
    bp_title2:'查看血压',
    bp_desc3:'在WearinOS首页页面点击血压卡片，即可查看您的血压数据。支持按日、周、月、年查看血压数据。',

    bs_title1:'了解血糖卡片',
    bs_desc1:'血中的葡萄糖称为血糖（Glu）。葡萄糖是人体的重要组成成分，也是能量的重要来源。正常人体每天需要很多的糖来提供能量，为各种组织、脏器的正常运作提供动力',
    bs_desc2:'空腹：3.92～6.16mmol/L（氧化酶法或己糖激酶法）。餐后：5.1~7.0mmol/L（氧化酶法或己糖激酶法）。',
    bs_title2:'查看血糖',
    bs_desc3:'在WearinOS首页页面点击血糖卡片，即可查看您的血糖数据。支持按日、周、月、年查看血糖数据。',

    p_title1:'了解压力卡片',
    p_desc1:'压力”亦称“应激”是个体身心感受到威胁时的一种自然反映，它会导致个体出现焦虑、不安等',
    p_desc2:'1、 压力是指使人感到紧张的事件和环境刺激，从这种意义上讲，压力实际上指的就是压力源。2、 压力是指一种主观反映，它是紧张或唤醒的一种内部心理状态，是人体内部出现的解释性的、情感性的、防御性的应对过程。3、 压力是指人体对需要或者伤害侵入的一种生理反应，它的持续出现可能导致生理障碍与伤害，包括心力衰竭、疾病和死亡。',
    p_title2:'查看压力',
    p_desc3:'在WearinOS首页页面点击压力卡片，即可查看您的压力数据。支持按日、周、月、年查看压力数据。',

    mt_title1:'了解梅脱卡片',
    mt_desc1:'梅脱（梅托）一般指代谢当量，代谢当量（metabolic equivalent，MET）意思是维持静息代谢所需要的耗氧量，表示相对能量代谢水平',
    mt_desc2:'代谢当量是以安静且坐位时的能量消耗为基础，表达各种活动时相对能量代谢水平的常用指标。可以用来评估心肺功能。1MET=耗氧量3.5ml/(kg·min)。例如人在静坐时MET约为1.0，速度为9.6km/h的跑步MET约为10.0等',
    mt_title2:'查看梅脱',
    mt_desc3:'在WearinOS首页页面点击梅脱卡片，即可查看您的梅脱数据。支持按日、周、月、年查看梅脱数据。',

    br_title1:'了解呼吸训练',
    br_desc1:'进行呼吸训练的目的和意义主要是在于增强肺的功能,提高肺的通气和换气的功能',
    br_desc2:'呼吸训练的好处：1、改善肺功能：包括腹式呼吸、缩唇呼吸等方式，可以帮助加深呼吸程度，使得肺部的通气量增加，可以锻炼呼吸肌，改善肺功能；2、减轻呼吸困难：对于存在心肺疾病的患者，比如慢性阻塞性肺疾病，通过增强呼吸肌的力量和耐力，可以减轻上述症状，通气得到好转；3、辅助治疗呼吸道疾病：比如支气管炎、哮喘等，患者可出现咳嗽等不适症状，经过肺部深呼吸，通气改善，可充分与氧气交换，减轻疾病症状的同时起到一定辅助治疗的作用；',
    br_title2:'进行呼吸训练',
    br_desc3:'在WearinOS设备页面点击呼吸训练，可以与设备同步进行呼吸训练',



  },
<<<<<<< HEAD
=======


>>>>>>> origin/main

  member: {
    quick_start: {
      appearance: '外观介绍',
      appearance1: '设备采用按压按键+旋转上键+彩色屏幕设计,集多种功能为一体,彩色大屏提供更大视野,旋转上键带来丝滑便捷的操作体验。',
      appearance2: '圆屏',
      appearance3: '方屏',
      appearance4: '方屏',
      appearance5: '设备外观说明',
      appearance6: '序号',
      appearance7: '说明',
      appearance8: '上键',
      appearance9: '下键',
      appearance10: '扬声器',
      appearance11: '监测单元区域',
      appearance12: '充电区域',
      electricity: '充电',
      electricity1: '充电方式',
      electricity2: '连接充电底座或充电线和电源适配器，然后将电源适配器接入电源插座。',
      electricity3: '将设备放在充电座上。然后调整使设备背面贴合充电底座,直到充电提示出现在设备屏幕上。',
      electricity4: '此时设备进入充电模式，无法操作屏幕。如果您需要操作，请按向上按钮进入设备的主屏幕。',
      electricity5: '设备充满电后，充电指示显示100%，取下设备并拔掉电源适配器。',
      electricity6: '查看电量的方式',
      electricity7: '在主屏幕从上往下滑动，在下拉菜单中，可以查看电量百分比。',
      electricity8: '设备在充电状态下，在充电指示界面查看电量百分比。',
      electricity9: '在有显示电量的表盘中查看电量百分比。',
      electricity10: '设备和WearinOS正常连接时，在WearinOS设备页中可以查看电量百分比。',
      keypad: '屏幕控制',
      keypad1: '设备采用彩色触摸屏幕，支持全屏触摸、上滑、下滑、长按、左滑、右滑等操作。',
      keypad2: '屏幕基本手势',
      keypad3: '操作',
      keypad4: '功能',
      keypad5: '单击',
      keypad6: '选择确认',
      keypad7: '长按',
      keypad8: '设备显示表盘界面时，长按快捷更换表盘',
      keypad9: '上滑',
      keypad10: '查看消息通知（在表盘界面上滑）',
      keypad11: '下滑',
      keypad12: '查看快捷菜单（在表盘界面下滑）',
      keypad13: '左右滑',
      keypad14: '查看设备功能卡片',
      keypad15: '右滑',
      keypad16: '返回上一屏',
      sos: 'SOS紧急求助',
      sos1: '长按旋转上键,在新的页面中选择SOS紧急求助,点击SOS紧急求助即可发出SOS声光求助',
      wear: '佩戴设备',
      wear1: '请不要在设备背部贴膜或遮挡，设备背部有识别人体的传感器，一旦被遮挡或覆盖，将导致识别不准或者无法识别，进而导致心率、血氧、血压、压力、梅脱、睡眠等记录准确度降低或无法记录。',
      wear2: '为保证测量的准确性，请避开骨节至少一指距离佩戴，保持表带松紧适度，在运动时请尽量偏紧佩戴。',
      wear3: '注：设备采用专业健康材质，请放心佩戴。如果佩戴时感到皮肤不适，请停止佩戴并咨询医生。',
      wear4: '如下图：',
      wear0: '请确保设备的底部外壳清洁、干燥、无碎屑。然后，将监测单元区域放在手腕上，以保持舒适贴合的佩戴状态。：',
    },
  },

  person:{
    person_item1: '设置个人信息',
    person_item2: '意见反馈',
    person_item3: '账号管理',
    person_info_desc1: '进入WearinOS App > 点击个人中心 > 点击个人资料 > 即可设置个人信息。',
    person_info_desc2: '在个人资料中，可以编辑您的头像、性别、昵称、身高、体重等个人信息',
    person_account_desc1: '进入WearinOS App > 点击个人中心 > 点击设置 > 即可进入账号管理来管理您的账号',
    person_account_desc2: '● WearinOS App记录的所有数据和个人资料都是以账号为载体保存的，若你更换手机，只需使用相同的账号登录APP，即可读取您所有的数据。',
    person_feed_desc1: '● 进入WearinOS App > 点击个人中心 > 点击意见反馈 > 即可填写您要反馈的信息。',
    person_feed_desc2: '● 可以选择问题的类型，写出您的反馈意见或上传反馈的图片，以便我们为您服务',
    person_account_desc3: '● 在WearinOS App个人中心，点击设置进入账号中心，再点击退出登录来退出账号'
  },

<<<<<<< HEAD
=======

>>>>>>> origin/main
  list: {
    details: '列表详情',
    sport_type: '选择运动类型',
    sport_type_desc: '在运动界面，为您提供了户外跑步、户外步行、室内跑步等六种运动类型，可以进行不同的运动',
    sport_record: '查看运动记录',
    sport_record_desc1: '运动完成后，在App中查看运动记录，查看运动时长、累计距离、消耗的卡路里等数据',
    sport_record_desc2: '● 在首页页面点击运动记录卡片，进入运动记录界面，可以查看汇总的运动数据',
    sport_record_desc3: '● 进入运动记录界面后，点击任意一个运动记录，可以查看单条运动记录对应的详细运动记录'
  },
  btn: {
    confirm: '确认',
    cancel: '取消',
  },
  evaluate: {
    heart: '心率测量',
    bo: '血氧测量',
    bs: '血糖测量',
    bp: '血压测量',
    sleep: '监测睡眠',
    meto: '监测梅脱',
    pressure: '监测压力',
    breathe: '呼吸训练',
    female: '女性助手'
  }
};
