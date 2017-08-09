import { WoonandezPage } from './app.po';

describe('woonandez App', () => {
  let page: WoonandezPage;

  beforeEach(() => {
    page = new WoonandezPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
