class InterfaceChecker {
  name: string;
  methods: string[];

  constructor (object: IInterfaceChecker) {
    this.name = object.className;
    this.methods = [];
    var i, len: number;
    for (i = 0, len = object.methodNames.length; i < len ; i++) {
      this.methods.push(object.methodNames[i]);
    };
  }

  static ensureImplements(object: any, targetInterface: InterfaceChecker) {
    var i, len: number;
    for (i = 0, len = targetInterface.methods.length; i < len; i++) {
      var method: string = targetInterface.methods[i];
      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error("Function InterfaceChecker.ensureImplements: ' + 'object does not implement the "
          + targetInterface.name +
        " interface. Method " + method + " was not found");
      }
    }
  };
  static implementsInterface(object: any, targetInterface: InterfaceChecker) {
    var i, len: number;
    for (i = 0, len = targetInterface.methods.length; i < len; i++) {
      var method: string = targetInterface.methods[i];
      if (!object[method] || typeof object[method] !== 'function') {
        return false;
      }
    }
    return true;
  };
}
