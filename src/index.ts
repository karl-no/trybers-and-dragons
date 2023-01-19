import Battle, { PVP, PVE } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import getRandomInt from './utils';

// Criando personagens
const player1 = new Character('Seu Madruga');
const player2 = new Character('Lindomar \'Sub-Zero Brasileiro\'');
const player3 = new Character('Vovó Palmirinha');

for (let i = 0; i <= getRandomInt(1, 10); i += 1) {
  player1.levelUp();
}

// Criando monstros
const monster1 = new Monster();
const monster2 = new Dragon();

// Criando player versus player
const pvp = new PVP(player2, player3);

// Criando player versus environment
const enemies = [monster1, monster2];
const pve = new PVE(player1, enemies);

// Criando função runBattles
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};