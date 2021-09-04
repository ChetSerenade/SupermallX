import {request} from "./request";

export function getShop() {
  return request({
    url: '/category'
  });
}

export function getShopInfo(maitKey) {
  return request({
    url:'/subcategory',
    params: {
      maitKey
    }
  })
}
