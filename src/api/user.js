import request from '@/utils/request'

export function userlist(token) {
  return request({
    url: '/userlist',
    method: 'get',
    params: { token }
  })
}
