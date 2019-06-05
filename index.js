var Tritone = require('./src/tritone.js');

var tritone = new Tritone();

var prettyPrint = (label, anArray) => {
    console.log('------------------------------');
    console.log(label);
    anArray.forEach((element) => {
        console.log(JSON.stringify(element));
    })
}

prettyPrint('B Major Notes', tritone.scaleNotes('b', 'ionian'));
prettyPrint('B Major Chords', tritone.diatonicChords('b', 'major'));
prettyPrint('G Mixolydian Chords:', tritone.diatonicChords('g', 'mixolydian'));



console.log('c major chords: ' + JSON.stringify(tritone.diatonicChords('c', 'major')));
console.log('g mixolydian notes: ' + JSON.stringify(tritone.scaleNotes('g', 'mixolydian')));
console.log('g mixolydian chords: ' + JSON.stringify(tritone.diatonicChords('g', 'mixolydian')));
console.log('g mixolydian: ' + JSON.stringify(tritone.scaleNotes('g', 'mixolydian')));