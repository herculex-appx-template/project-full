import store from './store';

Page(store.register({
  onLoad(options) {
    console.log('demo onLoad, options: ', options);
    this.dispatch('$global:loadData');
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

  goToAddDataPage () {
    my.navigateTo({
      url: '/pages/add-data/index'
    });
  },

}));
