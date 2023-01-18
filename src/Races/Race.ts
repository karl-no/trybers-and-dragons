abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    if (this) {
      throw new Error('Not implemented');      
    }
    return 0;
  }
}

export default Race;