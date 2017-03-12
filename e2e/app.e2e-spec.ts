import { BMGPmediaPage } from './app.po';

describe('bmgpmedia App', () => {
  let page: BMGPmediaPage;

  beforeEach(() => {
    page = new BMGPmediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
