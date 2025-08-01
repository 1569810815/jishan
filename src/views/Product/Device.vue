<template>
  <Common
    :bg=device
  >
    <template #title>智能设备</template>
    <template #subtitle>积善之家智能物联场景，智能互联，通链院内智能设备，24小时实时监测老人健康状况。数据系统完善，医疗预警闭环，预防运营风险，老人家属安心。</template>
  </Common>

  <h2 class="device-title">产品中心</h2>

  <el-tabs
    v-model="activeName"
    type="card"
    class="device-tabs"
  >
    <el-tab-pane label="全部" name="全部">
      <ul class="device-list">
        <li
          v-for="item in deviceList"
          :key="item.id"
          class="device-card"
          @click="switchToProductTab(item)"
        >
          <img :src="item.img" :alt="item.tatle">
          <p>{{ item.tatle }}</p>
        </li>
      </ul>
    </el-tab-pane>

    <el-tab-pane
      v-for="cat in categories"
      :key="cat"
      :label="cat"
      :name="cat"
    >
      <ProductDetail :product="getProductDetail(cat)" />
    </el-tab-pane>
  </el-tabs>

  <Footer />
  <Consultation />
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import { ref } from 'vue'
import Consultation from '@/components/Consultation.vue'
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue'
import Footer from '@/components/Footer.vue'
import ProductDetail from './ProductDetail.vue'
import diedaoImg from '@/assets/Images/diedao.png'
import ranqiImg from '@/assets/Images/ranqi.png'
import shuimianImg from '@/assets/Images/shuimian.png'
import shiduImg from '@/assets/Images/shidu.png'
import shuijinImg from '@/assets/Images/shuijin.png'
import menciImg from '@/assets/Images/menci.png'
import jinjiannuiImg from '@/assets/Images/jinjiannui.png'
import hongwaiImg from '@/assets/Images/hongwai.png'
import device from '@/assets/Images/device.png'
import chanpinliangdian from '@/assets/Images/chanpinliangdian.png'
import anliImg from '@/assets/Images/anliImg.png'
const activeName = ref('全部')

const deviceList = ref([
  {id:1001, img: diedaoImg, label:'跌倒报警器', tatle:'跌倒报警器'},
  {id:1002, img: ranqiImg, label:'智能燃气报警器', tatle:'智能燃气报警器'},
  {id:1003, img: shuimianImg, label:'智能睡眠监测器', tatle:'智能睡眠监测器'},
  {id:1004, img: shiduImg, label:'智能温湿度传感器', tatle:'智能温湿度传感器'},
  {id:1005, img: shuijinImg, label:'智能水浸报警器', tatle:'智能水浸报警器'},
  {id:1006, img: menciImg, label:'智能门磁传感器', tatle:'智能门磁传感器'},
  {id:1007, img: jinjiannuiImg, label:'无线紧急按钮', tatle:'无线紧急按钮'},
  {id:1008, img: hongwaiImg, label:'智能红外传感器', tatle:'智能红外传感器'},


])

const categories = [
  '跌倒报警器',
  '智能燃气报警器',
  '智能睡眠监测器',
  '智能温湿度传感器',
  '智能水浸报警器',
  '智能门磁传感器',
  '无线紧急按钮',
  '智能红外传感器'
]

const getProductDetail = (productName) => {
  const productDetails = {
    '跌倒报警器': {
      name: '跌倒报警器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: diedaoImg,
      description: '智能跌倒报警器 是一款专为老年人设计的紧急呼救设备，通过高精度传感器和AI算法实时监测人体姿态变化，在检测到跌倒或突发状况时自动触发报警，并通知家属、护工或急救中心，大幅缩短救援响应时间，降低因跌倒导致的二次伤害风险。尤其适合独居、行动不便或患有心脑血管疾病的老年群体。',
      features: [
        { icon: chanpinliangdian, title: '精准跌倒识别', desc: '采用三轴加速度计+陀螺仪+AI算法，区分跌倒（如突然倒地）与日常动作（弯腰、坐下），减少误报率（准确率＞95%）' },
        { icon: chanpinliangdian, title: '即时报警', desc: '跌倒后30秒内自动通知护理人员' },
        { icon: chanpinliangdian, title: '多场景覆盖', desc: '内置GPS/Wi-Fi/蓝牙定位，室内外均可追踪位置，方便快速救援' },
        { icon: chanpinliangdian, title: '智能联动', desc: '可联动智能家居（如开灯、解锁门禁），或接入养老机构/社区应急响应平台' },
        { icon: chanpinliangdian, title: '防水设计', desc: 'IP67防水等级，浴室也可使用' }
      ],
      specifications: [
        { name: '产品尺寸', value: 'Φ112.0mmx32mm' },
        { name: '工作电压', value: 'Type-C 5V' },
        { name: '工作电流', value: '≤0.8A' },
        { name: '通信方式', value: 'Wi-Fi/BLE' },
        { name: '工作频率', value: '60GHz' },
        { name: '安装方式', value: '定装（默认）/平装' },
        { name: '安装高度', value: '顶装2.2m-3.0m  平装1.35m-1.5m' },
        { name: '监测范围', value: '顶装：雷达正下方4mx4m  平装：雷达左右3m，前方4m' },
        { name: '工作温度', value: '-10℃~55℃' }
      ],
      usageScenes: [
        { image: anliImg, title: '卧室使用' },
        { image: anliImg, title: '浴室使用' },
        { image: anliImg, title: '客厅使用' }
      ]
    },

    '智能睡眠监测器': {
      name: '智能睡眠监测器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: shuimianImg,
      description: '智能睡眠监测仪 是一款专为老年人设计的健康监测设备，通过非接触式传感技术（如生物雷达、压力传感器或红外感应）实时监测用户的睡眠状态，包括心率、呼吸频率、体动、深浅睡眠周期等数据，并结合AI算法分析睡眠质量，帮助用户及家人或护理人员及时了解健康状况，预防潜在风险。',
      features: [
        { icon: '/icons/accurate.png', title: '无感监测，舒适便捷', desc: '无需佩戴手环或贴片，只需将设备放置在床垫下或床头柜上，即可实现整夜无干扰监测' },
        { icon: '/icons/alert.png', title: '多维度数据采集', desc: '监测核心指标：心率、呼吸频率、翻身次数、入睡/清醒时间、深/浅睡眠比例等。' },
        { icon: '/icons/battery.png', title: 'AI智能分析', desc: '生成每日/每周睡眠报告，提供改善建议（如作息调整、环境优化）' },
        { icon: '/icons/waterproof.png', title: '远程看护功能', desc: '数据同步至手机APP或云端，家属/护理人员可远程查看老人睡眠状况，紧急情况推送告警' },
        { icon: '/icons/waterproof.png', title: '适老化设计', desc: '大字体显示、语音播报、一键呼叫等简易操作，适合老年人独立使用' },
        { icon: '/icons/waterproof.png', title: '隐私保护', desc: '本地加密存储数据，避免隐私泄露' },

      ],
      specifications: [
        { name: '产品尺寸', value: '73.0mmx42.0mmx40.5mm' },
        { name: '工作电压', value: 'USB Type-C 5V' },
        { name: '工作电流', value: '≤ 0.3A' },
        { name: '接口能力', value: 'LTE（可选）、WIFI、BLE' },
        { name: '监测范围', value: '≤ 1.5m' },
        { name: '监测角度', value: '波束方位宽度±60°、波束俯仰宽度±60°' },
        { name: '工作温度', value: '-20℃~50℃' }
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },


    '智能温湿度传感器': {
      name: '智能温湿度传感器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage:shiduImg ,
      description: '智能温湿度传感器 是一款专为智慧养老场景设计的环境监测设备，可实时检测室内温度、湿度等数据，并通过智能算法分析环境舒适度，联动空调、加湿器等设备自动调节，为老年人提供安全、健康的居住环境。尤其适合对温湿度敏感的高血压、关节炎、呼吸道疾病患者，预防因环境不适引发的健康风险。',
      features: [
        { icon: '/icons/accurate.png', title: '高精度监测', desc: '采用专业级传感器，温度监测精度±0.5℃，湿度±3%RH，数据可靠' },
        { icon: '/icons/alert.png', title: '智能联动控制', desc: '支持与空调、加湿器、新风系统等智能家居联动，自动调节至适宜温湿度（如冬季保持20-24℃，湿度40%-60%）' },
        { icon: '/icons/battery.png', title: '异常预警', desc: '高温/低温、高湿/干燥等异常状态实时提醒，避免老人中暑、感冒或关节不适' },
        { icon: '/icons/waterproof.png', title: '远程监控', desc: '数据同步至手机APP或养老管理平台，家属或护工可远程查看环境状态，及时干预' },
        { icon: '/icons/waterproof.png', title: '适老化设计', desc: '大屏显示温湿度数值，支持语音播报；超长续航或插电两用，安装简便（可壁挂或桌面放置）' },
        { icon: '/icons/waterproof.png', title: '健康数据分析', desc: '长期记录环境变化趋势，结合老人健康数据，提供个性化建议（如哮喘患者需保持湿度稳定）' },

      ],
      specifications: [
        { name: '产品尺寸', value: '70.0mmx70.0mmx25.0mm' },
        { name: '过程介质', value: '空气' },
        { name: '显示方式', value: '断码液晶' },
        { name: '供电方式', value: '4.5V电池供电' },
        { name: '待机电流', value: '小于30uA' },
        { name: '精度', value: '温度：±1℃   湿度：±1%RH' },
        { name: '监测角度', value: '波束方位宽度±60°、波束俯仰宽度±60°' },
        { name: '环境温度', value: '-10℃~60℃' }
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },


    '智能燃气报警器': {
      name: '智能燃气报警器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: ranqiImg,
      description: '智能燃气报警器 是一款专为老年人家庭设计的燃气安全监测设备，可实时检测室内天然气、液化石油气（LPG）、一氧化碳（CO）等可燃气体泄漏，并通过声光报警、手机推送、自动关阀等多重方式及时预警，有效预防燃气中毒、爆炸等安全事故，保障独居老人及家庭的生命财产安全。',
      features: [
        { icon: '/icons/accurate.png', title: '多气体高精度检测', desc: '采用半导体/电化学传感器，精准检测天然气、液化气、一氧化碳（部分型号支持），灵敏度高（±5%LEL），响应时间＜30秒' },
        { icon: '/icons/alert.png', title: '防误报设计', desc: '智能算法过滤厨房油烟、酒精等干扰气体，降低误报率' },
        { icon: '/icons/battery.png', title: '异常预警', desc: '高温/低温、高湿/干燥等异常状态实时提醒，避免老人中暑、感冒或关节不适' },
        { icon: '/icons/waterproof.png', title: '24小时实时监测', desc: '全时在线检测，低功耗设计，插电或电池供电（续航6-12个月），断电后仍可工作' },
        { icon: '/icons/waterproof.png', title: '适老化易用性', desc: '一键自检功能，大字体状态显示，语音播报提醒（如“燃气泄漏，请开窗通风”）' },
        { icon: '/icons/waterproof.png', title: '数据记录与分析', desc: '泄漏事件历史存储，可追溯风险发生时间及频率' },

      ],
      specifications: [
        { name: '产品尺寸', value: 'Φ65.0mmxH51.0mm' },
        { name: '通讯模式', value: 'NB-IOT通讯' },
        { name: '感应气体', value: '煤气、天然气、液化石油气' },
        { name: '报警浓度', value: '8%LEL' },
        { name: '蜂鸣器音量', value: '≥70dB' },
        { name: '工作电压', value: 'AC 100V-240V' },
        { name: '报警方式', value: '声光报警、输出报警信号' },
        { name: '环境温度', value: '-10℃~60℃' }
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },



    '智能红外传感器': {
      name: '智能红外传感器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: hongwaiImg,
      description: '智能红外传感器 是一款专为智慧养老场景设计的人体活动监测设备，采用被动红外（PIR）技术，可实时检测人体移动和存在状态，联动照明、安防、护理系统，实现无接触式智能守护。适用于独居老人安全监护、夜间起夜辅助、节能自动化等场景，有效降低意外风险，提升养老安全等级。',
      features: [
        { icon: '/icons/accurate.png', title: '精准人体感应', desc: '采用高灵敏度PIR传感器，检测范围可达 5-8米（可调），覆盖角度 120°，支持多级灵敏度调节，避免宠物、窗帘摆动等误触发' },
        { icon: '/icons/alert.png', title: '智能联动控制', desc: '触发后自动开启灯光、空调等设备（需配合智能家居系统），老人起夜时自动提供照明，防止跌倒' },
        { icon: '/icons/battery.png', title: '双模工作模式', desc: '移动检测模式：识别快速动作（如跌倒、突然起身），响应时间＜1秒。存在检测模式：持续监测静止状态（如长时间未移动），15分钟无活动触发提醒。' },
        { icon: '/icons/waterproof.png', title: '24小时实时监测', desc: '全时在线检测，低功耗设计，插电或电池供电（续航6-12个月），断电后仍可工作' },
        { icon: '/icons/waterproof.png', title: '适老化设计', desc: '支持语音播报提醒（如“检测到活动，已开灯”）' },
        { icon: '/icons/waterproof.png', title: '数据云端管理', desc: '活动记录同步至养老管理平台，生成行为分析报告，辅助健康评估' },

      ],
      specifications: [
        { name: '探测距离', value: '12m/25℃' },
        { name: '通讯模式', value: 'NB-IOT通讯' },
        { name: '工作电流', value: '小于100mA' },
        { name: '红外区域', value: '33，5' },
        { name: '覆盖面积', value: '12mx12m（39x39英尺）/90°' },
        { name: '工作电压', value: 'DC3V，1*CR123A锂电池' },
        { name: '定时布撤防', value: '支持在平台上设置一组定时布撤防时间' },
        { name: '安装方式', value: '挂壁安装' }
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },




    '智能门磁传感器': {
      name: '智能门磁传感器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: menciImg,
      description: '智能门磁传感器 是一款专为智慧养老场景设计的门窗状态监测设备，通过磁感应原理实时检测门窗的开合状态，并联动报警系统、智能家居和护理平台，有效预防老人走失、入侵盗窃等风险，同时辅助日常护理管理。适用于居家养老、养老机构、社区护理等多种场景，提升安全防护等级。',
      features: [
        { icon: '/icons/accurate.png', title: '高精度门磁感应', desc: '采用 霍尔传感器+磁铁 组合，检测精度高，响应时间＜1秒，支持 开/关状态 实时上报' },
        { icon: '/icons/alert.png', title: '多重报警机制', desc: '异常开启报警：非正常时间开门（如深夜）触发本地声光报警，并推送消息至家属/护工手机。 长时间未关闭提醒：门窗开启超过设定时间（如10分钟），提醒老人或护工注意' },
        { icon: '/icons/battery.png', title: '智能联动控制', desc: '开门自动开灯（夜间辅助照明）关门自动关闭空调/暖气（节能）与视频监控联动，异常开门时自动录像并保存证据' },
        { icon: '/icons/waterproof.png', title: '隐蔽安装，适老化设计', desc: '体积小巧（约 3cm×1.5cm），可隐藏式安装，不影响美观。支持 免打孔粘贴 或螺丝固定，适应不同门窗材质' },
        { icon: '/icons/waterproof.png', title: '数据云端管理', desc: '记录门窗开关历史，生成行为分析报告（如老人日常出入规律），辅助健康评估' },
      ],
      specifications: [
        { name: '外形规格', value: '发射器：100*32*22.4mm  磁条：55*12*16.5mm' },
        { name: '通讯模式', value: 'NB-IOT通讯' },
        { name: '工作电压', value: '3V（1*CR17450，使用寿命最长可达3年）' },
        { name: '报警输出', value: '上传报警信息至平台' },
        { name: '状态报告', value: '门磁正常工作后每24小时向平台发送一次工作状态报告' },
        { name: '工作环境', value: '温度-10℃~55℃，湿度小于95%RH' },
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },



    '智能水浸报警器': {
      name: '智能水浸报警器',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: shuijinImg,
      description: '智能水浸报警器 是一款专为养老场景设计的防水安全监测设备，采用高精度电极/光学传感技术，实时检测地面、管道等区域的漏水情况，及时发出声光报警并推送通知，有效预防因漏水引发的跌倒、电路短路等安全事故，保障老人居住环境安全',
      features: [
        { icon: '/icons/accurate.png', title: '高灵敏度水浸检测', desc: '采用 电极式/光学传感器，响应时间＜3秒，可检测 0.5mm以上 的积水深度。支持 多点检测（可选配扩展探头），覆盖卫生间、厨房、阳台等易漏水区域。' },
        { icon: '/icons/alert.png', title: ' 多重报警机制', desc: '本地报警：85dB蜂鸣器 + LED闪烁，提醒现场人员。远程通知：通过APP、短信、电话推送告警至家属或物业。' },
        { icon: '/icons/battery.png', title: '智能联动控制', desc: '漏水时自动关闭水管总阀（需联动智能水阀）。触发扫地机器人吸水（需兼容智能家居系统）' },
        { icon: '/icons/waterproof.png', title: '适老化设计', desc: '支持语音播报提醒（如"检测到漏水，请及时处理"）' },
        { icon: '/icons/waterproof.png', title: '云端数据管理', desc: '漏水事件记录存储，可追溯发生时间及频率，辅助维护决策。' },
      ],
      specifications: [
        { name: '产品尺寸', value: '80mm×60mm×25mm' },
        { name: '检测方式', value: '电极式/光学传感' },
        { name: '检测精度', value: '≥0.5mm水深' },
        { name: '报警方式', value: '声光报警+APP推送' },
        { name: '工作电压', value: '3V（电池）/5V（USB）' },
        { name: '通信协议', value: 'IP67' },
        { name: '工作温度', value: '-10℃~50℃' },
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },


    '无线紧急按钮': {
      name: '无线紧急按钮',
      subtitle: '24小时智能监测，守护老人安全',
      mainImage: jinjiannuiImg,
      description: '无线紧急按钮 是专为老年人设计的便携式紧急呼叫设备，采用一键触发机制，可在跌倒、突发疾病或遇到危险时快速发出求助信号，联动家属、护理人员或社区急救系统，实现24小时安全守护。适用于独居老人、养老院、社区养老等多种场景，大幅缩短救援响应时间。',
      features: [
        { icon: '/icons/accurate.png', title: '一键紧急呼叫', desc: '大按键设计（直径≥3cm），表面防滑，方便视力不佳或行动不便的老人操作。双向通话功能（部分型号）：触发后可与预设联系人实时对讲。' },
        { icon: '/icons/alert.png', title: ' 多重报警机制', desc: '本本地报警：≥90dB蜂鸣声 + LED闪烁，吸引周围注意。远程通知：通过Wi-Fi/4G/NB-IoT推送告警至家属APP、物业或养老平台。' },
        { icon: '/icons/battery.png', title: '便携防误触', desc: '挂绳式（悬挂于颈部），腕带式（类似手表），磁吸式（固定在床头/卫生间）' },
        { icon: '/icons/waterproof.png', title: '防误触设计', desc: '需长按2秒触发，避免意外报警。' },
        { icon: '/icons/waterproof.png', title: '适老化设计', desc: '防水防尘（IP65）：可佩戴洗澡、洗手。' },
        { icon: '/icons/waterproof.png', title: '智能定位功能', desc: 'GPS + LBS + Wi-Fi三重定位，误差＜50米，方便快速找到老人。' },

      ],
      specifications: [
        { name: '产品尺寸', value: '80mm×60mm×25mm' },
        { name: '检测方式', value: '电极式/光学传感' },
        { name: '检测精度', value: '≥0.5mm水深' },
        { name: '报警方式', value: '声光报警+APP推送' },
        { name: '工作电压', value: '3V（电池）/5V（USB）' },
        { name: '通信协议', value: 'IP67' },
        { name: '工作温度', value: '-10℃~50℃' },
      ],
      usageScenes: [
        { image: '/images/scenes/bedroom.jpg', title: '卧室使用' },
        { image: '/images/scenes/bathroom.jpg', title: '浴室使用' },
        { image: '/images/scenes/livingroom.jpg', title: '客厅使用' }
      ]
    },
  }

  return productDetails[productName] || {
    name: productName,
    subtitle: '产品详情',
    description: '暂无详细产品信息'
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const switchToProductTab = (item) => {
  activeName.value = item.label
}

</script>

<style scoped>
.device-title {
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.2;
  margin: 5vw 0 3vw 0;
}

.device-tabs {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
:deep(.el-tabs__item.is-active) {
  color: #ef203a;
}
:deep(.el-tabs__item:hover) {
  color: #ef203a;
}
.device-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  padding: 4rem 0 20rem 0;
  margin: 0;
  list-style: none;
}

.device-card {
  background: #fff;
  border-radius: 12px;
  /* box-shadow: 0 4px 16px rgba(0,0,0,0.08); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.device-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.device-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1.2rem;
}

.device-card p {
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

@media (max-width: 992px) {
  .device-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .device-title {
    font-size: 2rem;
  }

  .device-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .device-list {
    grid-template-columns: 1fr;
  }

  .device-card {
    padding: 1rem;
  }

  .device-card img {
    height: 140px;
  }
}
</style>
