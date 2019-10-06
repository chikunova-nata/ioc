import 'reflect-metadata';
export const Service = (): Function => {

  return (target: Function) => {
    console.log('target:', target);
    console.log(Reflect.getMetadata('design:paramtypes', target));
  };
};
