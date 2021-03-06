ej.addCulture( "lb-LU", {
	name: "lb-LU",
	englishName: "Luxembourgish (Luxembourg)",
	nativeName: "Lëtzebuergesch (Lëtzebuerg)",
	language: "lb",
	numberFormat: {
		",": " ",
		".": ",",
		groupSizes: [3,0],
		negativeInfinity: "-onendlech",
		positiveInfinity: "+onendlech",
		percent: {
			groupSizes: [3,0],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],
				namesAbbr: ["Son","Méi","Dën","Mët","Don","Fre","Sam"],
				namesShort: ["So","Mé","Dë","Më","Do","Fr","Sa"]
			},
			months: {
				names: ["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember",""],
				namesAbbr: ["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "dd. MMMM"
			}
		}
	}
});