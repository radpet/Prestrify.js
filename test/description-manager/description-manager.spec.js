describe('Test for the description-manager', function () {
  before(function () {
    var registry = Prestrify.getRegistry();
  });

  it('should add config object to the plugin registry', function () {
    Prestrify.add('test', {
      'test': 'test'
    });
    expect(Prestrify.getRegistry()).to.deep.equal({
      test: [{test: 'test'}]
    });
  });
});