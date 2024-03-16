import { langType } from './lang-base';

export const lang: langType = {
  title: 'VUE H5 development template',
  tabbar: {
    home: 'health',
    list: 'motion',
    member: 'device',
    demo: 'demo',
  },
  language: {
    en: 'English',
    zh: 'Chinese',
  },
  introduction: 'A rapid development vue3 of mobile terminal template',
  home: {
    Usage: 'Usage Guidelines',
    support: 'support',
    cssMultiLanguage: 'CSS picture multi-language',
    health: 'Health Card',
    the_heart: 'Guard',
    person: 'Personal Information',
    Guess: 'Guess what you want to ask',
    fast: 'quick start',
    tools: 'Tools',
    health2: 'Health management',
    sport: 'motor function',
    other: 'Other settings',
    sportstart: 'Start exercising',
    walk: 'Step counting',
    health3: 'health',
    sport2: 'motion',
    device: 'device',
  },
  health: {
    o2: 'Understanding blood oxygen cards',
    Blood: 'Understanding blood pressure cards',
    sugar: 'Understanding blood sugar cards',
    heart: 'Understanding heart rate cards',
    sleep: 'Understanding Sleep Cards',
    pressure: 'Understanding stress cards',
    Meto: 'Understanding stress cards',
    breathe: 'respiratory rate',

    heart_te:
      'Heart rate refers to the number of beats per minute of the human heart, which is one of the basic vital signs of the human body',
    heart_te2: 'There is a significant individual difference in the resting heart rate of normal adults, with an average of around 75 beats per minute (between 60-100 beats per minute). Heart rate can vary depending on age, gender, and other physiological conditions. The heart rate of newborns is very fast, reaching over 130 beats per minute. In adults, women\'s heart rate is generally slightly faster than that of men. The same person\'s heart rate slows down during quiet or sleep, and increases during exercise or emotional arousal. Under the influence of certain drugs or neurohumoral factors, their heart rate may increase or decrease. People who frequently engage in physical labor and exercise have a slower heart rate.',
    heart_te3:'View heart rate',
    heart_te4:'Scope Example',
    heart_te5:'*The data is for reference only and cannot be used as a medical clinical diagnosis!',
    heart_te6:'Click on the heart rate card on the WearinOS homepage to view your heart rate data. Support viewing blood pressure data by day, week, month, and year.',




    sleep_title1:'Understanding Sleep Cards',
    sleep_desc1:'Sleep, one-third of a person\'s life is spent in sleep. Sleep is a necessity of life, and one cannot live without it. The quality of sleep plays a crucial role in human health',
    sleep_desc2:'From the examination results of the sleep monitor, it can be seen that normal people sometimes have no eye movement or only slow fluctuations during sleep, which is relatively long; But sometimes the eyeball moves back and forth quickly, which is relatively short. At the same time as the eyeball moves slowly or quickly, there are different changes in the electroencephalogram. Therefore, scientists divide sleep into two parts: non rapid eye movement sleep and rapid eye movement sleep. For convenience in writing, the first capital letter of the English abbreviation is used in literature. Non rapid eye movement sleep is written as NREM, while rapid eye movement sleep is written as REM. The basic rule of normal sleep is that normal adults enter NREM at the beginning of sleep, from shallow to deep, and after about 60-90 minutes, they switch to REM. The duration of REM is only about 10-15 minutes, and then it switches back to NREM. This cycle alternates between NREM and REM, appearing 4-6 times a night until they wake up.',
    sleep_title2:'View Sleep',
    sleep_desc3:'Click on the sleep card on the WearinOS homepage to view your sleep data.',


    bo_title1:'Understanding blood oxygen cards',
    bo_desc1:'Blood oxygen refers to the oxygen in the blood, and the normal blood oxygen saturation in the human body is above 95%.',
    bo_desc2:'Human beings rely on oxygen for survival. After oxygen is inhaled from the lungs, it enters the bloodstream through capillaries and is then transported to various organs or cells in the body for use. The higher the oxygen content in the blood, the better a person\'s metabolism. Of course, a high blood oxygen content is not a good phenomenon. The blood oxygen in the human body has a certain saturation. If it is too low, it will cause insufficient oxygen supply to the body, and if it is too high, it will lead to cell aging in the body. O2 and CO2 exist in two forms in the blood: physically dissolved and chemically bound. Gas and hemoglobin exist in the form of complexes. If the concentration of oxygen is high, hemoglobin will cooperate with oxygen. If the concentration of carbon dioxide is high, hemoglobin will cooperate with carbon dioxide. In arterial blood, the concentration of oxygen is high, and in venous blood, the concentration of carbon dioxide is high.',
    bo_title2:'Check blood oxygen levels',
    bo_desc3:'Click on the blood oxygen card on the WearinOS homepage to view your blood oxygen data. Support viewing blood oxygen data by day, week, month, and year.',



    bp_title1:'Understanding blood pressure cards',
    bp_desc1:'Blood pressure (BP) refers to the lateral pressure exerted on a unit area of the blood vessel wall when blood flows inside the vessel. It is the driving force that propels blood flow within the vessel. It is referred to as arterial blood pressure, capillary blood pressure, and venous blood pressure in different blood vessels, and commonly referred to as arterial blood pressure in systemic circulation',
    bp_desc2:'1. Normal blood pressure: The range of blood pressure for adults in a quiet state is relatively stable. The normal range is 90-139mmHg for systolic blood pressure, 60-89mmHg for diastolic blood pressure, and 30-40mmHg for pulse pressure. 2. Abnormal blood pressure (1) Hypertension: In adults aged 18 and above, systolic blood pressure ≥ 140mmHg and/or diastolic blood pressure ≥ 90mmHg without the use of antihypertensive drugs. (2) Hypotension: systolic blood pressure ≤ 90mmHg and/or diastolic blood pressure ≤ 60mmHg.',
    bp_title2:'View blood pressure',
    bp_desc3:'Click on the blood pressure card on the WearinOS homepage to view your blood pressure data. Support viewing blood pressure data by day, week, month, and year.',

    bs_title1:'Understanding blood sugar cards',
    bs_desc1:'The glucose in the blood is called blood glucose (Glu). Glucose is an important component of the human body and a significant source of energy. The normal human body needs a lot of sugar every day to provide energy and power the normal operation of various tissues and organs',
    bs_desc2:'Fasting: 3.92-6.16mmol/L (oxidase method or hexokinase method). After meal: 5.1~7.0mmol/L (oxidase method or hexokinase method).',
    bs_title2:'View blood sugar',
    bs_desc3:'Click on the blood glucose card on the WearinOS homepage to view your blood glucose data. Support viewing blood glucose data by day, week, month, and year.',

    p_title1:'Understanding stress cards',
    p_desc1:'Stress, also known as "stress", is a natural reflection of an individual\'s physical and mental perception of a threat, which can lead to anxiety, unease, and other symptoms',
    p_desc2:'1. Stress refers to events and environmental stimuli that make people feel nervous, and in this sense, stress actually refers to the source of stress. 2. Stress refers to a subjective reflection, which is an internal psychological state of tension or arousal. It is an explanatory, emotional, and defensive response process that occurs within the human body. 3. Stress refers to a physiological response of the human body to the invasion of needs or harm, and its sustained occurrence may lead to physiological disorders and injuries, including heart failure, disease, and death.',
    p_title2:'View Pressure',
    p_desc3:'Click on the pressure card on the WearinOS homepage to view your pressure data. Support viewing stress data by day, week, month, and year',

    mt_title1:'Understanding Mett Cards',
    mt_desc1:'Meto generally refers to metabolic equivalent, which means the amount of oxygen required to maintain resting metabolism and represents the relative level of energy metabolism',
    mt_desc2:'Metabolic equivalent is a commonly used indicator of relative energy metabolism levels during various activities, based on energy expenditure during quiet and sitting positions. It can be used to evaluate cardiovascular function. 1MET=oxygen consumption of 3.5ml/(kg · min). For example, when sitting still, the MET is about 1.0, and when running at a speed of 9.6 km/h, the MET is about 10.0',
    mt_title2:'View Meto',
    mt_desc3:'Click on the Met card on the WearinOS homepage to view your Met data. Support viewing Mett data by day, week, month, and year.',

    br_title1:'Understanding breathing training',
    br_desc1:'The purpose and significance of conducting respiratory training are mainly to enhance lung function, improve lung ventilation and ventilation function',
    br_desc2:'The benefits of breathing training: 1. Improving lung function: including abdominal breathing, lip tightening breathing, and other methods can help deepen breathing, increase lung ventilation, exercise respiratory muscles, and improve lung function; 2. Reducing breathing difficulties: For patients with cardiovascular and pulmonary diseases, such as chronic obstructive pulmonary disease, enhancing the strength and endurance of respiratory muscles can alleviate the above symptoms and improve ventilation; 3. Adjuvant treatment for respiratory diseases: such as bronchitis, asthma, etc., patients may experience discomfort symptoms such as coughing. Through deep breathing in the lungs and improved ventilation, they can fully exchange oxygen, alleviate disease symptoms, and play a certain role in auxiliary treatment;',
    br_title2:'Perform breathing training',
    br_desc3:'Click on Breath Training on the WearinOS device page to synchronize breathing training with the device',

  },
  list: {
    details: 'list details',
  },
  member: {
    quick_start: {
      appearance: 'Appearance Introduction',
      appearance1: 'The device adopts a design of pressing buttons, rotating up buttons, and a color screen, integrating multiple functions. The color large screen provides a larger field of view, and the rotating up button brings a smooth and convenient operating experience.',
      appearance2: 'circular disk',
      appearance3: 'Square Screen',
      appearance4: 'Square Screen',
      appearance5: 'Equipment appearance description',
      appearance6: 'Serial Number',
      appearance7: 'illustrate',
      appearance8: 'Up key',
      appearance9: 'down key',
      appearance10: 'speaker',
      appearance11: 'Monitoring unit area',
      appearance12: 'Charging area',


      electricity: 'charge',
      electricity1: 'Charging method',
      electricity2: 'Connect the charging dock or charging cable to the power adapter, and then connect the power adapter to a power outlet.',
      electricity3: 'Place the device on the charging dock. Then adjust to make the back of the device fit the charging base until the charging prompt appears on the device screen.',
      electricity4: 'At this time, the device enters charging mode and cannot operate the screen. If you need to take action, please press the up button to enter the main screen of the device.',
      electricity5: 'After the device is fully charged, the charging indicator shows 100%. Remove the device and unplug the power adapter.',
      electricity6: 'How to check battery level',
      electricity7: 'Swipe down on the main screen and in the dropdown menu, you can view the battery percentage.',
      electricity8: 'When the device is in charging mode, check the battery percentage on the charging indicator interface.',
      electricity9: 'View the percentage of battery in the dial with displayed battery level.',
      electricity10: '设备和WearinOS正常连接时，在WearinOS设备页中可以查看电量百分比。',
      keypad: 'screen control',
      sos: 'SOS Emergency Help',
      wear: 'Wearing equipment',
      wear1: 'Please do not apply film or cover on the back of the device. There are sensors on the back of the device that recognize the human body. Once obstructed or covered, it will result in inaccurate or unrecognizable recognition, leading to a decrease in accuracy or inability to record heart rate, blood oxygen, blood pressure, stress, Met, sleep, and other factors.',
      wear2: 'To ensure measurement accuracy, please avoid wearing the watch at least one finger away from the joints, keep the strap moderately elastic, and try to wear it as tightly as possible during exercise.',
      wear3: 'Note: The equipment is made of professional and healthy materials, please rest assured to wear it. If you feel skin discomfort while wearing, please stop wearing and consult a doctor.',
      wear4: 'As follows:',
      wear0: 'Please ensure that the bottom shell of the device is clean, dry, and free of debris. Then, place the monitoring unit area on your wrist to maintain a comfortable and snug wearing condition',
    },
  },
  btn: {
    confirm: 'confirm',
    cancel: 'cancel',
  },
};
