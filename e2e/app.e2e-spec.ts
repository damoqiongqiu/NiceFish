import { NiceFish } from './app.po';

describe('NiceFish App', function() {
  let page: NiceFish;

  beforeEach(() => {
    page = new NiceFish();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
  });
});