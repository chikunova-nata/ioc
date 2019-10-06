import { Container } from './Container';

const container = new Container();

const singleton = class SingletonClass {
  value;
  constructor() {
    this.value = 1;
  }
};

const dummy = class Dummy {
  singleton;
  constructor(singleton) {
    this.singleton = singleton;
  }
};

container.register('singleton', singleton);
container.register('dummy', dummy, ['singleton']);

const dummyInstance = container.resolve('dummy');
dummyInstance.singleton.value = 2;

const dummyInstance2 = container.resolve('dummy');
