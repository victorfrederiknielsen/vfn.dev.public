import { get } from '~/common/io'
import { cloneDeep } from 'lodash'

export const state = () => ({
  list: [],
  currentArticle: undefined
})

export const actions = {
  async getList({ commit }) {
    try {
      const response = await get('http://localhost:3000/dev/list')
      commit('setList', response.data.Items)
    } catch (error) {}
  },
  async getArticle({ commit }, id) {
    try {
      const { data } = await get(`http://localhost:3000/dev/get/${id}`)

      commit('setAricle', data)
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
