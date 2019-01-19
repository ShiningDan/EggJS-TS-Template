import { Application } from 'egg'
import { createConnection } from 'typeorm'

// 应用启动自定义入口
export default async (app: Application) => {
  // Mount Typeorm
  if (app.config.typeorm) {
    await mountTypeorm(app)
    app.logger.info('----------- TypeORM Mount Success -------------')
  }
}

const mountTypeorm = async (app: Application) => {
  const config = app.config.typeorm
  // console.log(config)
  app.typeorm = await createConnection(config)
}
