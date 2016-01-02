describe('Test for the file-loader', function () {

  it('should load a html file as text', function () {
    return expect(Prestrify.load('test/file-loader/dummy.html')).to.eventually.equal('mock');
  });

  it('should load a js file and returns object reference', function () {
    return expect(Prestrify.load('test/file-loader/dummy.js')).to.eventually.deep.equal({});
  });

  it('should load a css stylesheet', function () {
    return expect(Prestrify.load('test/file-loader/dummy.css')).to.eventually.deep.equal({});
  });
});