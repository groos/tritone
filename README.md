# Tritone.js

Tritone.js is a super easy-to-use utility library for doing music theory information in JavaScript.

Tritone wants to make it as simple as possible to get what you are looking for.

Usage
------

var tritone = require('./src/tritone.js');

// Get the notes of a scale:
tritone.scaleNotes('b', 'major');
/*
    returns array of notes:
    ["b","c#","d#","e","f#","g#","a#"]
*/

// Get the diatonic chords in a key:
tritone.diatonicChords('b', 'major')
/*
    returns chord objects:
    {"root":"B","chordName":"BM7","chordType":"M7","notes":["b","d#","f#","a#"]}
    {"root":"C#","chordName":"C#m7","chordType":"m7","notes":["c#","e","g#","b"]}
    {"root":"D#","chordName":"D#m7","chordType":"m7","notes":["d#","f#","a#","c#"]}
    {"root":"E","chordName":"EM7","chordType":"M7","notes":["e","g#","b","d#"]}
    {"root":"F#","chordName":"F#7","chordType":"7","notes":["f#","a#","c#","e"]}
    {"root":"G#","chordName":"G#m7","chordType":"m7","notes":["g#","b","d#","f#"]}
    {"root":"A#","chordName":"A#m7b5","chordType":"m7b5","notes":["a#","c#","e","g#"]}
*/

// Tritone supports modes!
tritone.scaleNotes('g', 'mixolydian');
/*
    ["g","a","b","c","d","e","f"]
*/

tritone.diatonicChords('g', 'mixolydian');
/*
    {"root":"G","chordName":"G7","chordType":"7","notes":["g","b","d","f"]}
    {"root":"A","chordName":"Am7","chordType":"m7","notes":["a","c","e","g"]}
    {"root":"B","chordName":"Bm7b5","chordType":"m7b5","notes":["b","d","f","a"]}
    {"root":"C","chordName":"CM7","chordType":"M7","notes":["c","e","g","b"]}
    {"root":"D","chordName":"Dm7","chordType":"m7","notes":["d","f","a","c"]}
    {"root":"E","chordName":"Em7","chordType":"m7","notes":["e","g","b","d"]}
    {"root":"F","chordName":"FM7","chordType":"M7","notes":["f","a","c","e"]}
*/


Upcoming Features
------
Tritone is a work in progress. Future additions may include:
- Support for Harmonic and Melodic Minor scales
- Chord Inversions
- Chord and Arpeggio Extensions
- "Pivot" Chord Suggestions
