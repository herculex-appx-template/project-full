import Store from './store';

App(Store({
  onLaunch(options) {
  },
  onShow(options) {
    console.log('app onShow', options);
  },
  onHide() {
    console.log('app onHide');
  },
  onError(msg) {
    console.log('app onError: ', msg);
  },
  globalData: {
  },
}));

