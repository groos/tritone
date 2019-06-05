module.exports = {
    chromatic: {
        notesSharp: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'],
        notesFlat: ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab']
    }, 
    scaleTruth: {
        major: {
            intervals: [2, 2, 1, 2, 2, 2, 1],
            chords: ['M7', 'm7', 'm7', 'M7', '7', 'm7', 'm7b5']
        },
        harmonicMinor: {
            intervals: [],
            chords: []
        },
        melodicMinor: {
            intervals: [],
            chords: []
        }
    },
    chordTruth: {
        'M7' : {
            intervalsAsSteps: ['4', '7', '11'],
            intervals: ['M3', 'p5', 'M7']
        },
        'm7' : {
            intervalsAsSteps: ['3', '7', '10'],
            intervals: ['m3', 'p5', 'm7']
        },
        '7' : {
            intervalsAsSteps: ['4', '7', '10'],
            intervals: ['M3', 'p5', 'm7']
        },
        'm7b5' : {
            intervalsAsSteps: ['3', '6', '10'],
            intervals: ['m3', 'b5', 'm7']
        }
    }
}