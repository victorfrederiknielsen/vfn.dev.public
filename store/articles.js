import { get } from '~/common/io'
import { cloneDeep } from 'lodash'

export const state = () => ({
  list: [],
  currentArticle: undefined
})

export const actions = {
  async getList({ commit }) {
    try {
      const response = await get(
        `${process.env.BASE_URL}/${process.env.STAGE}/list`
      )
      commit('setList', response.data.Items)
    } catch (error) {}
  },
  async getArticle({ commit }, id) {
    try {
      const { data } = await get(
        `${process.env.BASE_URL}/${process.env.STAGE}/get/${id}`
      )

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
