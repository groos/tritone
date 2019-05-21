module.exports = {
    chromatic: {
        notesSharp: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'],
        notesFlat: ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab']
    },
    scaleTypes: {
        major: {
            intervals: [2, 2, 1, 2, 2, 2, 1],
            modes: {
                ionian: {
                    shift: 0,
                },
                dorian: {
                    shift: 1
                },
                phrygian: {
                    shift: 2
                },
                lydian: {
                    shift: 3
                },
                mixolydian: {
                    shift: 4
                },
                aeolian: {
                    shift: 5
                },
                locrian: {
                    shift: 6
                }
            }
        },
        minor: {
            intervals: [2, 1, 2, 2, 1, 2, 2]
        }
    }
}