import 'egg'
import ExtendHelper from './app/extend/helper'
import { Connection } from 'typeorm'

declare module 'egg' {
  interface Application {
    typeorm: Connection
  }

  interface Controller {
    getRequestPayload: typeof ExtendHelper.getRequestPayload,
    stdout: typeof ExtendHelper.stdout,
    stderr: typeof ExtendHelper.stderr,
  }
}
