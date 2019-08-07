import axios from 'axios';
import jsonp from '../assets/js/jsonp';
import {
  SUCC_CODE,
  TIMEOUT,
  HOME_RECOMMEND_PAGE_SIZE,
  jsonpOptions
} from './config';

// 打乱数组顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }

  return arr;
};

// 获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('https://ying-king.github.io/data-mock/ying-mall/slider-list.json', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (sliders.length === 0) {
        sliders = slider;
      }
      return sliders;
    }
    throw new Error('没有成功获取到数据！'); // 抛出错误
  }).catch(err => { // 捕获错误
    if (err) {
      console.log(err);
    }
    return [ // 处理错误
      {
        linkUrl: '',
        picUrl: require('../assets/img/404.png')
      }
    ];
  }).then(res => { // 模拟loading，一秒钟后才能得到数据
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};

// 获取热门推荐数据--jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      console.log(res);
      return res;
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
