//@see https://angular.io/guide/workspace-config#alternate-build-configurations
import { dataURL } from './data-url-config/backend-url';

//从服务端加载数据
export const environment = {
    production: false,
    isMock:false,
    dataURL:dataURL
};
