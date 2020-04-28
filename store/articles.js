import { get } from '~/common/io'
import { cloneDeep } from 'lodash'

export const state = () => ({
  list: [],
  currentArticle: undefined
})

export const actions = {
  async getList({ commit }) {
    try {
      const response = await get('/data/articles_new.json')
      commit('setList', response.data)
    } catch (error) {}
  },
  async getArticle({ commit }, id) {
    try {
      const response = await get('/data/articles_new.json')
      const articles = response.data
      const article = articles.find(a => a.id === id)

      commit('setAricle', article)
    } catch (error) {}
  }
}

export const getters = {
  list({ list }) {
    return cloneDeep(list)
  },
  currentArticle({ currentArticle }) {
    return cloneDeep(currentArticle)
  }
}

export const mutations = {
  setList(state, articles) {
    state.list = articles
  },
  setAricle(state, article) {
    state.currentArticle = article
  }
}
