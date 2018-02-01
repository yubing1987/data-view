import { DataViewPage } from './app.po';

describe('data-view App', () => {
  let page: DataViewPage;

  beforeEach(() => {
    page = new DataViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
