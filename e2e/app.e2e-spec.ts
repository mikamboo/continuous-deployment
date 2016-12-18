import { ContinousDeploymentPage } from './app.po';

describe('continous-deployment App', function() {
  let page: ContinousDeploymentPage;

  beforeEach(() => {
    page = new ContinousDeploymentPage();
  });

  it('should display message saying Angular 2 CD', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 2 CD');
  });
});
