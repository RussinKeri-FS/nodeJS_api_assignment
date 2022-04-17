/*
    Keri Russin
    WDV353
    Let's write an API
    April 15, 2022
*/

const jokeService = () => {
    console.log("Mocked Joke");
    return Promise.resolve([
        {
            "error": false,
            "category": "Misc",
            "type": "twopart",
            "setup": "What's the difference between an in-law and an outlaw?",
            "delivery": "An outlaw is wanted.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 92,
            "safe": true,
            "lang": "en"
        }
    ]);
};

const jokeServiceById = (id) => {
    console.log("Mocked Joke By Id");
    return Promise.resolve([
        {
            "error": false,
            "category": "Misc",
            "type": "twopart",
            "setup": "My wife left me because I'm too insecure and paranoid.",
            "delivery": "Oh wait, never mind. She was just getting the mail.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 81,
            "safe": true,
            "lang": "en"
        }
    ]);
};

module.exports = {
    jokeService,
    jokeServiceById
}