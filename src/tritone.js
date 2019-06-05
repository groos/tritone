var _ = require('lodash');
var { chromatic, scales, chromaticToDiatonic, convertToFlats } = require('./truth.js');

const getChromaticNotes = (useFlats) => useFlats ? chromatic.notesFlat : chromatic.notesSharp;

const Tritone = function() {
    this.scaleNotes = (key, mode) => {
        var chromaticNotes = getChromaticNotes(false);
        var scaleIntervals = scales[mode].intervals;

        var scaleIndex = _.findIndex(chromaticNotes, (e) => e === key.toLowerCase());
        var scaleResult = chromaticToDiatonic(chromaticNotes, scaleIntervals, scaleIndex);

        if (convertToFlats(scaleResult)) {
            scaleResult = chromaticToDiatonic(getChromaticNotes(true), scaleIntervals, scaleIndex);
        }

        return scaleResult.slice(0, scaleResult.length - 1);
    };

    this.diatonicChords = (key, mode) => {
        var notes = this.scaleNotes(key, mode);
        var chordTypes = scales[mode].diatonic.chords;

        var intervalNote = (currentDegree, interval) => {
            return notes[(currentDegree + interval) % notes.length];
        }

        var diatonicChords = chordTypes.map((chordType, currentDegree) => {
            return {
                root: notes[currentDegree].toUpperCase(),
                chordName: notes[currentDegree].toUpperCase() + chordType,
                chordType: chordType,
                notes: [intervalNote(currentDegree, 0), intervalNote(currentDegree, 2), intervalNote(currentDegree, 4), intervalNote(currentDegree, 6)]
            };
        });

        return diatonicChords;
    }
}

module.exports = Tritone;