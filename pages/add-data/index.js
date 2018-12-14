import store from './store';

Page(store.register({
  onLoad(options) {
    console.log('demo onLoad, options: ', options);
  },
  onReady() {
    console.log('demo onReady');
  },
  onShow() {
    console.log('demo onShow');
  },
  onHide() {
    console.log('demo onHide');
  },
  onUnload() {
    console.log('demo onUnload');
  },

  handleAddMore () {
    this.commit('updateNewAddCount', { newAddCount: this.state.newAddCount + 1 });
    this.dispatch('$global:addMoreData');
  }

}));
