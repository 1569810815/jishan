<template>
  <div class="product-detail">
    <div class="product-header">
      <h2>{{ product.name }}</h2>
      <p class="subtitle">{{ product.subtitle }}</p>
    </div>

    <div class="product-content">
      <!-- 产品主图 - 放大展示 -->
      <div class="product-main-image">
        <img :src="product.mainImage" :alt="product.name" class="main-image">
      </div>

      <!-- 产品简介 -->
      <div class="product-section">
        <h3>产品介绍</h3>
        <p class="description">{{ product.description }}</p>
      </div>

      <!-- 产品特点 - 改为竖向排列 -->
      <div class="product-section">
        <h3>产品特点</h3>
        <div class="features-horizontal">
          <div v-for="(feature, index) in product.features" :key="index" class="feature-item">
            <img :src="feature.icon" class="feature-icon">
            <div class="feature-text">
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 技术参数 -->
      <div class="product-section">
        <h3>技术参数</h3>
        <table class="spec-table">
          <tr v-for="(spec, index) in product.specifications" :key="index">
            <th>{{ spec.name }}</th>
            <td>{{ spec.value }}</td>
          </tr>
        </table>
      </div>

      <!-- 使用场景 - 图片放大展示 -->
      <div class="product-section">
        <h3>使用场景</h3>
        <div class="usage-gallery">
          <div v-for="(scene, index) in product.usageScenes" :key="index" class="scene-item">
            <img :src="scene.image" :alt="scene.title" class="scene-image">
            <p class="scene-title">{{ scene.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.product-header {
  text-align: center;
  margin-bottom: 40px;
}

.product-header h2 {
  font-size: 2.5rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
  font-weight: 300;
}

.product-main-image {
  margin: 30px 0 50px;
  text-align: center;
}

.main-image {
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.product-section {
  margin: 50px 0;
  padding: 0;
}

.product-section h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-radius: 4px;
  border-bottom: 2px solid #f0f0f0;
  padding-left: 1.25rem;
  border-left: 6px solid #ef203a;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.features-horizontal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  object-fit: contain;
}

.feature-text h4 {
  font-size: 1.2rem;
  font-weight: bolder;
  color: #000;
  margin: 0 0 20px 0;
}

.feature-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
}


.spec-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.spec-table th, .spec-table td {
  padding: 16px 20px;
  border: 1px solid #e0e0e0;
  text-align: left;
}

.spec-table th {
  background-color: #f9f9f9;
  width: 30%;
  font-weight: 500;
}


.usage-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.scene-item {
  display: flex;
  flex-direction: column;
}

.scene-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.scene-image:hover {
  transform: scale(1.02);
}

.scene-title {
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-top: 1.875rem;
  color: #444;
}

@media (max-width: 768px) {
  .product-header h2 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .main-image {
    max-height: 350px;
  }

  .feature-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  .feature-icon {
    width: 70px;
    height: 70px;
  }

  .spec-table th, .spec-table td {
    padding: 12px 15px;
    font-size: 0.95rem;
  }

  .usage-gallery {
    grid-template-columns: 1fr;
  }

  .scene-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .product-section h3 {
    font-size: 1.6rem;
  }

  .description {
    font-size: 1rem;
  }

  .feature-text h4 {
    font-size: 1.2rem;
  }

  .feature-text p {
    font-size: 1rem;
  }
}
</style>
