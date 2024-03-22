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
    female: '女性助手',
    heart_desc: '为保证心率测量的准确性，请正常佩戴设备，不要太松，运动时请尽量偏紧佩戴。保证监测单元区域贴住皮肤，不要有异物遮挡。',
    heart_single_title: '测量单次心率',
    heart_single_desc1: '在设备功能列表选择心率，进行心率测量',
    heart_single_desc2: '受外界因素（如肤色较深、手臂下垂、手臂晃动、低温等）影响，可能会出现测量结果不准，或者无法出值的情况。',
    heart_single_desc3: '注：部分设备具有全天心率监测功能，开启后可24小时监测心率。',
    bo_desc: '为保证测量的准确性，测量血氧饱和度时，请正常佩戴设备，避开骨节，不要太松。保证监测单元贴住皮肤，不要有异物遮挡。',
    bo_title: '单次血氧测量',
    bo_test_desc1: '设备功能列表选择血氧，进行血氧测量。',
    bo_test_desc2: '测量过程中保持身体静止，即可测量当前的血氧饱和度。',
    bo_test_desc3: '如果设备未佩戴或佩戴不正确，设备会出现提示，请根据提示重新正确佩戴设备，并重新测量血氧饱和度（部分机型支持）',
    bp_desc: '为保证测量的准确性，测量血压时，请正常佩戴设备，避开骨节，不要太松。保证监测单元贴住皮肤，不要有异物遮挡。',
    bp_title: '血压测量',
    bp_test_desc1: '设备功能列表选择血压，进行血压测量。',
    bp_test_desc2: '测量过程中保持身体静止，即可测量当前的血压。',
    bp_test_desc3: '如果设备未佩戴或佩戴不正确，设备会出现提示，请根据提示重新正确佩戴设备，并重新测量血压（部分机型支持）',
    bs_desc: '为保证测量的准确性，测量血压时，请正常佩戴设备，避开骨节，不要太松。保证监测单元贴住皮肤，不要有异物遮挡。',
    bs_title: '血糖测量(部分机型支持)',
    bs_test_desc1: '设备功能列表选择血压，进行血糖测量。',
    bs_test_desc2: '测量过程中保持身体静止，即可测量血糖。',
    bs_test_desc3: '如果设备未佩戴或佩戴不正确，设备会出现提示，请根据提示重新正确佩戴设备，并重新测量血糖（部分机型支持）',
    pressure_desc: '压力检测过程中请正确佩戴设备并保持身体静止',
    pressure_title: '监测压力',
    pressure_test_desc1: '咖啡因、尼古丁、酒精及部分精神类药品的摄入会影响压力检测的准确性',
    pressure_test_desc2: '设备上查看：点击设备应用列表，选择 压力,即可查看压力趋势情况',
    pressure_test_desc3: 'WearinOS APP上查看：打开App，在首页的 压力 卡片区域可以看到压力的汇总数据',
    sleep_desc: '正确佩戴设备入睡，设备会自动识别入睡、出睡以及深睡、浅睡的时间。出睡后，睡眠数据会同步到WearisOS App，可查看睡眠详情数据',
    sleep_title: '查看睡眠数据',
    sleep_test_desc1: '设备上查看：点击设备应用列表，选择 睡眠,即可查看睡眠情况',
    sleep_test_desc2: 'WearinOS APP上查看：打开App，在首页的 睡眠 卡片区域可以看到睡眠的详细情况',
    sleep_test_desc3: '注：设备中的监测数据会于每日进行更新，历史数据会存储在设备中，请及时同步至WearisOS App中，以免数据同步不及时，导致历史数据清除',
    meto_desc: '梅托指能量代谢当量，是以安静、坐位时的能量消耗为基础，表达各种活动时相对能量代谢水平的常用指标',
    meto_title: '查看梅脱数据（部分机型支持）',
    meto_test_desc1: '设备上查看：点击设备应用列表，选择 梅脱,即可查看梅脱相关数据',
    meto_test_desc2: 'WearinOS APP上查看：打开App，在首页的 梅脱 卡片区域可以看到梅脱的数据',
    meto_test_desc3: '梅脱检测过程中请正确佩戴设备。',
    breathe_desc: '在应用列表中选择 呼吸训练，设置时长和节奏，点击呼吸训练图标，根据屏幕提示进行呼吸训练。训练完成后，可查看呼吸前心率、训练时长等信息。',

  },

  tools: {
    tell: '通话功能',
    music_control: '音频控制',
    camera: '遥控拍照',
    clock: '闹钟功能',
    second_clock: '秒表功能',
    time_manager: '计时器功能',
    find_phone: '查找手机',
    cash_card: '收款码功能',
    card: '名片功能',
    note: '消息通知',
    health_remind: '健康提醒',
    speech: '语音控制',
    car_code: '乘车码',
    music_title: '控制手机音乐',
    music_desc: '可以通过设备来控制手机音乐的播放、暂停、切换等操作',
    camera_desc1: '设备和手机正常连接时，支持远程控制手机相机进行拍照、录像，通过设备有助于拍摄更好的照片。',
    camera_desc2: '在应用列表中选择遥控拍照，联动app的遥控拍照功能实现远程拍照',
    clock_desc1: '设备支持设置闹钟，在准确的时间提醒，协助管理时间，形成良好的作息习惯。',
    clock_title1: '设置闹钟',
    clock_desc2: '在应用列表中选择闹钟，点击“+”新建闹钟,设置闹钟的时间和周期完成新建操作',
    clock_desc3: '支持从WearinOS App设置闹钟',
    clock_title2: '删除闹钟',
    clock_desc4: '在设备应用列表，选择 闹钟,选择目标闹钟，在编辑闹钟界面完成删除操作',
    second_desc1: '设备支持完整秒表计时，帮助您完成需要精准计时的事务',
    second_title: '在设备应用列表，选择 秒表，点击开始开关开始秒表计时，开始后点击相同开关可以暂停计时',
    second_desc2: '点击重置按钮可以重置秒表计时',
    find_desc1: '若设备和手机在蓝牙连接范围内，在找手机过程中无论手机是响铃、振动或静音模式，手机都会播放媒体音乐进行提醒',
    find_desc2: '找手机功能需要确保手机和设备蓝牙连接正常。',
    find_desc3: 'iOS手机黑屏情况下，系统铃音播放由iOS操作系统控制，可能出现找手机，手机不响应的情况。',
    cash_desc1: '将收款二维码绑定至您的设备里，随时随地发起收款。目前支持供三种收款方式：微信支付、支付宝、PayPal。',
    cash_title: '绑定步骤',
    cash_desc2: '打开微信/支付宝/PayPal，保存收款码到手机本地 ,打开WearinOS 点击“设备”-“卡包”-“微信/支付宝/PayPal”',
    cash_desc3: '点击添加微信/支付宝/PayPal收款二维码,点击“绑定”按钮，即可将微信/支付宝/PayPal收款码绑定至设备',
    card_desc1: '将名片绑定至你的设备里,目前支持五种名片绑定添加：微信、QQ、Facebook、WhatsApp、Twitter',
    card_title: '打开微信/QQ/Facebook/WhatsApp/Twitter，保存“我的二维码”至手机本地;打开WearinOS 点击“设备”->“名片”->微信/QQ/Facebook、WhatsApp、Twitter',
    card_desc2: '点击添加微信/QQ/Facebook/WhatsApp/Twitter二维码;点击“绑定”按钮，即可将微信/QQ/Facebook/WhatsApp/Twitter二维码名片绑定至设备',
    card_desc3: '温馨提醒：详细操作可查看WearinOS App中的操作步骤',
    note_desc1: '开启消息通知，设备设备即可收到通知',
    note_title: '如何打开消息通知',
    note_desc2: '打开WearinOS App点击设备，点击消息通知.',
    note_desc3: '选择您要打开消息通知的应用或种类，开启对应的按钮即可接收对应的消息通知',
    health_desc1: '健康提醒中将为你设置久坐提醒、全天心率检测(部分设备可用)’、喝水提醒(部分设备可用)等功能',
    health_title: '如何使用健康提醒',
    health_desc2: '久坐提醒、喝水提醒可在对应开关开后设置提醒时间和提醒次数',
    health_desc3: '点击全天心率检测后可以设置监测时段和监测频率，以便对您提供监测服务',
    time_desc1: '设备支持设定时长的快速计时和自定义时间计时，协助完成特定时长的事务。',
    time_title: '使用计时器',
    time_desc2: '在提供的定时列表中点击对应的时长，进行开始计时或者停止计时的操作',
    time_desc3: '在提供的时长列表中滑动至最低端可以自定义时长，分别选择时、分、秒进行定时操作'
  },
  sport: {
    sport_title: '运动功能',
    sport_desc1: '设备为您提供户外跑步、步行，室内跑步、步行等多种运动类型，助您完成运动',
    sport_title1: '使用运动功能',
    sport_desc2: '在应用列表中选择运动或者左滑屏幕切换至运动种类列表，点击对应的运动即可开始运动',
    sport_desc3: '运动过程中可在手表上查看运动数据，同时左滑屏幕可以暂停或停止运动',
    sport_desc4: '注：如需要在app中查看运动数据，需要在运动开启前与WearinOS App进行连接，连接完成后在运动结束后会将数据同步至App中， 以便在App中查看运动的汇总数据'
  },
  others: {
    lock: '设备锁屏与解锁',
    info: '查看设备信息',
    ota: '设备ota升级',
    language: '设备语言与时间',
    light: '设备亮度调节',
    reset: '设备开关机、重启、恢复出厂设置',
    info_mac_title: '查看MAC地址',
    info_ble_title: '查看蓝牙名称',
    info_version_title: '查看版本号',
    info_mac_desc: '设备亮屏后向下滑动屏幕，点击设置->关于，可查看MAC地址',
    info_ble_desc1: '设备亮屏后向下滑动屏幕，点击设置->关于，可查看M蓝牙名称',
    info_ble_desc2: '在WearinOS App设备页面，当前连接设备的名称即为设备的蓝牙名称',
    info_version_desc1: '设备亮屏后向下滑动屏幕，点击设置->关于，可查看当前版本号',
    info_version_desc2: '在WearinOS App设备页面，点击OTA升级后可查看到当前设备的版本号',
    lock_desc: '设备为您提供了锁屏功能，以便于您在不使用的时候不会出现误操作等情况',
    lock_set_title: '设置锁屏',
    lock_set_desc: '设备亮屏后向下滑动屏幕，点击带锁图标按钮可以锁定设备',
    lock_unlock_title: '解锁设备',
    lock_unlock_desc: '设备侧边，旋转上按钮即可解锁设备',
    ota_desc: '设备固件升级需要连接WearinOS App来完成',
    ota_desc1: '在WearinOS App设备页面，点击ota升级检测更新，如有更新版本可以点击升级按钮来完成设备的升级',
    ota_desc2: '注：在升级过程中请保持设备与App的连接，尽量不要操作设备或手机，以免出现异常状况',
    lan_desc1: '当设备与手机App连接后，会自动同步手机系统当前的语言与时间，无需在设备上设置语言与时间',
    lan_desc2: '注：如未同步请检查App中设备页面->其他设置，检查同步语言是否开启，如仍然未同步请尝试清除配对信息重新配对',
    light_desc1: '设备亮屏后向下滑动屏幕，点击设置->屏幕显示->调整亮度，可根据自己的需求完成亮度调节',
    reset_title1: '开机',
    reset_title2: '关机',
    reset_title3: '恢复出厂设置',
    reset_start_desc: '长按设备侧边上按钮开机',
    reset_close_desc1: '设备亮屏后向下滑动屏幕，点击设置->系统菜单->关机，即可关机',
    reset_close_desc2: '长按设备侧边上按钮，点击右上角关机按钮',
    reset_desc1: '设备亮屏后向下滑动屏幕，点击设置->系统菜单->恢复出厂设置，根据提示完成回恢复出厂设置',
    reset_desc2: '在WearinOS App设备页面，点击恢复出厂设置',

  },

  questions: {
    question1: '设备数据与app数据同步异常',
    question2: '心相伴，我与他添加好友后，为什么看不到对方的数据',
    question3: '为什么无法开始运动',
    question4: '运动定位，轨迹不准等问题',
    question5: '记录数据距离与实际运动距离差距很大',
    question6: '为什么设备无法连接',
    question7: '设备连接后显示未连接或设备表盘未显示',
    question8: '为什么设备消息通知收不到',
    question9: '手机连接蓝牙，设备没有声音',
    question10: '手表时间为什么不准确',


    answer1_1: '检查设备与App是否正常连接，可通过设备中的找设备来判断，如有连接异常情况请重新配对连接',
    answer1_2: '检查手表时间是否与手机一致，如果不一致删除设备，重新连接',
    answer1_3: '如未出现上述异常，可在App首页进行下拉刷新操作，尝试重新同步',

    answer2_1: '对方未佩戴手表或使用App',
    answer2_2: '对方设备未连接网络或者网络比较差',
    answer2_3: '对方未授权您查看TA的健康信息',

    answer3_1: '检查App是否与设备连接，如未连接，请先连接设备',
    answer3_2: '检车App是否与设备连接正常,如有连接异常，请尝试重新连接设备',

    answer4_1: '运动过程的轨迹信息通过手机或穿戴设备的卫星定位信息获取，若遇到轨迹的丢失、漂移等问题，可能是由于定位信号较弱导致，建议在进行户外运动时前往开阔区域',
    answer4_2_A: 'Andoird 用户',
    answer4_2_1: '将App的省点策略设置为无限制',
    answer4_2_2: '将App的位置权限改为始终允许',
    answer4_2_3: '将App进行后台锁定',
    answer4_2_I: 'iOS 用户',
    answer4_2_4: '关闭省电模式',
    answer4_2_5: '将App的位置权限改为“始终',
    answer4_2_6: '将App的后台刷新打开',

    answer5_1: '运动报告中的距离结果基于定位信息获取或步数估算，可能存在一定的误差，建议在运动时前往开阔区域。',

    answer6_1: '请检查设备是否被其他设备连接，可下滑设备屏幕，查看上方连接图标,如有存在连接，可尝试在设备上清除配对信息，手机上尝试开关蓝牙，重新配对',
    answer6_2: 'iOS用户可查看系统设置中，是否存在该设备未被忽略，如存在请先点击该设备的“i”图标忽略设备',

    answer7_1: '连接后显示未配对或表盘未显示，可能是由于设备连接异常导致，请先尝试重启App是否能改善',
    answer7_2: '如重启App仍然未改善，请在设备页面删除设备，Android用户可在手机蓝牙尝试重新开关蓝牙；iOS用户在系统设置蓝牙中忽略该设备，进行重新连接',

    answer8_1: '请先确认App是否与设备正常连接',
    answer8_2: '确认App的消息通知权限是否打开',
    answer8_3: '确认App是否打开后台保护功能，如未开启可能在后台进程被关闭的情况下无法收到消息通知',
    answer8_4: '请在系统设置蓝牙中查找到连接的设备，点击“i”图标，查看共享系统通知是否打开',

    answer9_1: '请确认App是否与设备正常连接',
    answer9_2: '请确认设备的音频蓝牙是否与设备连接，iOS用户可在系统设置蓝牙中查找到连接的设备，点击“i”图标，查看是否有设备类型选项，如果未出现则是设备的音频蓝牙未连接，请尝试重新匹配链接',

    answer10_1: '在设备与APP成功连接后，时间会自动同步。如果时间显示还是不正确，建议重启一下设备和app，再重新连接',


  }
};
