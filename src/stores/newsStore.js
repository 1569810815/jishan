import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    currentNews: null
  }),
  actions: {
    setCurrentNews(news) {
      this.currentNews = news
    }
  }
})
