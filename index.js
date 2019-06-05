var Tritone = require('./src/tritone.js');

var tritone = new Tritone();
console.log('c major chords: ' + JSON.stringify(tritone.diatonicChords('c', 'major')));
console.log('b major chords: ' + JSON.stringify(tritone.diatonicChords('b', 'major')));
console.log('g mixolydian chords: ' + JSON.stringify(tritone.diatonicChords('g', 'mixolydian')));
console.log('g mixolydian: ' + JSON.stringify(tritone.scaleNotes('g', 'mixolydian')));