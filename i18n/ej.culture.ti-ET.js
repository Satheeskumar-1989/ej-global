ej.addCulture( "ti-ET", {
	name: "ti-ET",
	englishName: "Tigrinya (Ethiopia)",
	nativeName: "ትግርኛ (ኢትዮጵያ)",
	language: "ti",
	numberFormat: {
		pattern: ["(n)"],
		"NaN": "NAN",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-n$","n$"],
			symbol: "ETB"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesAbbr: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesShort: ["ሰን","ሰኑ","ሰሉ","ሮቡ","ሓሙ","ዓር","ቀዳ"]
			},
			months: {
				names: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
				namesAbbr: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""]
			},
			AM: ["ንጉሆ","ንጉሆ","ንጉሆ"],
			PM: ["ድሕሪ ቐትሪ","ድሕሪ ቐትሪ","ድሕሪ ቐትሪ"],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd '፣' MMMM d 'መዓልቲ' yyyy",
				f: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm tt",
				F: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm:ss tt"
			}
		}
	}
});
