export interface IDependency {
  definition: Function;
  dependencies?: string[];
}

export class Container {
  private servicesList = new Map<string, IDependency>();

  register(name: string, definition: Function, dependencies?: string[]) {
    this.servicesList.set(name, {definition: definition, dependencies: dependencies});
  }

  resolve(name: string) {
    const concreteDependency: IDependency = this.servicesList.get(name);

    if(this.isFunction(concreteDependency.definition)) {
      return this.createInstance(concreteDependency);
    } else {
      return concreteDependency.definition;
    }
  }

  private getDependencies(service: IDependency) {
    let classDependencies: IDependency[] = [];
    if(service.dependencies) {
      classDependencies = service.dependencies.map((dep: any) => this.resolve(dep));
    }
    return classDependencies;
  }

  private createInstance(service) {
    return new service.definition(...this.getDependencies(service));
  }

  private isFunction(definition: Function): boolean {
    return typeof definition === 'function';
  }
}
