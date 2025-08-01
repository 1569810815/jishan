<template>
  <footer class="site-footer" :class="['footer', $attrs.class]">
    <div class="footer-container">
      <div class="company-info">
        <img src="../assets/Images/jishan1.png" alt="网站Logo" class="logo" />
        <h2 class="company-name">北京积善之家养老服务有限公司</h2>
        <p class="company-en-name">Beijing Jishanzhijia Elderly Care Service Co., Ltd</p>
        <p class="company-address">总部地址：北京市丰台区东高地小区积善之家康养中心</p>
        <p class="service-hotline">全国统一客服热线：400-900-1173</p>
      </div>

      <div class="footer-nav">
        <div class="nav-column">
          <h3 class="nav-title">业务与产品</h3>
          <ul>
            <li @click="router.push('/entityItems')">实体项目</li>
            <li @click="router.push('/coordination')">政企协同</li>
            <li @click="router.push('/escrowFranchise')">托管加盟</li>
            <li @click="router.push('/salesPlatform')">销售平台</li>
            <li @click="router.push('/ecologicalExpansion')">生态拓展</li>
            <li @click="router.push('/device')">智能硬件支持</li>
          </ul>
        </div>

        <div class="nav-column">
          <h3 class="nav-title">客户案例</h3>
          <ul>
            <li @click="router.push('/case')">服务流程</li>
            <li @click="router.push('/case')">经典案例</li>
          </ul>
        </div>

        <div class="nav-column">
          <h3 class="nav-title">新闻中心</h3>
          <ul>
            <li @click="router.push('/information')">新闻资讯</li>
            <li @click="router.push('/dynamic')">公司动态</li>
          </ul>
        </div>

        <div class="nav-column">
          <h3 class="nav-title">关于我们</h3>
          <ul>
            <li @click="router.push('/about')">关于积善</li>
            <li @click="router.push('/about')">核心技术</li>
            <li @click="router.push('/about')">合作伙伴</li>
            <li @click="router.push('/about')">资质荣誉</li>
            <li @click="scrollToAnchor('/about', 'contact')">联系我们</li>

          </ul>
        </div>
      </div>

      <div class="social-media">
        <h3 class="social-title">微信公众号</h3>
        <div class="qr-code-placeholder">
          <img src="../assets/Images/icon3.png" alt="二维码" />
        </div>
      </div>
    </div>

    <div class="copyright">
      <p>Copyright@2023 北京积善之家养老服务有限公司</p>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const scrollToAnchor = (path, anchorId) => {

  if (router.currentRoute.value.path === path) {
    const element = document.getElementById(anchorId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {

    router.push({ path: path, hash: `#${anchorId}` })
  }
}
</script>

<style scoped>
.site-footer {
  background-color: #ffc5c7;
  color: black;
  padding: 80px 0 20px;
  font-family: 'Arial', sans-serif;
}

.footer-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
  gap: 30px;
}

.company-info {
  flex: 1 1 300px;
  margin-bottom: 30px;
}

.logo {
  max-width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.company-name {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom:2rem;
  line-height: 1.3;
}

.company-en-name {
  font-size: 1rem;
  color: black;
  margin-bottom: 1.6rem;
  line-height: 1.5;
}

.company-address,
.service-hotline {
  font-size: 1.1rem;
  margin-top: 1.6rem;
  color: black;
  line-height: 1.5;
}

.footer-nav {
  flex: 2 1 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.nav-column {
  flex: 1 1 150px;
  margin-bottom: 30px;
}

.nav-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 5px;
  color: black;

}



.nav-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-column li {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
}

.nav-column li:hover {
  color: #ef203a;
}

.social-media {
  flex: 1 1 150px;
  text-align: center;
  margin-bottom: 30px;
}

.social-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
  color: black;

}

.qr-code-placeholder {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code-placeholder img {
  max-width: 100%;
  max-height: 100%;
}

.copyright {
  text-align: center;
  margin-top: 1.25rem;
  padding-top: 20px;
  font-size: .9rem;
  color: rgba(0, 0, 0, 0.6);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .footer-container {
    gap: 20px;
  }

  .company-name {
    font-size: 1.3rem;
  }

  .nav-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
  }

  .company-info,
  .footer-nav,
  .social-media {
    flex: 1 1 100%;
  }

  .footer-nav {
    justify-content: flex-start;
  }

  .nav-column {
    flex: 1 1 120px;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 30px 0 15px;
  }

  .company-name {
    font-size: 1.2rem;
  }

  .nav-column {
    flex: 1 1 100%;
  }

  .nav-title {
    margin-bottom: 0.8rem;
  }

  .nav-column li {
    margin-bottom: 10px;
  }
}
</style>
