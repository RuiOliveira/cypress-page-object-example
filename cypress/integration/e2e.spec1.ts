import * as faker from 'faker';
import { HomePage1 } from '../pages';
import HomePageSelectors1 from './../pages/HomePageSelectors1';

context('General flows', () => {
  const [title, description, content] = [faker.lorem.word(), faker.lorem.lines(1), `## ${faker.lorem.lines(1)}`];
  const tags = ['test tag 1', 'test tag 2'];

  it('should login to the application', () => {
    new HomePage1()
      .open()
      .goToLoginPage()
      .login();

    HomePageSelectors1.userInfoLink.should('have.text', 'cypress-test-user');
  });
});
