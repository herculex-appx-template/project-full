import Store from 'herculex';

export default new Store({
  connectGlobal: true,
  state: {
    newAddCount: 0,
    pageName: '添加页',
  },
  getters: {
    isDataReady: (state, getters, global) => !!global.getIn(['result']),
    count: (state, getters, global) => global.getIn(['result', 'data'], []).length,
  },
  plugins: [
    // 'logger',
  ],
  mutations: {

  },
  actions: {

  },
});
