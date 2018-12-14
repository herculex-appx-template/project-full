import { GlobalStore } from 'herculex';
import service from "./services/service-demo";

export default new GlobalStore({
  state: {
    result: null,
  },
  getters: {
  },
  plugins: ['logger'],
  mutations: {
    setListData (state, payload) {
      return state.setIn(['result', 'data'], payload);
    },
  },
  actions: {
    async loadData ({ commit }) {
      const [err, data] = await service.getDemoData();
      if (err) return;

      // 1. 如果对应的 mutation 存在，则调用
      // 2. 如果不存在（如下所示），则等价于 state.list = data;
      commit('setResult', { result: data });
    },

    addMoreData ({ state, commit }) {
      const newData = state.getIn(['result', 'data'], []).concat({ name: 'more', value: '666' });
      commit('setListData', newData);
    },
  },
});
