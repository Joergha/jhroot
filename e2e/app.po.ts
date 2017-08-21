import { browser, by, element } from 'protractor';

export class JhrootPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    let str

    str = element(by.className('mdl-layout-title')).getText();
    return str
  }
}
