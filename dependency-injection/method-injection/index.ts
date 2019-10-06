import { Human } from '../dependent-classes/human';
import { VRBox } from '../dependent-classes/vr-box';
import { Glasses } from '../dependent-classes/glasses';
import { Lenses } from '../dependent-classes/lenses';
import { IEyeWear } from '../interface';

export class MainClass {
  whoAmI(type: IEyeWear): void {
    const objHuman: Human = new Human(type);
    console.log(objHuman.speak());
  }
}

const color = 'silver';

const humanWithGlasses = new MainClass();
humanWithGlasses.whoAmI(new Glasses(color));

const humanWithLenses = new MainClass();
humanWithLenses.whoAmI(new Lenses(color));

const humanWithVRBox = new MainClass();
humanWithVRBox.whoAmI(new VRBox());
