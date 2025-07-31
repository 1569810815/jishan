<template>
  <div class="home7">
    <h2>全新的客户成功模式：以客户为中心，持续创造价值</h2>
    <p>以客户成功服务、客户支持服务、专业实施服务为核心，助力客户养老业务的成功</p>
    <div class="model">
      <p class="text">积善之家养老</p>
      <ul>
        <li v-for="(item, index) in comparisonItems" :key="index">
          <div>
            <h2>0{{ item.id }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue'



const comparisonItems = ref([
  {id:1,text:'主动服务'},
  {id:2,text:'客户需求驱动，提前发现问题并解决'},
  {id:3,text:'问题并解决顾问服务'},
  {id:4,text:'即时需求响应'},
  {id:5,text:'行业资源足，不定期行业培训，邀请专家开讲'},
  {id:6,text:'持续升级迭代功能适配度佳'},
  {id:7,text:'服务涵盖客户全周期，涉及多团队合作'},

])

</script>

<style scoped>
.home7 {
  width: 100vw;
  min-height: 100vh;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
  padding-top: 6.25vw;
}
h2{
  font-size: 2.2vw;
  color: #222;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 1.2vw;
  letter-spacing: 0.12em;
  text-align: center;
  text-shadow: 0 0.13em 0.33em rgba(239,32,58,0.08);
  line-height: 1.1;
  word-break: break-all;
}
.home7 h3 {
  font-size: 1.8vw;
  color: #222;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1vw;
  letter-spacing: 0.12em;
  text-align: center;
  line-height: 1.1;
  word-break: break-all;
}

.home7 > p {
  font-size: 1.1vw;
  color: #666;
  margin-bottom: 1vw;
  margin-top: 2.5rem;
  text-align: center;
  line-height: 1.7;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw 2vw;
  word-break: break-all;
}

.model {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
    background-image: url('@/assets/Images/home7bg.png');
  background-size: 35%;
  background-position:50% 15%;
  background-repeat: no-repeat;
}
.text {
  position: absolute;
  font-size: 1.5vw;
  color: #fff;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  position: absolute;
  top: 25vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.model ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  /* gap: 4.5vw 0vw; */
  list-style: none;
  padding: 0;
  margin: 0;
}

.model li {
  background-image: url('@/assets/Images/home7juxing.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-bottom: 35%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}


.model li:nth-child(1) { grid-area: 1 / 1; }
.model li:nth-child(2) { grid-area: 2 / 1; }
.model li:nth-child(3) { grid-area: 3 / 1; }
.model li:nth-child(4) { grid-area: 3 / 2; }
.model li:nth-child(5) { grid-area: 3 / 3; }
.model li:nth-child(6) { grid-area: 2 / 3; }
.model li:nth-child(7) { grid-area: 1 / 3; }

.model li.empty {
  visibility: hidden;
}

.model li h2 {
  font-family: "AlibabaPuHuiTiR", sans-serif;
  font-size: 1.5vw;
  display: inline;
  color: #ef203a;
  margin-bottom: 1rem;
  font-weight: bold;
}
.model li div{
  text-align: center;
  padding-top: 7vw;
}
.model li p {
  font-size: .8vw;
  font-weight: 700;
  color: #333;
  line-height: 1.6;
  margin: 0;

}

@media (max-width: 768px) {
  .model ul {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .model li {
    grid-area: auto !important;
    min-height: 150px;
  }

  .home7 h2 {
    font-size: 1.8rem;
  }

  .home7 > p {
    font-size: 1rem;
  }
}
</style>
