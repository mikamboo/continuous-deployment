import { ContinousDeploymentPage } from './app.po';

describe('continous-deployment App', function() {
  let page: ContinousDeploymentPage;

  beforeEach(() => {
    page = new ContinousDeploymentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
