//【看这里】protractor提供的语法请仔细看这里的文档
// http://www.protractortest.org

import { browser, element, by } from 'protractor';

describe('NiceFish App', function() {
  it('这是一个空的测试，什么都没干',()=>{
  	console.log("可以开始写测试用例了！");
  });

  //测试：当访问index.html的时候应该跳转到index.html#/phones这个路由
  it('should redirect index.html to index.html#/phones', function() {
	  //这里的browser对象是由Protractor提供的，大家可以把下面一行注释放开，看看这个对象的内容
	  //console.log(browser);
	  //首先利用browser.get()这个接口让浏览器打开app.index.html这个页面
	  browser.get('app/index.html');
	  //然后用browser.getLocationAbsUrl()获取到地址栏的URL，看看是不是转向了/phones这个路径
	  browser.getLocationAbsUrl().then(function(url) {
	      expect(url.split('#')[1]).toBe('/phones');
	  });
  });
});