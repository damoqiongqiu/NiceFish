//@see https://angular.io/guide/workspace-config#alternate-build-configurations
import {dataURL} from "./data-url-config/mock-data-url";

//默认从 mock 文件加载数据，配置项在 angular.json 中
export const environment = {
  production: false,
  isMock:true,
  dataURL:dataURL
};
