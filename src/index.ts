import { Character } from "./models/Character";

async function main() {

    typeof game === 'undefined' ?
        await runPlainJS() :
        await macrosRun();



}

async function runPlainJS() {
    const character = new Character();
    console.log(character.getAppearanceHtml());
}


async function macrosRun() {
    const character = new Character();
    let token = canvas.tokens.controlled[0];
    if (token == undefined || token == null) {
        ui.notifications.error("No one token selected");
        return;
    }
    let document = token.document;
    let actor_id = document.actorId;
    let actor = game.actors.get(actor_id);
    actor.update(
        {
            name: character.name,
            "system.details.alignment": character.attributes.alignment,
            "system.details.race": character.race,
            "system.details.biography.value": character.getBiographyHtml(),
            "flags.tidy5e-sheet.trait": character.getTraitsHtml(),
            "system.details.ideal": character.getIdealsHtml(),
            "system.details.bond": character.getBondsHtml(),
            "system.details.flaw": character.getFlawsHtml(),
            "flags.tidy5e-sheet.gender": character.gender,
            "system.abilities.str.value": character.abilities.strength,
            "system.abilities.dex.value": character.abilities.dexterity,
            "system.abilities.con.value": character.abilities.constitution,
            "system.abilities.int.value": character.abilities.intelligence,
            "system.abilities.wis.value": character.abilities.wisdom,
            "system.abilities.cha.value": character.abilities.charisma,
            "flags.tidy5e-sheet.height": character.details.height,
            "flags.tidy5e-sheet.weight": character.details.weight,
            "flags.tidy5e-sheet.eyes": character.getEyesDescription(),
            "flags.tidy5e-sheet.skin": character.getSkinDescription(),
            "flags.tidy5e-sheet.hair": character.getHairDescription(),
            "flags.tidy5e-sheet.age": character.age,
            "flags.tidy5e-sheet.appearance": character.getAppearanceHtml()
        }
    )
}
main();
