var _ = require('lodash');

scaleIntervals = {
    major: [2, 2, 1, 2, 2, 2, 1],
    harmonicMinor: [],
    melodicMinor: []
}

shiftIntervals = (scale, shift) => {
    var scaleCopy = scaleIntervals[scale];
    return _.slice(scaleCopy, shift, scaleCopy.length).concat(_.slice(scaleCopy, 0, shift));
}

var MajorMode = function(name, shift) {
    this.name = name;
    this.shift = shift;
    this.derivedFrom = 'major';

    this.intervals = shiftIntervals(this.derivedFrom, this.shift);
}

module.exports = {
    chromatic: {
        notesSharp: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'],
        notesFlat: ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab']
    },
    scaleTypes: {
        major: {
            modes: {
                ionian: new MajorMode('ionian', 0),
                dorian: new MajorMode('dorian', 1),
                phrygian: new MajorMode('phrygian', 2),
                lydian: new MajorMode('lydian', 3),
                mixolydian: new MajorMode('mixolydian', 4),
                aeolian: new MajorMode('aeolian', 5),
                locrian: new MajorMode('locrian', 6)
            }
        }
    }
}