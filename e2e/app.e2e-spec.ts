import { MetaphorphosisPage } from './app.po';

describe('metaphorphosis App', () => {
  let page: MetaphorphosisPage;

  beforeEach(() => {
    page = new MetaphorphosisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
