export const initializeHandlebars = () => {
    registerHandlebarsHelpers();
    preloadHandlebarsTemplates();
};

/**
 * Define a set of template paths to pre-load. Pre-loaded templates are compiled and cached for fast access when
 * rendering. These paths will also be available as Handlebars partials by using the file name.
 * @returns {Promise}
 */
function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/only-war/template/sheet/actor/acolyte.hbs",
        "systems/only-war/template/sheet/actor/npc.hbs",
        "systems/only-war/template/sheet/actor/limited-sheet.hbs",

        "systems/only-war/template/sheet/actor/tab/abilities.hbs",
        "systems/only-war/template/sheet/actor/tab/combat.hbs",
        "systems/only-war/template/sheet/actor/tab/gear.hbs",
        "systems/only-war/template/sheet/actor/tab/notes.hbs",
        "systems/only-war/template/sheet/actor/tab/npc-notes.hbs",
        "systems/only-war/template/sheet/actor/tab/npc-stats.hbs",
        "systems/only-war/template/sheet/actor/tab/progression.hbs",
        "systems/only-war/template/sheet/actor/tab/psychic-powers.hbs",
        "systems/only-war/template/sheet/actor/tab/stats.hbs",

        "systems/only-war/template/sheet/mental-disorder.hbs",
        "systems/only-war/template/sheet/aptitude.hbs",
        "systems/only-war/template/sheet/malignancy.hbs",
        "systems/only-war/template/sheet/mutation.hbs",
        "systems/only-war/template/sheet/talent.hbs",
        "systems/only-war/template/sheet/trait.hbs",
        "systems/only-war/template/sheet/special-ability.hbs",
        "systems/only-war/template/sheet/psychic-power.hbs",
        "systems/only-war/template/sheet/critical-injury.hbs",
        "systems/only-war/template/sheet/weapon.hbs",
        "systems/only-war/template/sheet/armour.hbs",
        "systems/only-war/template/sheet/gear.hbs",
        "systems/only-war/template/sheet/drug.hbs",
        "systems/only-war/template/sheet/tool.hbs",
        "systems/only-war/template/sheet/cybernetic.hbs",
        "systems/only-war/template/sheet/weapon-modification.hbs",
        "systems/only-war/template/sheet/ammunition.hbs",
        "systems/only-war/template/sheet/force-field.hbs",

        "systems/only-war/template/sheet/characteristics/information.hbs",
        "systems/only-war/template/sheet/characteristics/left.hbs",
        "systems/only-war/template/sheet/characteristics/name.hbs",
        "systems/only-war/template/sheet/characteristics/right.hbs",
        "systems/only-war/template/sheet/characteristics/total.hbs",

        "systems/only-war/template/chat/item.hbs",
        "systems/only-war/template/chat/roll.hbs",
        "systems/only-war/template/chat/damage.hbs",
        "systems/only-war/template/chat/critical.hbs",
        "systems/only-war/template/chat/evasion.hbs",
        "systems/only-war/template/chat/emptyMag.hbs",

        "systems/only-war/template/dialog/common-roll.hbs",
        "systems/only-war/template/dialog/combat-roll.hbs",
        "systems/only-war/template/dialog/psychic-power-roll.hbs"
    ];
    return loadTemplates(templatePaths);
}

/**
 * Add custom Handlerbars helpers.
 */
function registerHandlebarsHelpers() {
    Handlebars.registerHelper("removeMarkup", function(text) {
        const markup = /<(.*?)>/gi;
        return text.replace(markup, "");
    });

    Handlebars.registerHelper("enrich", function(string) {
        return TextEditor.enrichHTML(string, {async: false});
    });

    Handlebars.registerHelper("damageTypeLong", function(damageType) {
        damageType = (damageType || "i").toLowerCase();
        switch (damageType) {
            case "e":
                return game.i18n.localize("DAMAGE_TYPE.ENERGY");
            case "i":
                return game.i18n.localize("DAMAGE_TYPE.IMPACT");
            case "r":
                return game.i18n.localize("DAMAGE_TYPE.RENDING");
            case "x":
                return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE");
            default:
                return game.i18n.localize("DAMAGE_TYPE.IMPACT");
        }
    });


    Handlebars.registerHelper("damageTypeShort", function(damageType) {
        switch (damageType) {
            case "energy":
                return game.i18n.localize("DAMAGE_TYPE.ENERGY_SHORT");
            case "impact":
                return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
            case "rending":
                return game.i18n.localize("DAMAGE_TYPE.RENDING_SHORT");
            case "explosive":
                return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE_SHORT");
            default:
                return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
        }
    });

    Handlebars.registerHelper("config", function(key) {
        return game.darkHeresy.config[key];
    });

}

