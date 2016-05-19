describe('eriApp', function() {
  it('page blah blah', function() {
    browser.get('/');
    $('#menu-welcome').click();
    expect(current_path).toContain('welcome');
  });

})
