/*
    Keri Russin
    WDV353
    Let's write an API
    April 15, 2022
*/


const { jokeService, jokeServiceById } = require("./jokeService");

jest.mock("./jokeService");

describe("Joke Service Tests", () => {
    test("should return one joke", async () => {
        const result = await jokeService();
            expect(result).toHaveLength(1);
            expect(result[0].category).not.toBe("");
    try {
        expect(result[0].type).toBe("single");
    } 
    catch {
        try {
            expect(result[0].type).toBe("twopart");
        } finally {
            expect(result[0].type).not.toBe("");
        }
    }
});

    test("should return one joke by ID", async () => {
        const result = await jokeServiceById(12);
            expect(result).toHaveLength(1);
            expect(result[0].category).toBe("Misc");
            expect(result[0].type).toBe("twopart");
            expect(result[0].id).toBe(81);
});
});