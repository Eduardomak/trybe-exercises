const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random()*(dragon.strength - 15)) + 1;
const warriorDamage = () => {
  return Math.floor(Math.random()*(warrior.strength * warrior.weaponDmg - warrior.strength )) + 1;
}
const mageDamageManaSpent = (intelligence, mana) => {
  return {
    dano: function dmg() {
      Math.floor(Math.random()*(mage.intelligence)) + 1
    },
    manaGasta: (turns) => { 
      let manaConsumption = 0;
      if(mage.mana - manaConsumption * turns >= 15) {
        manaConsumption += 15;
      } 
      return manaConsumption;
    }
  }
}
function dmg(turns) {
  let dmg = 0;
  let manaConsumption = 0;
  if (mage.mana - mageDamageManaSpent.manaGasta <= 15) {

  }
}