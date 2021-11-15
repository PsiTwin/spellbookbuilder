cards.push({
    reveal: "",
    cost: "6",
    "data-cast": "6",
    "data-code": "lg1",
    "data-type": "equipment",
    "data-nature": "1",
    level: "1",
    name: "Chitin Armor",
    school: "Nature",
    subtype: "Armor",
    type: "Equipment"
}), card_data.lg1 = {
    attacks: [],
    text: "Mage gains Armor +2 and the Acid -3 trait.",
    traits: []
}, card_count.lg1 = {lg: 4, max: 6}, cards.push({
    reveal: "",
    cost: "3",
    "data-cast": "3",
    "data-code": "lg2",
    "data-type": "equipment",
    "data-war": "1",
    level: "1",
    name: "Gloves of Skill",
    school: "War",
    subtype: "Gloves",
    type: "Equipment"
}), card_data.lg2 = {
    attacks: [],
    text: "Once per round, this Mage may re-roll all of the attack dice (but not the effect die) of one ranged a ttack they make (including attack spells). If the attack action makes multiple attacks (such as a zone attack), this Mage must choose just one attack to re—roll.",
    traits: []
}, card_count.lg2 = {lg: 3, max: 6}, cards.push({
    reveal: "",
    cost: "5",
    "data-cast": "5",
    "data-code": "lg3",
    "data-type": "equipment",
    "data-nature": "2",
    "data-restriction": "Beastmaster",
    level: "2",
    name: "Hunting Spear",
    school: "Nature",
    subtype: "Weapon, Spear",
    type: "Equipment"
}), card_data.lg3 = {
    attacks: ["Quick", "Ranged", "Dice=4", "d12", "7+ = Cripple", "Piercing +2", "Quick", "Melee", "Dice=3", "d12", "10+ = Cripple", "Piercing +2"],
    text: "After making the Crippling Throw attack, return this to its owner’s spellbook unless you pay 5 mana.",
    traits: ["Beastmaster Only"]
}, card_count.lg3 = {lg: 2, max: 4}, cards.push({
    reveal: "",
    cost: "5",
    "data-cast": "5",
    "data-code": "lg4",
    "data-type": "equipment",
    "data-arcane": "1",
    "data-restriction": "Arcane",
    level: "1",
    name: "Mordok's Tome",
    school: "Arcane",
    subtype: "Tome",
    type: "Equipment"
}), card_data.lg4 = {
    attacks: [],
    text: "This Mage may choose one additional spell during the Planning Phase. This gives them an additional spell choice each round (it does not give them an additional spell action).",
    traits: ["Arcane Mage Only", "Legendary"]
}, card_count.lg4 = {lg: 2, max: 4}, cards.push({
    reveal: "",
    cost: "8",
    "data-cast": "8",
    "data-code": "lg5",
    "data-type": "equipment",
    "data-war": "2",
    level: "2",
    name: "Spiked Buckler",
    school: "War",
    subtype: "Shield, Defense",
    type: "Equipment"
}), card_data.lg5 = {
    attacks: ["Quick", "Melee", "Dice=3", "Piercing +1"],
    text: "Mage gains a Defense. Whenever this Defense successfully avoids an attack, Spiked Buckler’s attack gains the Counterstrike trait until the end of that attack sequence.",
    traits: ["Arcane Mage Only", "Legendary"]
}, card_count.lg5 = {lg: 4, max: 4}, cards.push({
    reveal: "4",
    cost: "2",
    "data-cast": "2",
    "data-code": "lg6",
    "data-type": "enchantment",
    "data-holy": "2",
    level: "2",
    name: "Circle of Light",
    school: "Holy",
    subtype: "Light, Barrier",
    type: "Enchantment"
}), card_data.lg6 = {
    attacks: ["Damage Barrier", "Light", "Dice=1", "d12", "5-10 = Daze; 11+ = Stun", "Ethereal", "Unavoidable", "+2 vs Nonliving Creatures"],
    text: "This creature gains a Damage Barrier.",
    traits: ["Magebind +2"]
}, card_count.lg6 = {lg: 4, max: 4}, cards.push({
    reveal: "X",
    cost: "2",
    "data-cast": "2",
    "data-code": "lg7",
    "data-type": "enchantment",
    "data-mind": "2",
    "data-restriction": "Mind",
    level: "2",
    name: "Confusion",
    school: "Mind",
    subtype: "Psychic",
    type: "Enchantment"
}), card_data.lg7 = {
    attacks: [],
    text: "When this creature declares a melee attack (including a counterstrike), roll the effect die. On a 7+, this creature randomly chooses an eligible target for its attack. X = Target creature’s Level.",
    traits: ["Mind Mage Only"]
}, card_count.lg7 = {lg: 2, max: 4}, cards.push({
    reveal: "3",
    cost: "2",
    "data-cast": "2",
    "data-code": "lg8",
    "data-type": "enchantment",
    "data-war": "1",
    level: "1",
    name: "Critical Strike",
    school: "War",
    subtype: "Command",
    type: "Enchantment"
}), card_data.lg8 = {
    attacks: [],
    text: "The first melee attack this creature makes each round gains the Piercing +3 trait.",
    traits: []
}, card_count.lg8 = {lg: 6, max: 6}, cards.push({
    reveal: "3",
    cost: "2",
    "data-cast": "2",
    "data-code": "lg9",
    "data-type": "enchantment",
    "data-dark": "1",
    level: "1",
    name: "Demonic Bloodlust",
    school: "Dark",
    subtype: "Curse, Psychic",
    type: "Enchantment"
}), card_data.lg9 = {
    attacks: [],
    text: " “This creature gains the Bloodthirsty +2 trait, and its melee attacks gain the Piercing +1 trait.",
    traits: []
}, card_count.lg9 = {lg: 6, max: 6}, cards.push({
    reveal: "4",
    cost: "2",
    "data-cast": "2",
    "data-code": "lg10",
    "data-type": "enchantment",
    "data-arcane": "2",
    level: "2",
    name: "Summoning Circle",
    school: "Arcane",
    subtype: "Portal",
    type: "Enchantment"
}), card_data.lg10 = {
    attacks: [],
    text: " “Whenever your Mage summons a friendly creature, they may choose to summon it to Summoning Circle’s zone instead of their own zone, regardless of range or LoS.",
    traits: []
}, card_count.lg10 = {lg: 4, max: 4}, cards.push({
    reveal: "",
    cost: "X",
    "data-cast": "X",
    "data-code": "lg11",
    "data-type": "incantation",
    "data-mind": "1",
    level: "1",
    name: "Clear Mind",
    school: "Mind",
    subtype: "Psychic",
    type: "Incantation"
}), card_data.lg11 = {
    attacks: [],
    text: "Remove as many psychic, Daze, or Stun conditions as you wish from the target, paying the removal cost for each one. Then, destroy as many revealed psychic enchantments from the target as you wish, paying the total mana cost (casting and reveal cost) for each one.",
    traits: []
}, card_count.lg11 = {lg: 6, max: 6}, cards.push({
    cost: "5",
    "data-cast": "5",
    "data-code": "lg12",
    "data-type": "attack",
    "data-holy": "1",
    level: "1",
    name: "Sunfire Burst",
    reveal: "",
    school: "Holy",
    subtype: "Light",
    type: "Attack"
}), card_data.lg12 = {
    attacks: ["Ranged", "Light", "Dice=2", "d12", "6-7 = Daze; 8+ = Daze & Stun", "Ethereal", "Unavoidable", "+2 vs Nonliving Creatures"],
    traits: []
}, card_count.lg12 = {lg: 6, max: 6}, cards.push({
    reveal: "",
    cost: "5",
    "data-cast": "5",
    "data-code": "lg13",
    "data-type": "equipment",
    "data-war": "1",
    level: "1",
    name: "Vorpal Blade",
    school: "War",
    subtype: "Weapon, Sword",
    type: "Equipment"
}), card_data.lg13 = {
    attacks: ["Quick", "Melee", "Dice=4", "Piercing +2"],
    text: "",
    traits: []
}, card_count.lg13 = {lg: 4, max: 4}, cards.push({
    reveal: "",
    cost: "3",
    "data-cast": "3",
    "data-code": "lg14",
    "data-type": "equipment",
    "data-water": "1",
    level: "1",
    name: "Waterfall Cloak",
    school: "Water",
    subtype: "Cloak, Hydro",
    type: "Equipment"
}), card_data.lg14 = {
    attacks: [],
    text: "This mage gains the Acid -2 trait. During the Upkeep phase, you may remove 1 Burn condition by paying 1 mana.",
    traits: []
}, card_count.lg14 = {lg: 4, max: 4}, cards.push({
    cost: "11",
    "data-cast": "11",
    "data-code": "lg15",
    "data-type": "creature",
    "data-war": "3",
    level: "3",
    name: "Dwarf Kriegshammer",
    reveal: "",
    school: "War",
    subtype: "Dwarf, Soldier",
    type: "Creature"
}), card_data.lg15 = {
    attacks: ["Quick", "Melee", "Dice=4", "Full", "Melee", "Dice=6", "d12", "9+ = Daze"],
    text: "",
    traits: ["Lightning +2"]
}, card_count.lg15 = {lg: 4, max: 4}, cards.push({
    cost: "20",
    "data-cast": "20",
    "data-code": "lg16",
    "data-type": "creature",
    "data-fire": "6",
    level: "6",
    name: "Fire Elemental",
    reveal: "",
    school: "Fire",
    subtype: "Flame, Elemental",
    type: "Creature"
}), card_data.lg16 = {
    attacks: ["Quick", "Melee", "Flame", "Dice=5", "d12", "5-8+ = Burn, 9+ = 2 Burn", "Defrost", "Damage Barrier", "Dice=2", "d12", "5-8+ = Burn, 9+ = Burn & Daze", "Defrost", "Unavoidable"],
    text: "Hydro attacks gain the Ethereal trait against Fire Elemental",
    traits: ["Upkeep +1", "Hydro +2", "Incorporeal", "Nonliving", "Flame Immunity"]
}, card_count.lg16 = {lg: 4, max: 4}, cards.push({
    cost: "12",
    "data-cast": "12",
    "data-code": "lg17",
    "data-type": "creature",
    "data-holy": "3",
    "data-restriction": "Holy",
    level: "3",
    name: "Joseph Trublood, High Cleric",
    reveal: "",
    school: "Holy",
    subtype: "Cleric",
    type: "Creature"
}), card_data.lg17 = {
    attacks: ["Full", "Ranged", "Healing", "Dice=2", "Heal target Living Creature the ammount rolled", "Quick", "Melee", "Dice=3", "+2 vs Nonliving Creatures or Dark Creatures"],
    text: "Joseph Trublood gains Armor +2 against attacks from Nonliving Creatures or Dark Creatures",
    traits: ["Legendary", "Holy Mage Only"]
}, card_count.lg17 = {lg: 2, max: 4}, cards.push({
    cost: "13",
    "data-cast": "13",
    "data-code": "lg18",
    "data-type": "creature",
    "data-nature": "3",
    level: "3",
    name: "Kumanjaran Leopard",
    reveal: "",
    school: "Nature",
    subtype: "Animal, Cat",
    type: "Creature"
}), card_data.lg18 = {
    attacks: ["Quick", "Melee", "Dice=3", "Piercing +1", "Quick", "Melee", "Dice=3", "Doublestrike"],
    text: "",
    traits: ["Elusive"]
}, card_count.lg18 = {lg: 4, max: 4}, cards.push({
    cost: "15",
    "data-cast": "15",
    "data-code": "lg19",
    "data-type": "creature",
    "data-earth": "2",
    "data-fire": "2",
    level: "4",
    name: "Magma Golem",
    reveal: "",
    school: "Earth, Fire",
    subtype: "Golem",
    type: "Creature"
}), card_data.lg19 = {
    attacks: ["Quick", "Melee", "Flame", "Dice=4", "d12", "7-10+ = Burn, 11+ = 2 Burn", "Defrost"],
    text: "Magma Golem is immune to flame damage. At the beginning of each Upkeep phase place a Burn condition on Magma Golem. Magma Golem's Burn conditions damage all other creatures in it's zone. X=number of Burn conditions on Magma Golem",
    traits: ["Armor -X", "Frost +X", "Nonliving", "Psychic Immunity", "Slow", "Uncontainable"]
}, card_count.lg19 = {lg: 4, max: 4}, cards.push({
    cost: "9",
    "data-cast": "9",
    "data-code": "lg20",
    "data-type": "creature",
    "data-holy": "2",
    level: "2",
    name: "Messenger of Bim-Shalla",
    reveal: "",
    school: "Holy",
    subtype: "Angel, Cleric",
    type: "Creature"
}), card_data.lg20 = {
    attacks: ["Quick", "Melee", "Light", "Dice=2", "Ethereal", "+2 vs Nonliving Creatures"],
    text: "When Messenger of Bim-Shalla is summoned, you mah heal a friendly Living creature within 1 zone the ammount rolled on 4 attack dice.",
    traits: ["Aegis 1", "Flying"]
}, card_count.lg20 = {lg: 4, max: 4}, cards.push({
    cost: "8",
    "data-cast": "8",
    "data-code": "lg21",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Mountain Ram",
    reveal: "",
    school: "Nature",
    subtype: "Animal, Bovid",
    type: "Creature"
}), card_data.lg21 = {
    attacks: ["Quick", "Melee", "Dice=2", "d12", "9+ = Push", "+2 vs Corporeal Conjurations"],
    text: "If Mountain Ram's Battering Horns attack gains a Charge bonus, then it may also add +3 to its effect die roll.",
    traits: ["Charge +2", "Frost -2"]
}, card_count.lg21 = {lg: 4, max: 4}, cards.push({
    cost: "19",
    "data-cast": "19",
    "data-code": "lg22",
    "data-type": "creature",
    "data-war": "5",
    level: "5",
    name: "Titanodon",
    reveal: "",
    school: "War",
    subtype: "Animal, Elephant",
    type: "Creature"
}), card_data.lg22 = {
    attacks: ["Quick", "Melee", "Dice=5", "+2 vs Corporeal Conjurations", "Stomp", "Melee", "Dice=7"],
    text: "",
    traits: ["Slow", "Unmovable", "Tough -3"]
}, card_count.lg22 = {lg: 4, max: 4}, cards.push({
    cost: "5",
    "data-cast": "5",
    "data-code": "lg23",
    "data-type": "creature",
    "data-dark": "1",
    level: "1",
    name: "Unstable Fire Imp",
    reveal: "",
    school: "Dark",
    subtype: "Demon",
    type: "Creature"
}), card_data.lg23 = {
    attacks: ["Quick", "Melee", "Dice=1", "d12", "9+ = Burn", "Zone", "Flame", "Dice=0", "5+ = Burn", "Unavoidable", "No Damage"],
    text: "Unstable Fire Imp only makes Blaazing Burst attack if it is attacked and destroyed.",
    traits: ["Flame -3"]
}, card_count.lg23 = {lg: 6, max: 6}, cards.push({
    cost: "16",
    "data-cast": "16",
    "data-code": "lg24",
    "data-type": "creature",
    "data-nature": "4",
    level: "4",
    name: "Woolly Rhinoceros",
    reveal: "",
    school: "Nature",
    subtype: "Animal, Rhinoceros",
    type: "Creature"
}), card_data.lg24 = {
    attacks: ["Quick", "Melee", "Dice=3", "Piercing +2", "Stomp", "Melee", "Dice=3"],
    text: "",
    traits: ["Frost -4", "Tough -2", "Charge +2"]
}, card_count.lg24 = {lg: 4, max: 4}, cards.push({
    cost: "7",
    "data-cast": "7",
    "data-code": "lg25",
    "data-type": "conjuration",
    "data-dark": "2",
    level: "2",
    name: "Altar of Infernia",
    reveal: "",
    school: "Dark",
    subtype: "Artifact",
    type: "Conjuration"
}), card_data.lg25 = {
    attacks: [],
    text: "All creatures lose, and cannote gain Melee +X traits. This does not affect Melee -X traits.",
    traits: ["Zone Exclusive", "Epic"]
}, card_count.lg25 = {lg: 2, max: 1}, cards.push({
    cost: "8",
    "data-cast": "8",
    "data-code": "lg26",
    "data-type": "conjuration",
    "data-war": "2",
    "data-restriction": "War",
    level: "2",
    name: "Ballista",
    reveal: "",
    school: "War",
    subtype: "War Machine",
    type: "Conjuration",
    errata: "Ballista starts with 1 Load token on it. Each Upkeep Phase place 1 Load token on it, to a maximum of 2. You must remove 2 Load tokens as a cost to make its attack."
}), card_data.lg26 = {
    attacks: ["Ranged", "Dice=5", "Piercing +3"],
    text: "Ballista starts with 1 Load token on it. Each Upkeep phase it may place 1 Load token on it, up to maximum of 2. Before or after any friendly Action Phase, you may remove 2 tokens to make its attack.",
    traits: ["Zone Exclusive", "Unique", "Flame +2", "War Mage Only"]
}, card_count.lg26 = {lg: 2, max: 4}, cards.push({
    cost: "6",
    "data-cast": "6",
    "data-code": "lg27",
    "data-type": "conjuration",
    "data-nature": "2",
    level: "2",
    name: "Meredia's Blessing",
    reveal: "",
    school: "Nature",
    subtype: "Statue, Artifact",
    type: "Conjuration"
}), card_data.lg27 = {
    attacks: [],
    text: "During each Upkeep Phase, if one Mage controls more Living objects than any other Mage, that Mage may heal a non—Mage Living object up to 2 points of damage. The same Mage may also remove 1 condition marker from a non—Mage Living object by paying its removal cost.",
    traits: ["Zone Exclusive", "Epic"]
}, card_count.lg27 = {lg: 2, max: 1}, cards.push({
    cost: "6",
    "data-cast": "6",
    "data-code": "lg28",
    "data-type": "conjuration",
    "data-mind": "2",
    "data-restriction": "Mind",
    level: "2",
    name: "Mind's Eye",
    reveal: "",
    school: "Mind",
    subtype: "Psychic, Projection",
    type: "Conjuration"
}), card_data.lg28 = {
    attacks: [],
    text: "Once per round, if your Mage or a Familiar you control casts a quick spell, during the Cast Spell Step you may choose to have that spell originate from Mind’s Eye, which becomes the source of the spell. During the Upkeep Phase, you may move Mind’s Eye to an adjacent zone.",
    traits: ["Incorporeal", "Flying", "Mind Mage Only"]
}, card_count.lg28 = {lg: 2, max: 4}, cards.push({
    cost: "7",
    "data-cast": "7",
    "data-code": "lg29",
    "data-type": "conjuration",
    "data-air": "2",
    level: "2",
    name: "Wall of Poison Gas",
    reveal: "",
    school: "Air",
    subtype: "Cloud, Poison",
    type: "Conjuration - Wall"
}), card_data.lg29 = {
    attacks: ["Melee", "Dice=3", "d12", "5-9 = Daze, 10+ = Cripple", "Unavoidable", "Critical Damage"],
    text: "",
    traits: ["Incorporeal", "Wind +2", "Extendable"]
}, card_count.lg29 = {lg: 4, max: 4};