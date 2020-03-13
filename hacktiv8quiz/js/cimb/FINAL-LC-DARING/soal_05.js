/*
========================================
HEROES REPORT
========================================

[INSTRUCTION]
Terdapat function heroesReport yang menerima sebuah parameter berupa array of object,
function akan mengeluarkan output berupa heroes yang sudah dikelompokkan berdasarkan Roles, Attribute dan Attack_Type

[EXAMPLE]
untuk contoh bisa dilihat dari testcase


[RULES]
- Dilarang menggunakan fungsi es 6 map , reduce, filter
- dilarang menggunakan Object.keys, dan for in

*/

var heroes = [
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: "Carry"
  },
  {
    id: 2,
    name: "npc_dota_hero_axe",
    localized_name: "Axe",
    primary_attr: "str",
    attack_type: "Melee",
    roles: "Initiator"
  },
  {
    id: 3,
    name: "npc_dota_hero_bane",
    localized_name: "Bane",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: "Disabler"
  },
  {
    id: 4,
    name: "npc_dota_hero_bloodseeker",
    localized_name: "Bloodseeker",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: "Carry"
  },
  {
    id: 5,
    name: "npc_dota_hero_crystal_maiden",
    localized_name: "Crystal Maiden",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: "Disabler"
  },
  {
    id: 6,
    name: "npc_dota_hero_drow_ranger",
    localized_name: "Drow Ranger",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: "Carry"
  }
]

function heroesReport(heroes) {
  //your code here
}

console.log(heroesReport(heroes))
// output

/*
  {
    Roles : {
      Carry: { 
        list: [ 'Anti-Mage', 'Bloodseeker', 'Drow Ranger' ], 
        total: 3 
      },
      Initiator: { 
        list: [ 'Axe' ], 
        total: 1 
      },
      Disabler: { 
        list: [ 'Bane', 'Crystal Maiden' ], 
        total: 3 
      }
    },
    Attribute: {
      agi: { 
        list: [ 'Anti-Mage', 'Bloodseeker', 'Drow Ranger' ], 
        total: 3 
      },
      str: { 
        list: [ 'Axe' ], 
        total: 1 
      },
      int: { 
        list: [ 'Bane', 'Crystal Maiden' ], 
        total : 2 
      }
    },
    Attack_Type: {
      Melee: { 
        list: [ 'Anti-Mage', 'Axe', 'Bloodseeker' ], 
        total: 3 
      },
      Ranged: { 
        list: [ 'Bane', 'Crystal Maiden', 'Drow Ranger' ], 
        total: 3 
      }
    }
  }

*/