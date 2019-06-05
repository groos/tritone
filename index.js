var Tritone = require('./src/tritone.js');

var tritone = new Tritone();
console.log('c major chords: ' + JSON.stringify(tritone.diatonicChords('c', 'major')));
console.log('f major: ' + JSON.stringify(tritone.scaleNotes('f', 'major')));
console.log('f ionian: ' + JSON.stringify(tritone.scaleNotes('f', 'ionian')));
console.log('c dorian: ' + JSON.stringify(tritone.scaleNotes('c', 'dorian')));
console.log('c major: ' + JSON.stringify(tritone.scaleNotes('c', 'major')));
console.log('g mixolydian: ' + JSON.stringify(tritone.scaleNotes('g', 'mixolydian')));