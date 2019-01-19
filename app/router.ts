import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // 判断系统是否存活的接口
  router.get('/alive', controller.home.alive)

  // home
  router.get('/home/greet', controller.home.greet)
  router.get('/home/isAdmin', controller.home.isAdmin)
}
