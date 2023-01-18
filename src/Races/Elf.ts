import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  static numberOfHalfling = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.incrementHalfling();
  }

  static incrementHalfling() {
    this.numberOfHalfling += 1;
  }

  static createdRacesInstances() {
    return this.numberOfHalfling;
  }
}

export default Elf;