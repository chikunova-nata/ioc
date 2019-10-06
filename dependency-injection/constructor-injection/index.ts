import { Human } from '../dependent-classes/human';
import { VRBox } from '../dependent-classes/vr-box';
import { Glasses } from '../dependent-classes/glasses';
import { Lenses } from '../dependent-classes/lenses';
import { IEyeWear } from '../interface';

export class MainClass {
  private type: IEyeWear;

  constructor(type: IEyeWear) {
    if(!type) {
      throw new Error('Eye wear type is required');
    }

    this.type = type;
  }

  whoAmI(): void {
    const objHuman: Human = new Human(this.type);
    console.log(objHuman.speak());
  }
}

const color = 'silver';

const humanWithGlasses = new MainClass(new Glasses(color));
humanWithGlasses.whoAmI();

const humanWithLenses = new MainClass(new Lenses(color));
humanWithLenses.whoAmI();

const humanWithVRBox = new MainClass(new VRBox());
humanWithVRBox.whoAmI();
