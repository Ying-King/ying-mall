import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';

// 获取热门搜索数据--jsonp
export const getSearchHotKeyword = () => {
  const url = 'https://wq.jd.com/bases/searchhotword/GetHotWords?_=1564995925786';
  const params = {
    sceneval: 2
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    console.log(res);
    if (res && res.owner) { // succeed
      return res.owner;
    }
    console.log(res);
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};

// 获取搜索结果数据--jsonp
export const getSearchResult = keyword => {
  const url = 'https://suggest.taobao.com/sug';
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  };

  // jsonpOptions.timeout = 100;

  return jsonp(url, params, jsonpOptions).then(res => {
    // console.log(res);
    if (res.result) {
      // console.log(res);
      return res.result;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
