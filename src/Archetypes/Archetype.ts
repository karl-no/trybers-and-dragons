import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) { }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    if (this) {
      throw new Error('Not implemented');
    }
    return 0;
  }
}

export default Archetype;