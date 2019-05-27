var Chord = function(root, intervals) {
    this.notes = () => {
        // set instance stuff based on the chord intervals
    }
}

module.exports = {
    Maj7Chord: function(root) {
        this.name = 'Major 7th';
        this.shortName = 'M7';
        this.nameSlug = 'Maj7';
        this.intervals = []

        Chord.call(this, root, this.intervals);
    },
    Min7Chord: function(root) {
        this.name = 'Minor 7th';
        this.shortName = 'm7';
        this.nameSlug = 'min7';
        this.intervals = [];

        Chord.call(this, root, this.intervals);
    },
    Dom7Chord: function(root) {
        this.name = 'Dominant 7';
        this.shortName = '7';
        this.nameSlug = '7';
        this.intervals = [];

        Chord.call(this, root, this.intervals);
    },
    Min7Flat5Chord: function(root) {
        this.name = 'Minor 7 Flat 5'
        this.shortName = 'm7b5';
        this.nameSlug = 'm7b5';
        this.intervals = [];

        Chord.call(this, root, this.intervals);
    }
}