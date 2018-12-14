export default {
  getDemoData () {
    // 这里是模拟一下异步返回，正常使用时，访问对应的接口即可
    return new Promise((resolve) => {
      const data = {
        title: '这是一个列表',
        data: [
          { name: 'aa', value: 11 },
          { name: 'bb', value: 22 },
          { name: 'cc', value: 33 },
          { name: 'dd', value: 44 },
        ]
      };
      setTimeout(() => {
        resolve([undefined, data]);
      }, 500);
    });
  },
};
