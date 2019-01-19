import { EggAppConfig, EggAppInfo, PowerPartial, Context } from 'egg'
import * as URL from 'url'

export interface AppConfig {
  admin: string[]
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & AppConfig

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546159819648_4541'

  // add your egg config in here
  config.middleware = []

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.cors = {
    origin: (ctx: Context) => {
      const origin = ctx.get('origin')
      const host = URL.parse(origin).hostname || ''
      // 处理跨域的配置，之后配置了域名，也需要在这里填写对于跨域域名的处理
      if (host === 'localhost') {
        return origin
      } else {
        return ''
      }
    },
    credentials: true
  }

  config.admin = [
    'zhangyuchen'
  ]

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
