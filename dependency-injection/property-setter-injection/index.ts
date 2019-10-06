import { Human } from '../dependent-classes/human';
import { VRBox } from '../dependent-classes/vr-box';
import { Glasses } from '../dependent-classes/glasses';
import { Lenses } from '../dependent-classes/lenses';
import { IEyeWear } from '../interface';

export class MainClass {
  private readonly color = "silver";
  private glassesType: IEyeWear  = new Glasses(this.color);
  private lensesType: IEyeWear = new Lenses(this.color);
  private vrboxType: IEyeWear = new VRBox();

  whoAmI(): void {
    const humanWithGlasses: Human = new Human(this.glassesType);
    console.log(humanWithGlasses.speak());

    const humanWithLenses: Human = new Human(this.lensesType);
    console.log(humanWithLenses.speak());

    const humanWithVRBox: Human = new Human(this.vrboxType);
    console.log(humanWithVRBox.speak());
  }
}

const human = new MainClass();
human.whoAmI();
