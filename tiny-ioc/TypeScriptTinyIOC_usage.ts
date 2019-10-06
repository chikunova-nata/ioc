interface IDrawable {
  centerOnPoint();
  zoom();
  draw(): string;
}

class IIDrawable implements IInterfaceChecker {
  className: string = 'IIDrawable';
  methodNames: string[] = ['centerOnPoint', 'zoom', 'draw'];
}

class TestImplementsIDrawable implements IDrawable {
  centerOnPoint() {
  };
  zoom() {
  };
  draw() : string {
    return 'drawn';
  };
}

// registration
var typeScriptTinyIoC = new TypeScriptTinyIOC();
TypeScriptTinyIOC.register(new TestImplementsIDrawable(), new IIDrawable());

// service location
var implementsIDrawable = TypeScriptTinyIOC.resolve(new IIDrawable());
expect(implementsIDrawable.draw()).toEqual("drawn");
