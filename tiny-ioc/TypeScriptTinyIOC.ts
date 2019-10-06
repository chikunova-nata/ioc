interface IInterfaceChecker {
  className: string;
  methodNames: string[];
}

class TypeScriptTinyIOC {

  static registeredClasses: any[] = [];

  static register(targetObject: any, interfaceType: IInterfaceChecker) {
    var interfaceToImplement = new InterfaceChecker(interfaceType);

    InterfaceChecker.ensureImplements(targetObject, interfaceToImplement);
    // will throw if not implemented
    if (InterfaceChecker.implementsInterface(targetObject,
      interfaceToImplement))
    {
      this.registeredClasses[interfaceType.className] = targetObject;
    }
  }

  static resolve(interfaceType: IInterfaceChecker): any {
    var resolvedInterface = this.registeredClasses[interfaceType.className];
    if (resolvedInterface == undefined)
      throw new Error("Cannot find registered class that implements "
        + " interface: " + interfaceType.className);
    return resolvedInterface;
  }

};
