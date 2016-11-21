import { Angular2BootstrapSassPage } from './app.po';

describe('angular2-bootstrap-sass App', function() {
  let page: Angular2BootstrapSassPage;

  beforeEach(() => {
    page = new Angular2BootstrapSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
