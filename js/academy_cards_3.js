function add_card(a) {
    var e = a.cast.split("+")[0], t = {
        academy: a.academy,
        cost: e,
        "data-cast": e,
        "data-code": a.code,
        "data-type": a.type.toLowerCase(),
        name: a.name,
        school: [],
        subtype: a.subtype.join(", "),
        type: a.type
    };
    for (set in -1 != a.cast.indexOf("+") && (t.reveal = a.cast.split("+")[1]), t["data-or-cost"] = -1 != a.schools.indexOf("|"), t.level = a.schools.split(t["data-or-cost"] ? "|" : "&").reduce((function (a, e, r, c) {
        return t.school.push(e.trim().split(" ")[0]), t["data-" + e.trim().split(" ")[0].toLowerCase()] = e.trim().split(" ")[1], t["data-or-cost"] ? e.trim().split(" ")[1] : a + parseInt(e.trim().split(" ")[1])
    }), 0), t.school = t.school.join(", "), cards.push(t), card_data[a.code] = {}, a.attack && (card_data[a.code].attack = a.attack), a.text && (card_data[a.code].text = a.text), a.traits && (card_data[a.code].traits = a.traits), card_count[a.code] || (card_count[a.code] = {max: 1 == t.level ? 6 : 4}), a.count) card_count[a.code][set] = a.count[set]
}

cards.push({
    academy: !0,
    cost: "5",
    "data-cast": "5",
    "data-code": "da01",
    "data-type": "attack",
    "data-water": "1",
    level: "1",
    name: "Acid Blast",
    school: "Water",
    subtype: "Acid",
    type: "Attack"
}), card_data.da01 = {
    attacks: ["Ranged", "Acid", "Dice=2", "9 = 2 Corrode", "Sweeping", "Unavoidable"],
    text: "When this attacks Assigns Effects place an additional corrode on the defender",
    traits: []
}, card_count.da01 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "3",
    "data-cast": "3",
    "data-code": "da02",
    "data-type": "conjuration",
    "data-nature": "1",
    level: "1",
    name: "Alluring Orchid",
    school: "Nature",
    subtype: "Plant, Flower, Vine",
    type: "Conjuration"
}), card_data.da02 = {
    attacks: [],
    text: "Enemy minor creatures in this zone must attack Alluring Orchid, if able. When Alluring Orchid is melee attacked, during the counterstrike step, place a Rot condition on the attacker. Flame attacks against Alluring Orchid role 2 additional dice.",
    traits: ["Living", "Regenerate 1"]
}, card_count.da02 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "3",
    "data-cast": "3",
    "data-code": "da03",
    "data-type": "equipment",
    "data-nature": "1",
    level: "1",
    name: "Blowgun",
    school: "Nature",
    subtype: "Weapon",
    type: "Equipment"
}), card_data.da03 = {
    attacks: ["Quick", "Ranged", "Dice=1", "Piercing +2"],
    text: "",
    traits: []
}, card_count.da03 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "3",
    "data-cast": "3",
    "data-code": "da04",
    "data-type": "equipment",
    "data-nature": "1",
    level: "1",
    name: "Cleansing Potion",
    school: "Nature",
    subtype: "Potion",
    type: "Equipment"
}), card_data.da04 = {
    attacks: [],
    text: "When Cleansing Potion enters play, place 3 Charge tokens on it. Once per round, when you have Priority you may remove a Charge token from Clensing Potion. If you do, remove a poison condition from a friendly creature in this zone by paying the removal cost. Cleansing Potion cannot be replaced. When there are no Charge tokens remaining on Cleansing Potion, destroy it.",
    traits: []
}, card_count.da04 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da05",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Corpsebloom",
    school: "Nature",
    subtype: "Plant",
    type: "Creature"
}), card_data.da05 = {
    attacks: ["Quick", "Melee", "Dice=4"],
    text: "After making a Biting Bloom attacks, place a Stagger condition on Corpsebloom. Flame attacks against Corpsebloom roll 2 additional dice.",
    traits: ["Regenerate 1", "Rooted"]
}, card_count.da05 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da06",
    "data-type": "equipment",
    "data-nature": "1",
    level: "1",
    name: "Corrosive Concoction",
    school: "Nature",
    subtype: "Potion, Acid",
    type: "Equipment"
}), card_data.da06 = {
    attacks: [],
    text: "When Corrosive Concoction enters play, place 3 Charge tokens on it. Once per round, when you damage an enemy creature with a non-spell attack, you may remove a Charge token from Corrosive Concoction to place a Corrode condition on that creature. Corrosive Concoction cannot be replaced. When there are no Charge tokens remaining on Corrosive Concoction, destroy it.",
    traits: []
}, card_count.da06 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "5",
    "data-cast": "5",
    "data-code": "da08",
    "data-type": "creature",
    "data-dark": "1",
    level: "1",
    name: "Darkfenne Owl",
    school: "Dark",
    subtype: "Animal, Bird",
    type: "Creature"
}), card_data.da08 = {
    attacks: ["Quick", "Melee", "Dice=1"],
    text: "Creatures in this zone cannot be healed. (this includes healing from Regenerate X trait)",
    traits: ["Flying", "Pest"]
}, card_count.da08 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "6",
    "data-cast": "6",
    "data-code": "da10",
    "data-type": "conjuration",
    "data-nature": "1",
    level: "1",
    name: "Healing Tree",
    school: "Nature",
    subtype: "Plant, Tree",
    type: "Conjuration"
}), card_data.da10 = {
    attacks: [],
    text: "Creatures in this zone cannot be healed. (this includes healing from Regenerate X trait)",
    traits: ["Living", "Regenerate 2"]
}, card_count.da10 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "7",
    "data-cast": "7",
    "data-code": "da11",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Hellfire Ants",
    school: "Nature",
    subtype: "Insect, Swarm",
    type: "Creature"
}), card_data.da11 = {
    attacks: ["Quick", "Melee", "Dice=1", "Unavoidable"],
    text: "Hellfire Ants can attack different targets with their additional strikes.",
    traits: ["Elusive", "Swarm"]
}, card_count.da11 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "8",
    "data-cast": "8",
    "data-code": "da12",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Hunting Falcon",
    school: "Nature",
    subtype: "Animal, Bird",
    type: "Creature"
}), card_data.da12 = {
    attacks: ["Quick", "Melee", "Dice=3", "Piercing +1"],
    text: "",
    traits: ["Flying"]
}, card_count.da12 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "14",
    "data-cast": "14",
    "data-code": "da13",
    "data-type": "creature",
    "data-nature": "3",
    level: "3",
    name: "Jungle Defender",
    school: "Nature",
    subtype: "Plant, Tree, Sequoian",
    type: "Creature"
}), card_data.da13 = {
    attacks: ["Quick", "Melee", "Dice=5", "Reach"],
    text: "When Jungle Defender attacks a Flying creature, it rolls 2 additional attack dice. Flame attacks against Jungle Defender roll 2 additional dice.",
    traits: ["Regenerate 2"]
}, card_count.da13 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "7",
    "data-cast": "7",
    "data-code": "da14",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Killer Bees",
    school: "Nature",
    subtype: "Insect, Swarm",
    type: "Creature"
}), card_data.da14 = {
    attacks: ["Quick", "Melee", "Dice=1", "Critical Damage"],
    text: "",
    traits: ["Elusive", "Flying", "Swarm"]
}, card_count.da14 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "8",
    "data-cast": "8",
    "data-code": "da15",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Lashing Liana",
    school: "Nature",
    subtype: "Plant, Vine",
    type: "Creature"
}), card_data.da15 = {
    attacks: ["Quick", "Melee", "Dice=2"],
    text: "When a friendly plant creature in this zone is damaged by a melee attack, Lashing Liana deals 2 direct damage to the attacker. Flame attacks agains Lashing Liana roll 2 additional dice.",
    traits: ["Regenerate 2", "Rooted", "Unique"]
}, card_count.da15 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da16",
    "data-type": "equipment",
    "data-nature": "1",
    "data-restriction": "Druid",
    level: "1",
    name: "Living Armor",
    school: "Nature",
    subtype: "Armor, Plant",
    type: "Equipment"
}), card_data.da16 = {
    attacks: [],
    text: "When Living Armor enters play, place 2 Armor +1 tokens on it. When you are attacked and damaged, remove an Armor +1 token from Living Armor. During the Upkeep Phase, Living Armor gains 2 Armor +1 tokens, to a maximum of 3.",
    traits: ["Druid Only"]
}, card_count.da16 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "2",
    "data-cast": "2",
    "data-code": "da17",
    "data-type": "conjuration",
    "data-nature": "1",
    level: "1",
    name: "Mana Lotus",
    school: "Nature",
    subtype: "Mana, Plant, Vine",
    type: "Conjuration"
}), card_data.da17 = {
    attacks: [],
    text: "When the last dissipate token is removed from Mana Lotus, its controller gains 5 mana. Flame attacks agains Mana Lotus roll 2 additional dice.",
    traits: ["Dissipate 3", "Living", "Unique"]
}, card_count.da17 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da18",
    "data-type": "conjuration",
    "data-nature": "1",
    level: "1",
    name: "Meredia's Shrine",
    school: "Nature",
    subtype: "Temple",
    type: "Conjuration"
}), card_data.da18 = {
    attacks: [],
    text: "As a quick action, friendly living creatures in this zone may pray; heal 2 damage from that creature or remove a condition from that creature with a removal cost of 2 or less.",
    traits: ["Unique"]
}, card_count.da18 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "2",
    "data-cast": "2",
    "data-code": "da19",
    "data-type": "enchantment",
    "data-nature": "1",
    reveal: "2",
    level: "1",
    name: "Overgrowth",
    school: "Nature",
    subtype: "Herbal",
    type: "Enchantment"
}), card_data.da19 = {
    attacks: [],
    text: "This creature gains Life +2 and Melee + 1 traits. If this creature is a plant, reduce the reveal cost of Overgrowth by 1.",
    traits: []
}, card_count.da19 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "2",
    "data-cast": "2",
    "data-code": "da20",
    "data-type": "equipment",
    "data-nature": "1",
    level: "1",
    name: "Rage Tonic",
    school: "Nature",
    subtype: "Potion",
    type: "Equipment"
}), card_data.da20 = {
    attacks: [],
    text: "When Rage Tonic enters play, plave 3 Charge tokens on it. Once per round, when you have Priority, you may remove a Charge tokone from Rage Tonic. If you do, target friendly Living creature in your zone gains Melee +1 until the neod of the round. Rage Tonic cannot be replaced. When therea re no Charge tokens remaining on Rage Tonic, destroy it.",
    traits: []
}, card_count.da20 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "2",
    "data-cast": "2",
    "data-code": "da21",
    "data-type": "enchantment",
    "data-nature": "1",
    reveal: "3",
    level: "1",
    name: "Reclamation",
    school: "Nature",
    subtype: "Plant, Vine",
    type: "Enchantment"
}), card_data.da21 = {
    attacks: [],
    text: "Each Upkeep Phase, this Conjuration receives 2 direct damage.",
    traits: []
}, card_count.da21 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "8",
    "data-cast": "8",
    "data-code": "da22",
    "data-type": "creature",
    "data-nature": "2",
    level: "2",
    name: "Silverclaw Ratel",
    school: "Nature",
    subtype: "Animal, Weasel",
    type: "Creature"
}), card_data.da22 = {
    attacks: ["Quick", "Melee", "Dice=3", "Piercing +1"],
    text: "While he has damage on hime, Silverclaw Ratel's Claws attacks gains Doublestrike. Solverclaw Ratel cannot guard.",
    traits: []
}, card_count.da22 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da23",
    "data-type": "attack",
    "data-nature": "1",
    level: "1",
    name: "Spray of Barbs",
    school: "Nature",
    subtype: "Vine",
    type: "Attack"
}), card_data.da23 = {
    attacks: ["Ranged", "Dice=2", "Piercing +2", "Doublestrike"],
    text: "",
    traits: []
}, card_count.da23 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "9",
    "data-cast": "9",
    "data-code": "da24",
    "data-type": "creature",
    "data-nature": "1",
    "data-water": "1",
    level: "2",
    name: "Swamp Lurker",
    school: "Nature, Water",
    subtype: "Aquatic, Plant, Swamp",
    type: "Creature"
}), card_data.da24 = {
    attacks: ["Quick", "Melee", "Dice=3"],
    text: "",
    traits: ["Regenerate 2"]
}, card_count.da24 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "5",
    "data-cast": "5",
    "data-code": "da25",
    "data-type": "creature",
    "data-nature": "1",
    "data-water": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Swamp Serpent",
    school: "Nature, Water",
    subtype: "Animal, Aquatic, Reptile, Serpent",
    type: "Creature"
}), card_data.da25 = {
    attacks: ["Quick", "Melee", "Dice=2", "d12", "8+ = Rot"],
    text: "",
    traits: []
}, card_count.da25 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "7",
    "data-cast": "7",
    "data-code": "da26",
    "data-type": "creature",
    "data-nature": "1",
    "data-water": "1",
    level: "2",
    name: "Swamp Snapper",
    school: "Nature, Water",
    subtype: "Animal, Aquatic, Reptile, Turtle",
    type: "Creature"
}), card_data.da26 = {attacks: ["Quick", "Melee", "Dice=3"], text: "", traits: []}, card_count.da26 = {
    adr: 2,
    max: 4
}, cards.push({
    academy: !0,
    cost: "8",
    "data-cast": "8",
    "data-code": "da27",
    "data-type": "creature",
    "data-nature": "1",
    "data-water": "1",
    level: "2",
    name: "Wetland Titan Frog",
    school: "Nature, Water",
    subtype: "Amphibian, Animal, Aquatic",
    type: "Creature"
}), card_data.da27 = {
    attacks: ["Quick", "Melee", "Dice=3", "Reach"],
    text: "",
    traits: ["Elusive"]
}, card_count.da27 = {adr: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "da28",
    "data-type": "creature",
    "data-nature": "1",
    "data-dark": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Wynchwood Rat",
    school: "Nature, Dark",
    subtype: "Animal, Rat, Rodent",
    type: "Creature"
}), card_data.da28 = {
    attacks: ["Quick", "Melee", "Dice=2"],
    text: "While another firendly rat is in the this zone, Wynchwood Rat gains the Melee +1 trait.",
    traits: []
}, card_count.da28 = {adr: 3, max: 6}, cards.push({
    academy: !0,
    cost: "5",
    "data-cast": "5",
    "data-code": "ea02",
    "data-type": "equipment",
    "data-earth": "1",
    "data-fire": "1",
    "data-air": "1",
    "data-water": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Amulet of Attunement",
    school: "Earth, Fire, Air, Water",
    subtype: "Mana",
    type: "Equipment"
}), card_data.ea02 = {
    text: "Once per round, when you have Priority, you may deactivate on Glyph to gain 2 mana.",
    traits: ["Elementalist Only"]
}, card_count.ea02 = {ael: 2, max: 6}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "ea03",
    "data-type": "equipment",
    "data-fire": "1",
    level: "1",
    name: "Dragon's Mantle",
    school: "Fire",
    subtype: "Armor, Flame",
    type: "Equipment"
}), card_data.ea03 = {text: "This Mage fains Armor +1. Once per round, when this Mage is melee attached or gamaged, you may pay 1 mana or deactivate your Fire Glyph. If you do, place a Burn condition on the attacker."}, card_count.ea03 = {
    ael: 2,
    max: 6
}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "ea04",
    "data-type": "equipment",
    "data-earth": "1",
    "data-fire": "1",
    "data-air": "1",
    "data-water": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Elemental Staff",
    school: "Earth, Fire, Air, Water",
    subtype: "Staff",
    type: "Equipment"
}), card_data.ea04 = {
    attack: ["Quick", "Melee", "Dice=3"],
    text: "Mage Gains a Defense. This defense can only be used when you are Melee attacked, you pay 1 mana, and you deactviate one of your Glyphs. If this mage is level 5 or greater, Elemental Staff rolls and additional attack die.",
    traits: ["Elementalist Only"]
}, card_count.ea04 = {ael: 2, max: 6}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "ea05",
    "data-type": "equipment",
    "data-fire": "1",
    "data-air": "1",
    "data-water": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Wand of Ice and Fire",
    school: "Fire, Air, Water",
    subtype: "Flame, Frost, Wand",
    type: "Equipment"
}), card_data.ea05 = {text: "Once per round, as a quick spell, you may pay 2 mana to place a Burn or Freeze condition on targer Corporeal object up to 1 zone away."}, card_count.ea05 = {
    ael: 2,
    max: 6
}, cards.push({
    academy: !0,
    cost: "5",
    "data-cast": "5",
    "data-code": "ea06",
    "data-type": "conjuration",
    "data-air": "1",
    "data-water": "1",
    level: "2",
    name: "Dense Fog",
    school: "Air, Water",
    subtype: "Weather",
    type: "Conjuration"
}), card_data.ea06 = {
    text: "Objects in this zone cannot be targeted by anything but themselves.",
    traits: ["Dissipate 1", "Incorporeal"]
}, card_count.ea06 = {ael: 2, max: 4}, cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "ea07",
    "data-type": "conjuration",
    "data-air": "1",
    "data-water": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Freeze Weapon",
    school: "Air, Water",
    subtype: "Frost",
    type: "Conjuration"
}), card_data.ea07 = {
    text: "Increase Freeze Weapon's cost by 2 if the target equpped is level 2. This equipment is Disabled (it loses all attack bars, action bars, and non-trait abilities) and cannot be replaced. Flame attackes against Freeze Weapon roll 2 additional dice.",
    traits: ["Melting 2", "Frost Immunity"]
}, card_count.ea07 = {ael: 2, max: 6}, cards.push({
    academy: !0,
    cost: "7",
    "data-cast": "7",
    "data-code": "ea08",
    "data-type": "conjuration",
    "data-dark": "1",
    "data-fire": "1",
    level: "2",
    name: "Hellscape",
    school: "Dark, Fire",
    subtype: "Magma",
    type: "Conjuration"
}), card_data.ea08 = {
    text: "Flame attackes against objects in this zone roll an extra die. At the beginning of the Upkeep Phase, place a Burn condition on all creatures and conjurations in this zone that do not already have a Burn condition. Hydro attacks against Hellscape roll 2 additional dice.",
    traits: ["Flame Immunity"]
}, card_count.ea08 = {ael: 2, max: 4}, cards.push({
    academy: !0,
    cost: "6",
    "data-cast": "6",
    "data-code": "ea09",
    "data-type": "conjuration",
    "data-air": "1",
    "data-water": "1",
    level: "2",
    name: "Ice Spikes",
    school: "Air, Water",
    subtype: "Frost",
    type: "Conjuration"
}), card_data.ea09 = {
    text: "When a non-frost creature in this zone activates, it receives 2 points of direct frost damage. Flame attackes against Ice spikes roll 2 additional dice.",
    traits: ["Melting 2", "Frost Immunity"]
},card_count.ea09 = {ael: 2, max: 4},cards.push({
    academy: !0,
    cost: "4",
    "data-cast": "4",
    "data-code": "ea10",
    "data-type": "conjuration",
    "data-arcane": "1",
    "data-earth": "1",
    "data-or-cost": "true",
    level: "1",
    name: "Mana Shard",
    school: "Arcane, Earth",
    subtype: "Mana",
    type: "Conjuration"
}),card_data.ea10 = {
    text: "During the Upkeep Phase, 1 object with channeling in this zonce may gain 1 mana.",
    traits: ["Flame Immunity"]
},card_count.ea10 = {ael: 3, max: 6},cards.push({
    academy: !0,
    cost: "6",
    "data-cast": "6",
    "data-code": "ea11",
    "data-type": "conjuration",
    "data-air": "1",
    "data-water": "1",
    level: "2",
    name: "Thunderstorm",
    school: "Air, Water",
    subtype: "Cloud, Lightning, Weather",
    type: "Conjuration"
}),card_data.ea11 = {
    attack: ["Ranged", "Lightning", "Dice=3", "d12", "5+ = Stagger", "Ethereal"],
    text: "When a Dissipate token i sremoved from Thunderstorm, it makes the attachk above, targeting a creature in its zone",
    traits: ["Dissipate 3", "Incorporeal"]
},card_count.ea11 = {ael: 2, max: 4},add_card({
    code: "ea12",
    name: "Volcano",
    type: "Conjuration",
    subtype: ["Magma", "Seismic"],
    schools: "Earth 1 & Fire 1",
    academy: !0,
    cast: "6",
    attack: ["Zone", "Ranged", "Fire", "Dice=4", "d12", "7+ = Burn", "Unavoidable"],
    text: "When the last Dissipate counter is removed from Volcano, it makes the attach above before it is destroyed. Hydro attacks against he Volcano roll 2 additional dice.",
    traits: ["Dissipate 3", "Flame Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea13",
    name: "Acid Ooze",
    type: "Creature",
    subtype: ["Acid", "Ooze"],
    schools: "Arcane 1 & Water 1",
    academy: !0,
    cast: "8",
    attack: ["Quick", "Melee", "Poison", "Dice=2", "d12", "3+ = Corrode"],
    text: "Acid Ooze ignored all non-critical damage from attacks, Dicrest damage and attack effects occur normally",
    traits: ["Nonliving"],
    count: {ael: 2}
}),add_card({
    code: "ea14",
    name: "Diamond Golem",
    type: "Creature",
    subtype: ["Golem"],
    schools: "Earth 1 & Fire 1",
    academy: !0,
    cast: "9",
    attack: ["Quick", "Melee", "Dice=2", "Critical Damage"],
    text: "When Defending, during the Damage and Effects step, prevent 3 damage from that attack.",
    traits: ["Nonliving", "Flame Immunity", "Psychic Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea15",
    name: "Frost Elemental",
    type: "Creature",
    subtype: ["Elemental", "Frost"],
    schools: "Air 2 & Water 2",
    academy: !0,
    cast: "15",
    attack: ["Quick", "Melee", "Dice=5", "d12", "7+ = Freeze x2"],
    text: "Flame attacks against the Frost Elemental roll 2 additional dice.",
    traits: ["Melting 2", "Nonliving", "Frost Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea16",
    name: "Galgaommon",
    type: "Creature",
    subtype: ["Lightning", "Sprite"],
    schools: "Air 1",
    academy: !0,
    cast: "3",
    attack: ["Quick", "Melee", "Lightning", "Dice=2", "d12", "7+ = Stagger", "Ethereal"],
    text: "During the Upkeep Phase destroy Golgommon unless you pay 1 mana.",
    traits: ["Legendary", "Lightning Immunity", "Psychic Immunity", "Incorporeal", "Nonliving"],
    count: {ael: 2}
}),add_card({
    code: "ea17",
    name: "Ice Golem",
    type: "Creature",
    subtype: ["Golem", "Frost"],
    schools: "Air 1 & Water 1",
    academy: !0,
    cast: "8",
    attack: ["Quick", "Melee", "Dice=3", "d12", "3+ = Freeze"],
    text: "Flame attacks against the Ice Golem roll 2 additional dice.",
    traits: ["Melting 2", "Nonliving", "Frost Immunity", "Psychic Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea18",
    name: "Magma Sprite",
    type: "Creature",
    subtype: ["Magma", "Sprite"],
    schools: "Earth 1 | Fire 1",
    academy: !0,
    cast: "5",
    attack: ["Quick", "Melee", "Dice=1", "d12", "7+ = Burn"],
    text: "Frost attacks against the Magma Sprite roll 2 additional dice.",
    traits: ["Nonliving", "Psychic Immunity"],
    count: {ael: 3}
}),add_card({
    code: "ea19",
    name: "Mud Golem",
    type: "Creature",
    subtype: ["Golem"],
    schools: "Earth 1 & Water 1",
    academy: !0,
    cast: "9",
    attack: ["Quick", "Melee", "Dice=3"],
    text: "As a full action, if Mud Golem has less than 3 Charge counters, it may place a Charge counter on itself. For each Charge counter, increase its Life by 2 and it gains Mell +1.",
    traits: ["Nonliving", "Psychic Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea20",
    name: "Rock Golem",
    type: "Creature",
    subtype: ["Golem"],
    schools: "Earth 1",
    academy: !0,
    cast: "4",
    attack: ["Quick", "Melee", "Dice=2"],
    traits: ["Nonliving", "Psychic Immunity"],
    count: {ael: 3}
}),add_card({
    code: "ea21",
    name: "Tide Elemental",
    type: "Creature",
    subtype: ["Aquatic", "Hydro", "Elemental"],
    schools: "Water 3",
    academy: !0,
    cast: "12",
    attack: ["Quick", "Melee", "Hydro", "Dice=4", "d12", "7+ = Stagger"],
    text: "Tide Elemental ignores non-critical damage from attacks and is Immune to Burn conditions. Frost attacks against it roll 2 additional dice. As a Quick Action the Tide Elemntal can remove all Burn conditions from one objects in this zone.",
    traits: ["Nonliving", "Hydro Immunity"],
    count: {ael: 2}
}),add_card({
    code: "ea22",
    name: "Deep Freeze",
    type: "Enchantment",
    subtype: [],
    schools: "Air 1 | Water 1",
    academy: !0,
    cast: "2+2",
    text: "This object loses and cannot gain the Melting X trait. Additionally, Freeze conditions are not removed at the end of this creature's activation. Flame attacks against this object roll 2 less dice.",
    count: {ael: 3}
}),add_card({
    code: "ea23",
    name: "Frost Trap",
    type: "Enchantment",
    subtype: ["Frost", "Trap"],
    schools: "Air 1 & Water 1",
    academy: !0,
    cast: "2+4",
    text: "When this creature activates, you must reveal Frost Trap. Place 2 Freeze conditions on this Creature. Then, destory Frost Trap",
    count: {ael: 2}
}),add_card({
    code: "ea24",
    name: "Tar Trap",
    type: "Enchantment",
    subtype: ["Tar", "Trap"],
    schools: "Earth 1 & Fire 1",
    academy: !0,
    cast: "2+4",
    text: "You must reveal Tar Trap when this creature activates. This creature cannot take non-spell actions, and Flame attacks against this creature roll an additional die. Uncontainable creatures are immute to Tar Trap.",
    traits: ["Dissipate 2"],
    count: {ael: 2}
}),add_card({
    code: "ea25",
    name: "Neutralizing Mist",
    type: "Incantation",
    subtype: ["Hydro"],
    schools: "Water 1",
    academy: !0,
    cast: "2",
    text: "Remove any number of Corrode conditions from the target, paying the removal cost for each.",
    count: {ael: 3}
}),add_card({
    code: "ea27",
    name: "Rapid Dismantle",
    type: "Incantation",
    subtype: ["Acid"],
    schools: "Water 2",
    academy: !0,
    cast: "8",
    text: "Choose up to 2 level 1 equpment objects attached to target mage and destroy them.",
    count: {ael: 2}
}),add_card({
    code: "ea28",
    name: "Upheaval",
    type: "Incantation",
    subtype: ["Seismic"],
    schools: "Earth 1",
    academy: !0,
    cast: "X",
    text: "If the target is level 1 and non-Epic, destory it. X = the Conuration's mana cost + the combined mana costs of any objects attached to it.",
    count: {ael: 3}
}),add_card({
    code: "ea29",
    name: "Beam of Frost",
    type: "Attack",
    subtype: ["Frost"],
    schools: "Air 1 | Water 1",
    academy: !0,
    cast: "5",
    attack: ["Ranged", "Frost", "Dice=2", "d12", "6+ = Freeze x2"],
    count: {ael: 3}
}),add_card({
    code: "ea30",
    name: "Cone of Frost",
    type: "Attack",
    subtype: ["Frost"],
    schools: "Air 1 | Water 1",
    academy: !0,
    cast: "5",
    attack: ["Ranged", "Frost", "Dice=2", "d12", "8+ = Freeze x2", "Sweeping"],
    count: {ael: 3}
}),add_card({
    code: "ea31",
    name: "Gale Burst",
    type: "Attack",
    subtype: ["Wind"],
    schools: "Air 1",
    academy: !0,
    cast: "5",
    attack: ["Ranged", "Wind", "Dice=3", "Ethereal"],
    text: "If a minor creature is damaged by Gale Burst, it becomes inactive. Gale Burst rolls 2 additional dice versus Flying creatures.",
    count: {ael: 3}
}),add_card({
    code: "ea32",
    name: "Twister",
    type: "Attack",
    subtype: ["Wind"],
    schools: "Air 2",
    academy: !0,
    cast: "9",
    attack: ["Ranged", "Zone", "Wind", "Dice=3", "Ethereal", "Unavoidable"],
    text: "If a minor creature is damaged by Twister, it becomes inactive. Twister rolls 2 additional dice versus Flying creatures.",
    count: {ael: 2}
});