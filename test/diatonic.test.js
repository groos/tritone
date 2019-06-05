var Tritone = require('../src/tritone.js');

var tritone = new Tritone();

test('returns array with notes in c major scale', () => {
    expect(tritone.scaleNotes('c', 'major')).toStrictEqual(["c","d","e","f","g","a","b"]);
});

test('array with notes in c dorian scale. requires modal shift', () => {
    expect(tritone.scaleNotes('c', 'dorian')).toStrictEqual(["c","d","eb","f","g","a","bb"]);
});

test('array with notes in f major scale. requires sharp to flat conversion', () => {
    expect(tritone.scaleNotes('f', 'major')).toStrictEqual(["f","g","a","bb","c","d","e"]);
});

test('array with notes in f ionian scale. requires sharp to flat conversion', () => {
    expect(tritone.scaleNotes('f', 'ionian')).toStrictEqual(["f","g","a","bb","c","d","e"]);
});

test('array with notes in g mixolydian scale. requires modal shit', () => {
    expect(tritone.scaleNotes('g', 'mixolydian')).toStrictEqual(["g","a","b","c","d","e","f"]);
});

test('array of diatonic chords in the c major scale', () => {
    var chords = tritone.diatonicChords('c', 'major');
    //Major 7
    expect(chords[0].root).toStrictEqual('C');
    expect(chords[0].chordType).toStrictEqual('M7');
    expect(chords[0].notes).toStrictEqual(["c","e","g","b"]);

    //Minor 7
    expect(chords[2].root).toStrictEqual('E');
    expect(chords[2].chordType).toStrictEqual('m7');
    expect(chords[2].notes).toStrictEqual(["e","g","b","d"]);

    //Dom 7
    expect(chords[4].root).toStrictEqual('G');
    expect(chords[4].chordType).toStrictEqual('7');
    expect(chords[4].notes).toStrictEqual(["g","b","d","f"]);

    // m7b5
    expect(chords[6].root).toStrictEqual('B');
    expect(chords[6].chordType).toStrictEqual('m7b5');
    expect(chords[6].notes).toStrictEqual(["b","d","f","a"]);
})

/*
f major: f,g,a,bb,c,d,e
f ionian: f,g,a,bb,c,d,e
c dorian: c,d,eb,f,g,a,bb
g mixolydian: g,a,b,c,d,e,f
*/