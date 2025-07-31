<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">
      <img src="../assets/Images/jishan1.png" alt="网站Logo" />
    </RouterLink>
    <ul class="nav-list">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-item"
        :class="{ 'has-dropdown': item.children }"
        @mouseenter="openIndex = index"
        @mouseleave="openIndex = null"
      >
        <RouterLink :to="item.src" class="nav-link">
          {{ item.Name }}
        </RouterLink>
        <ul
          v-if="item.children"
          class="dropdown-menu"
          v-show="openIndex === index"
        >
          <li v-for="child in item.children" :key="child.src">
            <RouterLink
              :to="child.src.includes('#') ? { path: child.src.split('#')[0], hash: '#'+child.src.split('#')[1] } : child.src"
              class="dropdown-link"
              @click="closeDropdown"
            >
              {{ child.Name }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const openIndex = ref(null);

const closeDropdown = () => {
  openIndex.value = null;
};

const navItems = ref([
  { Name: "首页", src: "/" },
  {
    Name: "主营业务",
    src: "/EntityItems",
    children: [
      { Name: "实体项目", src: "/EntityItems" },
      { Name: "政企协同", src: "/Coordination" },
      { Name: "托管加盟", src: "/EscrowFranchise" },
      { Name: "销售平台", src: "/SalesPlatform" },
      { Name: "生态拓展", src: "/EcologicalExpansion" },
      { Name: "智能硬件支持", src: "/device" },
    ],
  },
  { Name: "客户案例", src: "/case" },
  {
    Name: "新闻中心",
    src: "/information",
    children: [
      { Name: "新闻资讯", src: "/information" },
      { Name: "公司动态", src: "/dynamic" },
    ],
  },
  {
    Name: "关于我们", src: "/about",
    children: [
      { Name: "公司介绍", src: "/about" },
      { Name: "联系我们", src: "/about#contact" },
    ],
  },
  // {
  //   Name: "登录",
  //   src: "/individualLogin",
  //   children: [
  //     { Name: "个人登录", src: "/individualLogin" },
  //     { Name: "企业登录", src: "/enterpriseLogin" },
  //   ],
  // },
]);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vw;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  z-index: 1000;
}

.logo img {
  width: 8rem;
  object-fit: contain;
  margin-left: 0;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  margin: 0 2vw;
}

.nav-link {
  text-decoration: none;
  color: #222;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.8rem 0;
  position: relative;
  transition: color 0.3s;
  background: none;
}

.nav-link:hover,
.nav-link:focus,
.nav-link.active {
  color: #ef203a;
}

.nav-link:active {
  color: #ef203a;
}

.nav-link:focus {
  outline: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #ef203a;
  transform: scaleX(0);
  transition: transform 0.3s;
  transform-origin: right;
}

.nav-link:hover::after,
.nav-link:focus::after,
.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.has-dropdown:hover .dropdown-menu,
.has-dropdown:focus-within .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  z-index: 1001;
  padding: 8px 0;
}

.dropdown-link {
  display: block;
  padding: 12px 32px;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
  border-radius: 4px;
}

.dropdown-link:hover {
  background: #f5f5f5;
  color: #ef203a;
}
</style>
