import { LoginPage, NewArticlePage } from '.';
import HomePageSelectors1 from './HomePageSelectors1';

class HomePage1 {
  open() {
    cy.visit('/');
    return this;
  }

  goToLoginPage(): LoginPage {
    HomePageSelectors1.loginPageLink.click();
    return new LoginPage();
  }

  goToNewArticlePage(): NewArticlePage {
    HomePageSelectors1.newArticleButton.click();
    return new NewArticlePage();
  }

  goToProfilePage() {
    HomePageSelectors1.userInfoLink.click();
  }

}

export { HomePage1 };
