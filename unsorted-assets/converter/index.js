

// read file
const fs = require("fs");
const sourceDataBuffer = fs.readFileSync("./unsorted-assets/data/card-data.json");
const sourceData = JSON.parse(sourceDataBuffer);

// convert to game objects
const targetData = [];

if (sourceData.cards) {
    const keys = Reflect.ownKeys(sourceData.cards);

    for(const key of keys) {
        if (sourceData.cards[key]) {

            const sourceCard = sourceData.cards[key];

            const newCard = {
                id: sourceCard.id,
                enTitle: "",
                jpTitle: sourceCard.name,
                cost: sourceCard.cost,
                attack: sourceCard.atk,
                hp: sourceCard.hp,
                cardType: sourceCard.type,
                cardClass: sourceCard.job,
                rarity: sourceCard.rarity,
                relatedIDs: sourceCard.relation,
                group: sourceCard.group,
                enText: "",
                jpText: parseJPText(sourceCard.text),
            };

            targetData.push(newCard);
        }
    }
}

// write file
fs.writeFileSync("./unsorted-assets/data/parsed-data.json", JSON.stringify(targetData));

function parseJPText(text) {
    const newLineRegex = new RegExp(/\\n/g);

    let returnText = text;

    returnText = returnText.replace(newLineRegex, "<br/>");
    returnText = returnText.replace("^FFBE46^", "");
    returnText = returnText.replace("^FFFFFF^", "");

    return returnText;
}