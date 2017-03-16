import { W7D4L2Page } from './app.po';

describe('w7-d4-l2 App', () => {
  let page: W7D4L2Page;

  beforeEach(() => {
    page = new W7D4L2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
