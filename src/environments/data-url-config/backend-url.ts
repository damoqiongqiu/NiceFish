/**
 * 服务端接口路径配置。
 * lodash 提供的模板字符串工具方法，可以将字符串中的 <%= %> 替换为指定的值，与传统的 JSP 标签用法非常类似。
 * @see https://lodash.com/docs/4.17.15#template
 * back-end-url.ts 与 mock-data-url.ts 中的配置项 key 必须完全一致。
 * 这些配置项会被 environment.* 中的 dataURL 属性引用。所有 *.service.ts 文件中的请求路径都会从 environment.* 中的 dataURL 属性中获取。
 * 这样可以方便在开发环境和生产环境中切换数据源，例如：
 * ng serve --configuration development-backend 将会启动带有服务端数据的开发环境。
 * ng serve --configuration development-mock 将会启动带有 mock 数据的开发环境。
 * 这些配置项的细节请参考 environment.*.ts 以及 angular.json 中的配置，angular 官网上有详细的说明，
 * @see https://angular.io/guide/workspace-config#alternate-build-configurations
 */
export const dataURL = {
    postListURL:"/cms/post/post-list/<%= page %>",
    postDetailURL:"/cms/post/post-detail/<%= id %>",
    postTableURL:"/cms/post/manage/post-table/<%= page %>",
    delPostURL:"/cms/post/manage/del-post/<%= id %>",
    capchaURL:"auth/captcha/captchaImage?type=math",
    signInURL:"/auth/shiro/login",
    signOutURL:"/auth/shiro/logout",
    getSessionUserURL:"/auth/user/getSessionUser",
    testEmailURL:"",
    signUpURL:"/auth/user/register",
    commentListURL:"/cms/comment/manage/comment-table/<%= page %>",
    delCommentURL:"/cms/comment/manage/delete/<%= id %>",
    userListURL:"/auth/user/list2/<%= page %>",
    delUserURL:"/auth/user/delete2/<%= id %>",
    roleTableURL:"/auth/role/list2/<%= page %>",
    delRoleURL:"/auth/role/delete2/<%= id %>",
    permissionTableURL:"/auth/permission/list2/<%= page %>",
    delPermissionURL:"/auth/permission/delete2/<%= id %>",
    sendEmailURL:"",
    getSysParamsURL:"/cms/param/all",
    commentListByPostIdURL:"/cms/comment/post-id/<%= postId %>/page/<%= page %>",
    writeCommentURL:"/cms/comment/write-comment",
};