export default {
	keys: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],
	__1A: {
		key: "A-flat Minor",
		type: "minor",
		main: [
			"1A",
			"1B",
			"12A",
			"2A",
		],
		all: [
			"1A",
			"1B",
			"12A",
			"2A",
			"3A",
			"6A",
			"8A",
			"12B"
		],
		major: "1B",
		minor: "1A",
		prev: "12A",
		next: "2A",
		diagonal: ["12B", "2B"],
		wholeTone: [
			"11A",
			"3A"
		],
		semitone: [
			"4B",
			"6A",
			"8A"
		],
		compatible: [
			"1B",
			"2A",
			"4B",
			"10B",
			"12A"
		],
		compatibleAndEnergyBoost: [
			"1B",
			"2A",
			"3A",
			"4B",
			"6A",
			"8A",
			"10B",
			"12A"
		],
		energyBoost: [
			"3A",
			"6A",
			"8A"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"11A", "11B",
		"12A", "12B"
	],
	},
	__1B: {
		key: "B Major",
		type: "major",
		main: [
			"1B",
			"1A",
			"12B",
			"2B",
		],
		all: [
			"1B",
			"1A",
			"12B",
			"2B",
			"3B",
			"6B",
			"8B",
			"12A"
		],
		major: "1B",
		minor: "1A",
		prev: "12B",
		next: "2B",
		diagonal: ["2A", "12A"],
		wholeTone: [
			"11B",
			"3B"
		],
		semitone: [
			"4A",
			"6B",
			"8B"
		],
		compatible: [
			"1A", "1B",
			"2B",
			"4A",
			"10A",
			"12B"
		],
		compatibleAndEnergyBoost: [
			"1A", "1B",
			"2B",
			"3B",
			"4A",
			"6B",
			"8B",
			"10A",
			"12B"
		],
		energyBoost: [
			"3B",
			"6B",
			"8B"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__2A: {
		key: "E-flat Minor",
		type: "minor",
		main: [
			"2A",
			"2B",
			"1A",
			"3A",
		],
		all: [
			"2A",
			"2B",
			"1A",
			"3A",
			"4A",
			"7A",
			"9A",
			"1B"
		],
		major: "2B",
		minor: "2A",
		prev: "1A",
		next: "3A",
		diagonal: ["1B", "3B"],
		wholeTone: [
			"12A",
			"4A"
		],
		semitone: [
			"5B",
			"7A",
			"9A"
		],
		compatible: [
			"1A",
			"2A", "2B",
			"3A",
			"5B",
			"11B"
		],
		compatibleAndEnergyBoost: [
			"1A",
			"2A", "2B",
			"3A",
			"4A",
			"5B",
			"7A",
			"9A",
			"11B"
		],
		energyBoost: [
			"4A",
			"7A",
			"9A"
		],

	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"12A", "12B"
	],
	},
	__2B: {
		key: "F-sharp Major",
		type: "major",
		main: [
			"2B",
			"2A",
			"1B",
			"3B",
		],
		all: [
			"2B",
			"2A",
			"1B",
			"3B",
			"4B",
			"7B",
			"9B",
			"3A"
		],
		major: "2B",
		minor: "2A",
		prev: "1B",
		next: "3B",
		diagonal: ["3A", "1A"],
		wholeTone: [
			"12B",
			"4B"
		],
		semitone: [
			"5A",
			"7B",
			"9B"
		],
		compatible: [
			"1B",
			"2A", "2B",
			"3B",
			"5A",
			"11A"
		],
		compatibleAndEnergyBoost: [
			"1B",
			"2A", "2B",
			"3B",
			"4B",
			"5A",
			"7B",
			"9B",
			"11A"
		],
		energyBoost: [
			"4B",
			"7B",
			"9B"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"12A", "12B"
	],

	},
	__3A: {
		key: "B-flat Minor",
		type: "minor",
		main: [
			"3A",
			"3B",
			"2A",
			"4A",
		],
		all: [
			"3A",
			"3B",
			"2A",
			"4A",
			"5A",
			"8A",
			"10A",
			"2B"
		],
		major: "3B",
		minor: "3A",
		prev: "2A",
		next: "4A",
		diagonal: ["2B", "4B"],
		wholeTone: [
			"1A",
			"5A"
		],
		semitone: [
			"6B",
			"8A",
			"10A"
		],
		compatible: [
			"2A",
			"3A", "3B",
			"4A",
			"6B",
			"12B"
		],
		compatibleAndEnergyBoost: [
			"2A",
			"3A", "3B",
			"4A",
			"5A",
			"6B",
			"8A",
			"10A",
			"12B"
		],
		energyBoost: [
			"5A",
			"8A",
			"10A"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
	],

	},
	__3B: {
		key: "D-flat Major",
		type: "major",
		main: [
			"3B",
			"3A",
			"2B",
			"4B",
		],
		all: [
			"3B",
			"3A",
			"2B",
			"4B",
			"5B",
			"8B",
			"10B",
			"4A"
		],
		major: "3B",
		minor: "3A",
		prev: "2B",
		next: "4B",
		diagonal: ["4A", "2A"],
		wholeTone: [
			"1B",
			"5B"
		],
		semitone: [
			"6A",
			"8B",
			"10B"
		],
		compatible: [
			"2B",
			"3A", "3B",
			"4B",
			"6A",
			"12A"
		],
		compatibleAndEnergyBoost: [
			"2B",
			"3A", "3B",
			"4B",
			"5B",
			"6A",
			"8B",
			"10B",
			"12A"
		],
		energyBoost: [
			"5B",
			"8B",
			"10B"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
	],

	},
	__4A: {
		key: "F Minor",
		type: "minor",
		main: [
			"4A",
			"4B",
			"3A",
			"5A",
		],
		all: [
			"4A",
			"4B",
			"3A",
			"5A",
			"6A",
			"9A",
			"11A",
			"3B"
		],
		major: "4B",
		minor: "4A",
		prev: "3A",
		next: "5A",
		diagonal: ["3B", "5B"],
		wholeTone: [
			"2A",
			"6A"
		],
		semitone: [
			"7B",
			"9A",
			"11A"
		],
		compatible: [
			"1B",
			"3A",
			"4A", "4B",
			"5A",
			"7B",
		],
		compatibleAndEnergyBoost: [
			"1B",
			"3A",
			"4A", "4B",
			"5A",
			"6A",
			"7B",
			"9A",
			"11A"
		],
		energyBoost: [
			"6A",
			"9A",
			"11A"
		],
	closeEnough: [
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
	],

	},
	__4B: {
		key: "A-flat Major",
		type: "major",
		main: [
			"4B",
			"4A",
			"3B",
			"5B",
		],
		all: [
			"4B",
			"4A",
			"3B",
			"5B",
			"6B",
			"9B",
			"11B",
			"5A"
		],
		major: "4B",
		minor: "4A",
		prev: "3B",
		next: "5B",
		diagonal: ["5A", "3A"],
		wholeTone: [
			"2B",
			"6B"
		],
		semitone: [
			"7A",
			"9B",
			"11B"
		],
		compatible: [
			"1A",
			"3B",
			"4A", "4B",
			"5B",
			"7A",
		],
		compatibleAndEnergyBoost: [
			"1A",
			"3B",
			"4A", "4B",
			"5B",
			"6B",
			"7A",
			"9B",
			"11B"
		],
		energyBoost: [
			"6B",
			"9B",
			"11B"
		],
	closeEnough: [
		"2A", "2B",
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
	],

	},
	__5A: {
		key: "C Minor",
		type: "minor",
		main: [
			"5A",
			"5B",
			"4A",
			"6A",
		],
		all: [
			"5A",
			"5B",
			"4A",
			"6A",
			"7A",
			"10A",
			"12A",
			"4B"
		],
		major: "5B",
		minor: "5A",
		prev: "4A",
		next: "6A",
		diagonal: ["4B", "6B"],
		wholeTone: [
			"3A",
			"7A"
		],
		semitone: [
			"8B",
			"10A",
			"12A"
		],
		compatible: [
			"2B",
			"4A",
			"5A", "5B",
			"6A",
			"8B",
		],
		compatibleAndEnergyBoost: [
			"2B",
			"4A",
			"5A", "5B",
			"6A",
			"7A",
			"8B",
			"10A",
			"12A"
		],
		energyBoost: [
			"7A",
			"10A",
			"12A"
		],
	closeEnough: [
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
	],

	},
	__5B: {
		key: "E-flat Major",
		type: "major",
		main: [
			"5B",
			"5A",
			"4B",
			"6B",
		],
		all: [
			"5B",
			"5A",
			"4B",
			"6B",
			"7B",
			"10B",
			"12B",
			"6B"
		],
		major: "5B",
		minor: "5A",
		prev: "4B",
		next: "6B",
		diagonal: ["6A", "4A"],
		wholeTone: [
			"3B",
			"7B"
		],
		semitone: [
			"8A",
			"10B",
			"12B"
		],
		compatible: [
			"2A",
			"4B",
			"5A", "5B",
			"6B",
			"8A",
		],
		compatibleAndEnergyBoost: [
			"2A",
			"4B",
			"5A", "5B",
			"6B",
			"7B",
			"8A",
			"10B",
			"12B"
		],
		energyBoost: [
			"7B",
			"10B",
			"12B"
		],
	closeEnough: [
		"3A", "3B",
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
	],

	},
	__6A: {
		key: "G Minor",
		type: "minor",
		main: [
			"6A",
			"6B",
			"5A",
			"7A",
		],
		all: [
			"6A",
			"6B",
			"5A",
			"7A",
			"8A",
			"11A",
			"1A",
			"5B"
		],
		major: "6B",
		minor: "6A",
		prev: "5A",
		next: "7A",
		diagonal: ["5B", "7B"],
		wholeTone: [
			"4A",
			"8A"
		],
		semitone: [
			"9B",
			"11A",
			"1A"
		],
		compatible: [
			"3B",
			"5A",
			"6A", "6B",
			"7A",
			"9B",
		],
		compatibleAndEnergyBoost: [
			"1A",
			"3B",
			"5A",
			"6A", "6B",
			"7A",
			"8A",
			"9B",
			"11A"
		],
		energyBoost: [
			"1A",
			"8A",
			"11A"
		],
	closeEnough: [
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
	],

	},
	__6B: {
		key: "B-flat Major",
		type: "minor",
		main: [
			"6B",
			"6A",
			"5B",
			"7B",
		],
		all: [
			"6B",
			"6A",
			"5B",
			"7B",
			"8B",
			"11B",
			"1B",
			"7A"
		],
		major: "6B",
		minor: "6A",
		prev: "5B",
		next: "7B",
		diagonal: ["7A", "5A"],
		wholeTone: [
			"4B",
			"8B"
		],
		semitone: [
			"9A",
			"11B",
			"1B"
		],
		compatible: [
			"3A",
			"5B",
			"6A", "6B",
			"7B",
			"9A",
		],
		compatibleAndEnergyBoost: [
			"1B",
			"3A",
			"5B",
			"6A", "6B",
			"7B",
			"8B",
			"9A",
			"11B"
		],
		energyBoost: [
			"1B",
			"8B",
			"11B"
		],
	closeEnough: [
		"4A", "4B",
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
	],

	},
	__7A: {
		key: "D Minor",
		type: "minor",
		main: [
			"7A",
			"7B",
			"6A",
			"8A",
		],
		all: [
			"7A",
			"7B",
			"6A",
			"8A",
			"9A",
			"12A",
			"2A",
			"6B"
		],
		major: "7B",
		minor: "7A",
		prev: "6A",
		next: "8A",
		diagonal: ["6B", "8B"],
		wholeTone: [
			"5A",
			"9A"
		],
		semitone: [
			"10B",
			"12A",
			"2A"
		],
		compatible: [
			"4B",
			"6A",
			"7A", "7B",
			"8A",
			"10B",
		],
		compatibleAndEnergyBoost: [
			"2A",
			"4B",
			"6A",
			"7A", "7B",
			"8A",
			"9A",
			"10B",
			"12A"
		],
		energyBoost: [
			"2A",
			"9A",
			"12A"
		],
	closeEnough: [
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
	],

	},
	__7B: {
		key: "F Major",
		type: "major",
		main: [
			"7B",
			"7A",
			"6B",
			"8B",
		],
		all: [
			"7B",
			"7A",
			"6B",
			"8B",
			"9B",
			"12B",
			"2B",
			"8A"
		],
		major: "7B",
		minor: "7A",
		prev: "6B",
		next: "8B",
		diagonal: ["8A", "6A"],
		wholeTone: [
			"5B",
			"9B"
		],
		semitone: [
			"10A",
			"12B",
			"2B"
		],
		compatible: [
			"4A",
			"6B",
			"7A", "7B",
			"8B",
			"10A",
		],
		compatibleAndEnergyBoost: [
			"2B",
			"4A",
			"6B",
			"7A", "7B",
			"8B",
			"9B",
			"10A",
			"11A", "11B",
			"12B"
		],
		energyBoost: [
			"2B",
			"9B",
			"12B"
		],
	closeEnough: [
		"5A", "5B",
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
	],

	},
	__8A: {
		key: "A Minor",
		type: "minor",
		main: [
			"8A",
			"8B",
			"7A",
			"9A",
		],
		all: [
			"8A",
			"8B",
			"7A",
			"9A",
			"10A",
			"1A",
			"3A",
			"7B"
		],
		major: "8B",
		minor: "8A",
		prev: "7A",
		next: "9A",
		diagonal: ["7B", "9B"],
		wholeTone: [
			"6A",
			"10A"
		],
		semitone: [
			"11B",
			"1A",
			"3A"
		],
		compatible: [
			"5B",
			"7A",
			"8A", "8B",
			"9A",
			"11B"
		],
		compatibleAndEnergyBoost: [
			"1A",
			"3A",
			"5B",
			"7A",
			"8A", "8B",
			"9A",
			"10A",
			"11B"
		],
		energyBoost: [
			"1A",
			"3A",
			"10A"
		],
	closeEnough: [
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
	],

	},
	__8B: {
		key: "C Major",
		type: "major",
		main: [
			"8B",
			"8A",
			"7B",
			"9B",
		],
		all: [
			"8B",
			"8A",
			"7B",
			"9B",
			"10B",
			"1B",
			"3B",
			"9A"
		],
		major: "8B",
		minor: "8A",
		prev: "7B",
		next: "9B",
		diagonal: ["9A", "7A"],
		wholeTone: [
			"6B",
			"10B"
		],
		semitone: [
			"11A",
			"1B",
			"3B"
		],
		compatible: [
			"5A",
			"7B",
			"8A", "8B",
			"9B",
			"11A"
		],
		compatibleAndEnergyBoost: [
			"1B",
			"3B",
			"5A",
			"7B",
			"8A", "8B",
			"9B",
			"10B",
			"11A"
		],
		energyBoost: [
			"1B",
			"3B",
			"10B"
		],
	closeEnough: [
		"6A", "6B",
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
	],

	},
	__9A: {
		key: "E Minor",
		type: "minor",
		main: [
			"9A",
			"9B",
			"8A",
			"10A",
		],
		all: [
			"9A",
			"9B",
			"8A",
			"10A",
			"12A",
			"2A",
			"4A",
			"8B"
		],
		major: "9B",
		minor: "9A",
		prev: "8A",
		next: "10A",
		diagonal: ["8B", "10B"],
		wholeTone: [
			"7A",
			"11A"
		],
		semitone: [
			"12B",
			"2A",
			"4A"
		],
		compatible: [
			"6B",
			"8A",
			"9A", "9B",
			"10A",
			"12B"
		],
		compatibleAndEnergyBoost: [
			"2A",
			"4A",
			"6B",
			"8A",
			"9A", "9B",
			"10A",
			"11A",
			"12B"
		],
		energyBoost: [
			"2A",
			"4A",
			"11A"
		],
	closeEnough: [
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__9B: {
		key: "G Major",
		type: "major",
		main: [
			"9B",
			"9A",
			"8B",
			"10B",
		],
		all: [
			"9B",
			"9A",
			"8B",
			"10B",
			"12B",
			"2B",
			"4B",
			"10A"
		],
		major: "9B",
		minor: "9A",
		prev: "8B",
		next: "10B",
		diagonal: ["10A", "8A"],
		wholeTone: [
			"7B",
			"11B"
		],
		semitone: [
			"12A",
			"2B",
			"4B"
		],
		compatible: [
			"6A",
			"8B",
			"9A", "9B",
			"10B",
			"12A"
		],
		compatibleAndEnergyBoost: [
			"2B",
			"4B",
			"6A",
			"8B",
			"9A", "9B",
			"10B",
			"11B",
			"12A"
		],
		energyBoost: [
			"2B",
			"4B",
			"11B"
		],
	closeEnough: [
		"7A", "7B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__10A: {
		key: "B Minor",
		type: "minor",
		main: [
			"10A",
			"10B",
			"9A",
			"11A",
		],
		all: [
			"10A",
			"10B",
			"9A",
			"11A",
			"12A",
			"3A",
			"5A",
			"9B"
		],
		major: "10B",
		minor: "10A",
		prev: "9A",
		next: "11A",
		diagonal: ["9B", "11B"],
		wholeTone: [
			"8A",
			"12A"
		],
		semitone: [
			"1B",
			"3A",
			"5A"
		],
		compatible: [
			"1B",
			"7B",
			"9A",
			"10A", "10B",
			"11A",
		],
		compatibleAndEnergyBoost: [
			"1B",
			"3A",
			"5A",
			"7B",
			"9A",
			"10A", "10B",
			"11A",
			"12A"
		],
		energyBoost: [
			"3A",
			"5A",
			"12A"
		],
	closeEnough: [
		"1A", "1B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__10B: {
		key: "D Major",
		type: "major",
		main: [
			"10B",
			"10A",
			"9B",
			"11B",
		],
		all: [
			"10B",
			"10A",
			"9B",
			"11B",
			"12B",
			"3B",
			"5B",
			"11A"
		],
		major: "10B",
		minor: "10A",
		prev: "9B",
		next: "11B",
		diagonal: ["11A", "9A"],
		wholeTone: [
			"8B",
			"12B"
		],
		semitone: [
			"1A",
			"3B",
			"5B"
		],
		compatible: [
			"1A",
			"7A",
			"9B",
			"10A", "10B",
			"11B",
		],
		compatibleAndEnergyBoost: [
			"1A",
			"3B",
			"5B",
			"7A",
			"9B",
			"10A", "10B",
			"11B",
			"12B"
		],
		energyBoost: [
			"3B",
			"5B",
			"12B"
		],
	closeEnough: [
		"1A", "1B",
		"8A", "8B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__11A: {
		key: "F-sharp Minor",
		type: "minor",
		main: [
			"10A",
			"11A",
			"11B",
			"12A",
		],
		all: [
			"11A",
			"11B",
			"10A",
			"12A",
			"1A",
			"4A",
			"6A",
			"10B"
		],
		major: "11B",
		minor: "11A",
		prev: "10A",
		next: "12A",
		diagonal: ["10B", "12B"],
		wholeTone: [
			"9A",
			"1A"
		],
		semitone: [
			"2B",
			"4A",
			"6A"
		],
		compatible: [
			"2B",
			"8B",
			"10A",
			"11A", "11B",
			"12A"
		],
		compatibleAndEnergyBoost: [
			"1A",
			"2B",
			"4A",
			"6A",
			"8B",
			"10A",
			"11A", "11B",
			"12A"
		],
		energyBoost: [
			"1A",
			"4A",
			"6A",
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__11B: {
		key: "A Major",
		type: "major",
		main: [
			"11B",
			"11A",
			"10B",
			"12B"
		],
		all: [
			"11B",
			"11A",
			"10B",
			"12B",
			"1B",
			"4B",
			"6B",
			"12A"
		],
		major: "11B",
		minor: "11A",
		prev: "10B",
		next: "12B",
		diagonal: ["12A", "10A"],
		wholeTone: [
			"9B",
			"1B"
		],
		semitone: [
			"2A",
			"4B",
			"6B"
		],
		compatible: [
			"2A",
			"8A",
			"10B",
			"11A", "11B",
			"12B"
		],
		compatibleAndEnergyBoost: [
			"1B",
			"2A",
			"4B",
			"6B",
			"8A",
			"10B",
			"11A", "11B",
			"12B"
		],
		energyBoost: [
			"1B",
			"4B",
			"6B"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"9A", "9B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__12A: {
		key: "D-flat Minor",
		type: "minor",
		main: [
			"12A",
			"12B",
			"11A",
			"1A"
		],
		all: [
			"12A",
			"12B",
			"11A",
			"1A",
			"2A",
			"5A",
			"7A",
			"11B"
		],
		major: "12B",
		minor: "12A",
		prev: "11A",
		next: "1A",
		diagonal: ["11B", "1B"],
		wholeTone: [
			"10A",
			"2A"
		],
		semitone: [
			"3B",
			"5A",
			"7A"
		],
		compatible: [
			"1A",
			"3B",
			"9B",
			"11A",
			"12A", "12B"
		],
		compatibleAndEnergyBoost: [
			"1A",
			"2A",
			"3B",
			"5A",
			"7A",
			"9B",
			"11A",
			"12A", "12B"
		],
		energyBoost: [
			"2A",
			"5A",
			"7A"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	},
	__12B: {
		key: "E Major",
		type: "major",
		main: [
			"12B",
			"12A",
			"11B",
			"1B",
		],
		all: [
			"12B",
			"12A",
			"11B",
			"1B",
			"2B",
			"5B",
			"7B",
			"1A"
		],
		major: "12B",
		minor: "12A",
		prev: "11B",
		next: "1B",
		diagonal: ["1A", "11A"],
		wholeTone: [
			"10B",
			"2B"
		],
		semitone: [
			"3A",
			"5B",
			"7B"
		],
		compatible: [
			"1B",
			"3A",
			"9A",
			"11B",
			"12A", "12B"
		],
		compatibleAndEnergyBoost: [
			"1B",
			"2B",
			"3A",
			"5B",
			"7B",
			"9A",
			"11B",
			"12A", "12B"
		],
		energyBoost: [
			"2B",
			"5B",
			"7B"
		],
	closeEnough: [
		"1A", "1B",
		"2A", "2B",
		"3A", "3B",
		"10A", "10B",
		"11A", "11B",
		"12A", "12B"
	],

	}
};
