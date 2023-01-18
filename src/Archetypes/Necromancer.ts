import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static archetypeIntance = 0;
  private _damage: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this._damage = 'mana';
    Necromancer.archetypeIntance += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeIntance;
  }
}

export default Necromancer;