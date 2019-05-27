const tritone = require('../tritone.js');

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

/*
f major: f,g,a,bb,c,d,e
f ionian: f,g,a,bb,c,d,e
c dorian: c,d,eb,f,g,a,bb
g mixolydian: g,a,b,c,d,e,f
*/