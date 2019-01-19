import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}

  config.typeorm = {
    type: 'mysql',
    entityPrefix: 'local_',
    charset: 'utf8mb4',
    host: 'cdb-fvy0fdr4.bj.tencentcdb.com',
    port: '10047',
    username: 'root',
    password: 'aVfXoj2UAVTiVj',
    database: 'test',
    connectTimeout: 60000,
    synchronize: true,
    logging: false,
    entities: ['app/model/**/*.ts'],
    migrations: ['app/migration/**/*.ts'],
    subscribers: ['app/subscriber/**/*.ts']
  }
  return config
}
