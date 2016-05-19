describe('eriApp', function() {
  it('page blah blah', function() {
    browser.get('/');
    $('#menu-welcome').click();
    expect(current_path).toContain('welcome');
  });

  var templateSelect = element(by.model('template'));
  var includeElem = element(by.css('[ng-include]'));

  it('should load welcome.html', function() {
    expect(includeElem.getText()).toMatch(/Content of welcome.html/);
  });
  //
  // it('should load template2.html', function() {
  //   if (browser.params.browser == 'firefox') {
  //     return;
  //   }
  //   templateSelect.click();
  //   templateSelect.all(by.css('option')).get(2).click();
  //   expect(includeElem.getText()).toMatch(/Content of template2.html/);
  // });

})
