import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private _enemy: (Fighter | SimpleFighter)[],
  ) {
    super(_character);
  }

  fight(): number {
    while (
      this._character.lifePoints > 0
      && this._enemy.every(({ lifePoints }) => 
        lifePoints > 0)
    ) {
      this._enemy.forEach((e) => {
        this._character.attack(e);
        e.attack(this._character);
      });
    }
    return super.fight();
  }
}

export default PVE;