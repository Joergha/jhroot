import { JhrootPage } from './app.po';

describe('jhroot App', () => {
  let page: JhrootPage;

  beforeEach(() => {
    page = new JhrootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
