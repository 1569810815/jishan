<template>
  <div id="map-container" style="width: 100%; height: 500px;"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

// 声明 AMap 类型

let AMap = window.AMap;


const props = defineProps({
  lat: Number,
  lng: Number,
  addressList: {
    type: Array,
    default: () => []
  },
  activeIndex: {
    type: Number,
    default: 0
  }
});

const map = ref(null);
const markers = ref([]);

const initMap = async () => {
  try {
    // 这里重新赋值 AMap
    AMap = await AMapLoader.load({
      key: 'f41a6d629b7fbf3aeb0fd6c9133dcad0',
      version: '2.0',
      plugins: ['AMap.ToolBar', 'AMap.Scale'],
    });

    map.value = new AMap.Map('map-container', {
      viewMode: '2D',
      zoom: 13,
      center: [props.lng, props.lat],
    });

    // 添加控件
    map.value.addControl(new AMap.ToolBar());
    map.value.addControl(new AMap.Scale());

    updateMarkers();
  } catch (err) {
    console.error('地图加载失败:', err);
  }
};

const updateMarkers = () => {
  if (!AMap) return;

  // 清除旧标记
  markers.value.forEach(marker => {
    map.value?.remove(marker);
  });
  markers.value = [];

  // 添加新标记
  props.addressList.forEach((address, index) => {
    const marker = new AMap.Marker({
      position: [address.lng, address.lat],
      map: map.value,
      label: {
        content: `
          <div style="display: flex; align-items: center; background: white; padding: 4px 8px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
            <span>${address.name}</span>
            <span style="margin-left: 5px; cursor: pointer;" onclick="window.open('https://uri.amap.com/marker?position=${address.lng},${address.lat}&name=${encodeURIComponent(address.name)}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1890ff"/>
              </svg>
            </span>
          </div>
        `,
        direction: 'bottom'
      },
      zIndex: index === props.activeIndex ? 100 : 10,
      extData: { id: index }
    });

    if (index === props.activeIndex) {
      marker.setIcon(new AMap.Icon({
        size: new AMap.Size(36, 36),
        image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
      }));
      map.value?.setCenter([address.lng, address.lat]);
    }

    markers.value.push(marker);
  });
};

watch(() => props.activeIndex, (newVal) => {
  if (map.value && props.addressList[newVal]) {
    const address = props.addressList[newVal];
    map.value.setCenter([address.lng, address.lat]);
    updateMarkers();
  }
});

watch(() => props.addressList, updateMarkers, { deep: true });

onMounted(initMap);
</script>
