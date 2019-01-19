import { Context } from 'egg'
import { omit } from 'lodash'

interface RequestPayload {
  [key: string]: any
}

const getRequestPayload = (ctx: Context): RequestPayload => {
  return { ...ctx.query, ...ctx.params, ...ctx.request.body }
}

const stdout = (ctx: Context, data: any) => {
  ctx.status = 200
  return (ctx.body = {
    status: 0,
    payload: getRequestPayload(ctx),
    data
  })
}

const stderr = (ctx: Context, err: Error) => {
  ctx.status = 200
  return (ctx.body = {
    status: -1,
    payload: getRequestPayload(ctx),
    data: null,
    message: err.message || '',
    error: omit(err, ['status'])
  })
}

const parse = payload => {
  try {
    if (typeof payload === 'string') {
      return JSON.parse(payload)
    }
    return payload
  } catch (err) {
    return {
      __error__: JSON.stringify(err)
    }
  }
}

export default {
  // 获得用户参数的统一封装
  getRequestPayload,
  // 正确输出的统一封装
  stdout,
  // 错误输出的统一封装
  stderr,
  // JSON.parse 的统一封装
  parse,
  // JSON.stringify 的统一封装
  stringify(payload): string {
    try {
      if ( typeof payload !== 'string') {
        return JSON.stringify(payload, null, 2)
      }
      return payload
    } catch (err) {
      return 'stringify error'
    }
  }
}
