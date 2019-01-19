// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGreeting from '../../../app/model/greeting';
import ExportIndex from '../../../app/model/index';

declare module 'egg' {
  interface IModel {
    Greeting: ReturnType<typeof ExportGreeting>;
    Index: ReturnType<typeof ExportIndex>;
  }
}
