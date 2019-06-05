var _ = require('lodash');

var scaleTruth = {
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
}

var chordTruth = {
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

var shiftIntervals = (scale, shift) => {
    var scaleCopy = scaleTruth[scale].intervals;
    return _.slice(scaleCopy, shift, scaleCopy.length).concat(_.slice(scaleCopy, 0, shift));
}

var MajorMode = function(name, shift) {
    this.name = name;
    this.shift = shift;
    this.derivedFrom = 'major';
    this.diatonic = scaleTruth[this.derivedFrom];

    this.intervals = shiftIntervals(this.derivedFrom, this.shift);
}

var chromaticToDiatonic = (chromaticNotes, scale, startIndex) => {
    var scaleResult = [chromaticNotes[startIndex]];
    return scaleResult.concat(scale.map((interval) => {
        startIndex += interval;
        return chromaticNotes[startIndex % chromaticNotes.length]; // gets an item from the list and wraps around to the start if n is larger than the list
    }));
}

var convertToFlats = (notes) => {
    var compareTo = notes[0];
    for(var i = 1; i < notes.length; i++) {
        if (compareTo[0] === notes[i][0]) {
            return true;
        }

        compareTo = notes[i];
    }

    return false;
};

module.exports = {
    chromatic: {
        notesSharp: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'],
        notesFlat: ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab']
    },
    scales: {
        major: new MajorMode('ionian', 0),
        minor: new MajorMode('aeolian', 5),
        ionian: new MajorMode('ionian', 0),
        dorian: new MajorMode('dorian', 1),
        phrygian: new MajorMode('phrygian', 2),
        lydian: new MajorMode('lydian', 3),
        mixolydian: new MajorMode('mixolydian', 4),
        aeolian: new MajorMode('aeolian', 5),
        locrian: new MajorMode('locrian', 6)
    },
    chordTruth: chordTruth,
    chromaticToDiatonic: chromaticToDiatonic,
    convertToFlats: convertToFlats
}