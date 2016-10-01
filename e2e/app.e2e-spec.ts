import { MmmPage } from './app.po';

describe('mmm App', function() {
  let page: MmmPage;

  beforeEach(() => {
    page = new MmmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
