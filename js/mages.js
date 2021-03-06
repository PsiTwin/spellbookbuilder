function _test_restrictions(t, a) {
    return t ? a && !t.academy ? "N/A" : t["data-restriction"] && "Novice" == t["data-restriction"] ? 1 : t["data-restriction"] && this.type != t["data-restriction"] && -1 == this.schools.indexOf(t["data-restriction"]) ? "N/A" : "Talos" == t.name ? 0 : null : "N/A"
}

function generic_mage_spell_cost_fn(t) {
    var a = _test_restrictions.apply(this, arguments);
    if (null != a) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]);
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

function druid_spell_cost_fn(t) {
    var a = "Water" == t["data-restriction"] && 1 == t["data-water"],
        e = a ? null : _test_restrictions.apply(this, arguments);
    if (null != e) return e;
    var s = [];
    for (var r in school_to_idx) t["data-" + r] && ("water" == r && 1 == t["data-" + r] ? s.push(1) : s.push(parseInt(t["data-" + r]) * this.cost[school_to_idx[r]]));
    return t["data-or-cost"] ? Math.min.apply(Math, s) : s.reduce((function (t, a) {
        return t + a
    }))
}

function paladin_spell_cost_fn(t) {
    var a = _test_restrictions.apply(this, arguments);
    if (null != a) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && ("holy" == s ? "creature" == t["data-type"] || parseInt(t["data-" + s]) <= 3 ? e.push(parseInt(t["data-" + s])) : e.push(2 * parseInt(t["data-" + s])) : "war" == s ? parseInt(t["data-" + s]) <= 2 ? e.push(parseInt(t["data-" + s])) : e.push(2 * parseInt(t["data-" + s])) : e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]));
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

function forcemaster_spell_cost_fn(t) {
    var a = _test_restrictions.apply(this, arguments);
    if (null != a) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && ("creature" == t["data-type"] && "mind" != s ? e.push(3 * parseInt(t["data-" + s])) : e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]));
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

function siren_spell_cost_fn(t) {
    var a = _test_restrictions.apply(this, arguments);
    if (null != a) return a;
    var e = t.subtype.includes("Song") || t.subtype.includes("Pirate"), s = [];
    for (var r in school_to_idx) t["data-" + r] && s.push(parseInt(t["data-" + r]) * (e ? 1 : this.cost[school_to_idx[r]]));
    return t["data-or-cost"] ? Math.min.apply(Math, s) : s.reduce((function (t, a) {
        return t + a
    }))
}

function academy_default_cost_fn(t) {
    var a = _test_restrictions.apply(this, [t, !0]);
    if (null != a) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]);
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

function academy_druid_cost_fn(t) {
    var a = !1, e = !1;
    for (var s in school_to_idx) t["data-" + s] && 3 == this.cost[school_to_idx[s]] && (a = !0);
    var r = "Water" == t["data-restriction"] && 1 == t["data-water"] && t.academy ? null : _test_restrictions.apply(this, [t, !0]);
    if (1 == r && a && (e = !0, r = null), null != r) return r;
    var o = [];
    for (var s in school_to_idx) if (t["data-" + s]) {
        var c = "water" == s && 1 == t["data-" + s] ? 1 : this.cost[school_to_idx[s]];
        c < 3 && e && (c = 1), o.push(parseInt(t["data-" + s]) * c)
    }
    return t["data-or-cost"] ? Math.min.apply(Math, o) : o.reduce((function (t, a) {
        return t + a
    }))
}

function _is_living(t) {
    if ("creature" != t["data-type"]) return !1;
    var a = card_data[t["data-code"]];
    return !a.traits || -1 == a.traits.indexOf("Nonliving") && -1 == a.traits.indexOf("Incorporeal")
}

function academy_elementalist_cost_fn(t) {
    return _is_living(t) ? 3 : generic_mage_spell_cost_fn.call(this, t)
}

function academy_warlock_cost_fn(t) {
    var a = _test_restrictions.apply(this, [t, !0]);
    if (null != a && (1 != a || !parseInt(t["data-holy"]))) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]);
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

function academy_forcemaster_cost_fn(t) {
    var a = _test_restrictions.apply(this, [t, !0]);
    if (null != a) return a;
    var e = t.subtype.includes("Dsjer-Tet"), s = [];
    for (var r in school_to_idx) t["data-" + r] && s.push(parseInt(t["data-" + r]) * (e ? 1 : this.cost[school_to_idx[r]]));
    return t["data-or-cost"] ? Math.min.apply(Math, s) : s.reduce((function (t, a) {
        return t + a
    }))
}

function academy_priestess_cost_fn(t) {
    var a = _test_restrictions.apply(this, [t, !0]);
    if (null != a && (1 != a || !parseInt(t["data-dark"]))) return a;
    var e = [];
    for (var s in school_to_idx) t["data-" + s] && e.push(parseInt(t["data-" + s]) * this.cost[school_to_idx[s]]);
    return t["data-or-cost"] ? Math.min.apply(Math, e) : e.reduce((function (t, a) {
        return t + a
    }))
}

var mages = [{
    name: "Wizard (Air)",
    type: "Wizard",
    card: "Wizard.jpg",
    cost: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Arcane", "Air"]
}, {
    name: "Beastmaster",
    type: "Beastmaster",
    card: "Beastmaster.jpg",
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Nature"]
}, {
    name: "Warlock",
    type: "Warlock",
    card: "Warlock.jpg",
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Dark", "Fire"]
}, {
    name: "Priestess",
    type: "Priestess",
    card: "Priestess.jpg",
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Holy"]
}, {
    name: "Priest",
    type: "Priestess",
    card: "Priest.jpg",
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Holy"]
}, {
    name: "Forcemaster",
    type: "Forcemaster",
    card: "Forcemaster.jpg",
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    spell_cost: forcemaster_spell_cost_fn,
    schools: ["Mind"]
}, {
    name: "Johktari Beastmaster",
    type: "Beastmaster",
    card: "Beastmaster2.jpg",
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Nature"]
}, {
    name: "Warlord",
    type: "Warlord",
    card: "Warlord.jpg",
    cost: [2, 2, 1, 2, 2, 2, 2, 3, 1, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["War", "Earth"]
}, {
    name: "Druid",
    type: "Druid",
    card: "Druid.jpg",
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 3, 2],
    spell_cost: druid_spell_cost_fn,
    schools: ["Nature"]
}, {
    name: "Necromancer",
    type: "Necromancer",
    card: "Necromancer.jpg",
    cost: [2, 2, 2, 2, 3, 1, 2, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Dark"]
}, {
    name: "Anvil Throne Warlord",
    type: "Warlord",
    card: "Warlord2.jpg",
    cost: [2, 2, 1, 2, 2, 2, 2, 3, 1, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["War", "Earth"]
}, {
    name: "Adramelech Warlock",
    type: "Warlock",
    card: "Warlock2.jpg",
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    spell_cost: generic_mage_spell_cost_fn,
    schools: ["Dark", "Fire"]
}, {
    name: "Paladin",
    type: "Paladin",
    card: "Paladin.jpg",
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 1, 2],
    spell_cost: paladin_spell_cost_fn,
    schools: ["Holy", "War"]
}, {
    name: "Siren",
    type: "Siren",
    card: "Siren.jpg",
    cost: [2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    spell_cost: siren_spell_cost_fn,
    schools: ["Water"]
}, {
    is_academy: !0,
    name: "Academy Wizard",
    type: "Wizard",
    card: "academy_wizard.jpg",
    cost: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2],
    spell_cost: academy_default_cost_fn,
    schools: ["Arcane", "Air"]
}, {
    is_academy: !0,
    name: "Academy Warlock",
    type: "Warlock",
    card: "academy_warlock.png",
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    spell_cost: academy_warlock_cost_fn,
    schools: ["Dark", "Fire"]
}, {
    is_academy: !0,
    name: "Academy Beastmaster",
    type: "Beastmaster",
    card: "academy_beastmaster.jpg",
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    spell_cost: academy_default_cost_fn,
    schools: ["Nature"]
}, {
    is_academy: !0,
    name: "Academy Priestess",
    type: "Priestess",
    card: "academy_priestess.png",
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    spell_cost: academy_priestess_cost_fn,
    schools: ["Holy"]
}, {
    is_academy: !0,
    name: "Academy Forcemaster",
    type: "Forcemaster",
    card: "academy_forcemaster.jpg",
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    spell_cost: academy_forcemaster_cost_fn,
    schools: ["Mind"]
}, {
    is_academy: !0,
    name: "Academy Warlord",
    type: "Warlord",
    card: "academy_warlord.jpg",
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    spell_cost: academy_default_cost_fn,
    schools: ["War"]
}, {
    is_academy: !0,
    name: "Academy Druid",
    type: "Druid",
    card: "academy_druid.jpg",
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 3, 2],
    spell_cost: academy_druid_cost_fn,
    schools: ["Nature"]
}, {
    is_academy: !0,
    name: "Academy Elementalist",
    type: "Elementalist",
    card: "elementalist.jpg",
    cost: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    spell_cost: academy_elementalist_cost_fn,
    schools: ["Nature"]
}];