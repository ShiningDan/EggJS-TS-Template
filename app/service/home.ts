import { Service, Context } from 'egg'
import { GreetingModel } from '../model'

export default class Home extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }

  public async greet({ name }: { name: string }): Promise<string> {
    const { app } = this
    const greetingRepository  = app.typeorm.getRepository(GreetingModel)
    const user = await greetingRepository.findOne({
      name
    })
    if (!user) {
      return 'Hello Anonymous'
    }
    return `Hello ${user.greeting}`
  }

  public async isAdmin({ name }: { name: string}): Promise<boolean> {
    const { app } = this
    if (app.config.admin.includes(name)) {
      return true
    }
    return false
  }
}
