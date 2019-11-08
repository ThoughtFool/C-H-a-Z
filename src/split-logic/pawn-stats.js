module.exports = pawnStats = {
    human: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: [
            // {
            //     dynaID: id
            // }, // use constructor to assign values to each uniquely created and played pawn
        ] // push objects into array of new pawns
    },
    zombie: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: []
    },
    cyborg: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: []
    },

    pawnCounter: 0,
    // testing ONLY TODO: move into above^^^
    pawnIdArray: {
        human: [],
        zombie: [],
        cyborg: []
    }
};