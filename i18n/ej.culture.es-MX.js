ej.addCulture( "es-MX", {
	name: "es-MX",
	englishName: "Spanish (Mexico)",
	nativeName: "Español (México)",
	language: "es",
	numberFormat: {
        pattern: ["-n"],
        ',': ",",
        '.': ".",
        groupSizes: [3],
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%","n%"],
            groupSizes: [3],
            ',': ",",
            '.': ".",
            symbol: '%'
		},
		currency: {
			pattern: ["-$n","$n"],
			groupSizes: [3],
            ',': ",",
            '.': ".",
            symbol: '$'
		}
	},
	calendars: {
		standard: {
			firstDay: 0,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],
				namesShort: ["do.","lu.","ma.","mi.","ju.","vi.","sá."]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic.",""]
			},
			AM: ["a. m.","a. m.","A. M."],
			PM: ["p. m.","p. m.","P. M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d' de 'MMMM' de 'yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dddd, d' de 'MMMM' de 'yyyy hh:mm tt",
				F: "dddd, d' de 'MMMM' de 'yyyy hh:mm:ss tt",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});