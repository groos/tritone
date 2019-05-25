var _ = require('lodash');
var {chromatic, scaleTypes} = require('./truth.js');

const convertToFlats = (notes) => {
    var compareTo = notes[0];
    for(var i = 1; i < notes.length; i++) {
        if (compareTo[0] === notes[i][0]) {
            return true;
        }

        compareTo = notes[i];
    }

    return false;
}

const chromaticToDiatonic = (chromaticNotes, scale, startIndex) => {
    var scaleResult = [chromaticNotes[startIndex]];
    return scaleResult.concat(scale.map((interval) => {
        startIndex += interval;
        return chromaticNotes[startIndex % chromaticNotes.length]; // gets an item from the list and wraps around to the start if n is larger than the list
    }));
}

const getChromaticNotes = (useFlats) => useFlats ? chromatic.notesFlat : chromatic.notesSharp;

module.exports = {
    scaleNotes: (key, scale, mode) => {
        var chromaticNotes = getChromaticNotes(chromatic.notesFlat.includes(key));
        var scaleIntervals = scaleTypes[scale].modes[mode].intervals;

        var scaleIndex = _.findIndex(chromaticNotes, (e) => e === key.toLowerCase());
        var scaleResult = chromaticToDiatonic(chromaticNotes, scaleIntervals, scaleIndex);

        if (convertToFlats(scaleResult)) {
            scaleResult = chromaticToDiatonic(getChromaticNotes(true), scaleIntervals, scaleIndex);
        }

        return scaleResult;
    },

















    diatonicChords: (key, scale) => {
        var notes = scaleNotes(key, scale);
        return 'list of diatonic chords';
    },
    chordTypes: (scale) => {
        return 'list of chord types for scale'
    }
};