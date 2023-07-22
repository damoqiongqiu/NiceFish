//@see https://angular.io/guide/workspace-config#alternate-build-configurations
import {dataURL} from "./data-url-config/mock-data-url";

//从 mock 文件加载数据，使用 mock 数据时，只有 get 型的请求可以正常返回假数据，其它所有请求都无效。
export const environment = {
    production: true,
    isMock:true,
    dataURL:dataURL
};
