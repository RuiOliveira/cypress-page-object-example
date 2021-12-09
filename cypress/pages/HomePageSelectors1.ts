
class HomePageSelectors1 {

  // @By.Text.Exact('Sign in') static loginPageLink: Selector;
  // @By.Class('nav-item', { eq: 3 }) static userInfoNavItem: Selector;
  // @By.Type('a', { parent: HomePageSelectors.userInfoNavItem }) static userInfoLink: Selector;
  // @By.Text.Partial('New Article') static newArticleButton: Selector;

  get loginPageLink(){
    return cy.contains('Sign in');
  } 

  get userInfoNavItem(){
    return cy.get('.nav-item').eq(3);
  }

  get userInfoLink(){
    return cy.get('.navbar a.nav-link').eq(3);
  }

  get newArticleButton(){
    return cy.contains('New Article');
  }  
}

export default new HomePageSelectors1();
