// Repeat JS String
const itsLit = "🔥";

let party = {
	// Version1 REPEAT
	version1() {
		return itsLit.repeat(3);
	},

	version2() {
		// Version2 FILL
		return Array(3).fill(itsLit).join('');
	}
}

console.log(party.version1(), party.version2());
