// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportHome from '../../../app/service/home';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    home: ExportHome;
  }
}
