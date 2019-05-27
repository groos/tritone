var tritone = require('./src/tritone.js');

console.log('f major: ' + JSON.stringify(tritone.scaleNotes('f', 'major')));
console.log('f ionian: ' + JSON.stringify(tritone.scaleNotes('f', 'ionian')));
console.log('c dorian: ' + JSON.stringify(tritone.scaleNotes('c', 'dorian')));
console.log('c major: ' + JSON.stringify(tritone.scaleNotes('c', 'major')));
console.log('g mixolydian: ' + JSON.stringify(tritone.scaleNotes('g', 'mixolydian')));