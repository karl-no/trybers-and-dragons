import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static archetypeIntance = 0;
  private _damage: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this._damage = 'stamina';
    Ranger.archetypeIntance += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeIntance;
  }
}

export default Ranger;