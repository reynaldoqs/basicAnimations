import { AnimationsFullPage } from './app.po';

describe('animations-full App', () => {
  let page: AnimationsFullPage;

  beforeEach(() => {
    page = new AnimationsFullPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
