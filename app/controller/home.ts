import { Controller, Context } from 'egg'

export default class HomeController extends Controller {
  constructor(ctx: Context) {
    super(ctx)
    this.getRequestPayload = ctx.helper.getRequestPayload
    this.stdout = ctx.helper.stdout
    this.stderr = ctx.helper.stderr
  }

  public async alive() {
    const { ctx } = this
    try {
      this.stdout(ctx, 'alive')
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  public async greet() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        name: 'string'
      }, payload)
      const data = await this.service.home.greet(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  public async isAdmin() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        name: 'string'
      }, payload)
      const data = await this.service.home.isAdmin(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }
}
