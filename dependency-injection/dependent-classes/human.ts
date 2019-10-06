import { IEyeWear } from "../interface";

export class Human {
  private eyeWear: IEyeWear;

  constructor(eyeWear: IEyeWear) {
    this.eyeWear = eyeWear;
  }

  public speak(): string {
    return `I am human and ${this.eyeWear.wear()}.`;
  }
}
