var _ = require('lodash');
var {chromatic, major} = require('./scales.js');

// gets an item from the list and wraps around to the start if n is larger than the list
//items[n % items.length]

module.exports = {
    scaleNotes: (key, scale) => {
        var scaleIndex = _.findIndex(chromatic.notes, (e) => e === key.toLowerCase());

        // TODO - when to use # vs b ?
        var scaleResult = [chromatic.notes[scaleIndex]];

        // TODO - select interval set via scale parameter
        scaleResult = scaleResult.concat(major.intervals.map((interval) => {
            scaleIndex += interval;
            return chromatic.notes[scaleIndex % chromatic.notes.length];
        }));

        console.log('scale notes: ' + scaleResult);
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