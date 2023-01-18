import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static archetypeIntance = 0;
  private _damage: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this._damage = 'stamina';
    Warrior.archetypeIntance += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeIntance;
  }
}

export default Warrior;