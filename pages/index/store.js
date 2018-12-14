import Store from 'herculex';
import service from '../../services/service-demo'

export default new Store({
  connectGlobal: true,
  state: {
    pageName: '首页'
  },
  getters: {
    // getIn 方法包含防空处理, getIn(context, 数据访问路径, 默认值)
    isDataReady: (state, getters, global) => !!global.getIn(['result']),
    title: (state, getters, global) => global.getIn(['result', 'title'], ''),
    demoList: (state, getters, global) => global.getIn(['result', 'data'], []),
    count: (state, getters) => getters.demoList.length,
  },
  plugins: [
    // 'logger',
  ],
  mutations: {
  },
  actions: {
  },
});
