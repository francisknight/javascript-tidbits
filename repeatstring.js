// Repeat JS String
const itsLit = "🔥";

let party = {
	// Version1 REPEAT
	version1() {
		return itsLit.repeat(6);
	},

	version2() {
		// Version2 FILL
		return Array(6).fill(itsLit).join('');
	}
}

console.log(party.version1(), party.version2());
