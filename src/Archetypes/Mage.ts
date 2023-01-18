import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static archetypeIntance = 0;
  private _damage: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this._damage = 'mana';
    Mage.archetypeIntance += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeIntance;
  }
}

export default Mage;