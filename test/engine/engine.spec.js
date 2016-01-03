var config = {};

describe('Tests for PrestrifyEngine', function () {

  it('should create presentation template', function () {
    var engine = new PrestrifyEngine(config);
    expect(engine.createPresentationTemplate()).to.equal('<div class="reveal"><div class="slides">{{{slides}}}</div></div>');
  });

  it('should create slide template', function () {
    var engine = new PrestrifyEngine(config);
    expect(engine.createSlideTemplate()).to.equal('<section>{{{slideContent}}}</section>');
  });

  it('should create slides data model', function () {
    var engine = new PrestrifyEngine(config);
    Prestrify.add('slide', {
      name: 'test2',
      order: '2',
      template: './content.html',
      controller: '',
      styles: []
    });

    Prestrify.add('slide', {
      name: 'test1',
      order: '1',
      template: 'test/engine/dummy.html',
      controller: '',
      styles: []
    });
    console.log(engine.getSlidesData());
  });

  it('should get slide data model', function (done) {
    var engine = new PrestrifyEngine(config);
    var slide = {
      name: 'mock',
      order: '1',
      template: 'test/engine/dummy.html',
      controller: 'test/engine/dummy.js',
      styles: []
    };
    engine.getSlideData(slide).then(function (data) {
      expect(data.template).to.equal('<div>Hello Test</div>');
      //TODO test controller callback how?
      done();
    });
  });


});

describe('Tests for TemplateCompiler', function () {

  it('should compile template', function () {

    var templateCompiler = new TemplateCompiler();

  });
});