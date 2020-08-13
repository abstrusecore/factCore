const getCapital1 = (land) => {

  typeof land === 'string' ? land = land.toLowerCase().trim() : {};
  land.replace('&','and');
  land.replace('?','');
  land.replace('!','');
  land.replace('%','');
  land.replace('$','');
  land.replace('#','');

  s = {
      'alabama': 'Montgomery, since 1846',
      'alaska': 'Juneau, since 1906',
      'arizona': 'Phoenix, since 1912',
      'arkansas': 'Little Rock, since 1912',
      'california': 'Sacramento, since 1854',
      'colorado': 'Denver, since 1867',
      'connecticut': 'Hartford, since 1875',
      'delaware': 'Dover, since 1777',
      'florida': 'Tallahassee, since 1824',
      'georgia': 'Atlanta, since 1868',
      'hawaii': 'Honolulu, since 1845',
      'idaho': 'Boise, since 1865',
      'illinois': 'Springfield, since 1837',
      'indiana': 'Indianapolis, since 1825',
      'iowa': 'Des Moines, since 1857',
      'kansas': 'Topeka, since 1856',
      'kentucky': 'Frankfort, since 1792',
      'maine': 'Augusta, since 1832',
      'maryland': 'Annapolis, since 1694',
      'massachusetts': 'Boston, since 1630',
      'michigan': 'Lansing, since 1847',
      'minnesota': 'St. Paul, since 1849',
      'mississippi': 'Jackson, since 1821',
      'missouri': 'Jefferson City, since 1826',
      'montana': 'Helena, since 1875',
      'nebraska': 'Lincoln, since 1867',
      'nevada': 'Carson City, since 1861',
      'new hampshire': 'Concord, since 1808',
      'new jersey': 'Trenton, since 1784',
      'new mexico': 'Santa Fe, since 1610',
      'new york': 'Albany, since 1797',
      'north carolina': 'Raleigh, since 1792',
      'north dakota': 'Bismarck, since 1883',
      'ohio': 'Columbus, since 1816',
      'oklahoma': 'Oklahoma City, 1910',
      'oregon': 'Salem, since 1855',
      'pennysylvania': 'Harrisburg, 1812',
      'rhode island': 'Providence, since 1900',
      'south carolina': 'Columbia, since 1786',
      'south dakota': 'Pierre, since 1889',
      'tennessee': 'Nashville, since 1826',
      'texas': 'Austin, since 1839',
      'utah': 'Salt Lake City, since 1858',
      'vermont': 'Montpelier, since 1805',
      'virginia': 'Richmond, since 1780',
      'washington': 'Olympia, since 1853',
      'west virginia': 'Charleston, since 1885',
      'wisconsin': 'Madison, since 1838',
      'wyoming': 'Cheyenne, since 1869',
      'american samoa': 'Pago Pago, since 1899',
      'samoa': 'Pago Pago, since 1899',
      'guam': 'Hagatna, since 1898',
      'northern mariana islands': 'Saipan, snce 1947',
      'mariana islands': 'Saipan, snce 1947',
      'puerto rico': 'San Juan, since 1898',
      'u.s. virgin islands': 'Charlotte Amalie, since 1917',
      'virgin islands': 'Charlotte Amalie, since 1917'
  }

  return s[land];

}

const getCapital2 = (land2) => {

  typeof land2 === 'string' ? land2 = land2.toLowerCase().trim() : {};
  land2.replace('&','and');
  land2.replace('?','');
  land2.replace('!','');
  land2.replace('%','');
  land2.replace('$','');
  land2.replace('#','');

  c = {
      'afghanistan': 'Capital: Kabul, Currency: Afghani',
      'albania': 'Capital: Tirana, Currency: Lek',
      'algeria': 'Capital: Algiers, Currency: Dinar',
      'andorra': 'Capital: Andorra La Vella, Currency: Euro',
      'angola': 'Capital: Luanda, Currency: Kwanza',
      'antigua and barbuda': "Capital: Saint John's, Currency: East Caribbean Dollar",
      'antigua': "Capital: Saint John's, Currency: East Caribbean Dolla",
      'barbuda': "Capital: Saint John's, Currency: East Caribbean Dolla",
      'argentina': 'Capital: Buenos Aires, Currency: Peso',
      'armenia': 'Capital: Yerevan, Currency: Dram',
      'australia': 'Capital: Canberra, Currency: Dollar',
      'austria': 'Capital: Vienna, Currency: Euro',
      'azerbaijan': 'Capital: Baku, Currency: Manat',
      'the bahamas': 'Capital: Nassau, Currency: Dollar',
      'bahamas': 'Capital: Nassau, Currency: Dollar',
      'bahrain': 'Capital: Manama, Currency: Dinar',
      'bangladesh': 'Capital: Dhaka, Currency: Taka',
      'barbados': 'Capital: Bridgetown, Currency: Dollar',
      'belarus': 'Capital: Minsk, Currency: Ruble',
      'belgium': 'Capital: Brussels, Currency: Euro',
      'belize': 'Capital: Belmopan, Currency: Dollar',
      'benin': 'Capital: Porto-Novo, Currency: Franc',
      'bhutan': 'Capital: Thimpu, Currency: Ngultrum',
      'bolivia': 'Capital: Sucre, Currency: Boliviano',
      'bosnia and herzegovina': 'Capital: Sarajevo, Currency: Mark',
      'bosnia': 'Capital: Sarajevo, Currency: Mark',
      'herzegovina': 'Capital: Sarajevo, Currency: Mark',
      'botswana': 'Capital: Gaborone, Currency: Pula',
      'brazil': 'Capital: Brasilia, Currency: Real',
      'brunei': 'Capital: Bandar Seri Begawan, Currency: Dollar',
      'bulgaria': 'Capital: Sofia, Currency: Lev',
      'burkina faso': 'Capital: Ouagadougou, Currency: Franc',
      'burundi': 'Capital: Bujumbura, Currency: Franc',
      'cape verde': 'Capital: Praia, Currency: Escudo',
      'cabo verde': 'Capital: Praia, Currency: Escudo',
      'cambodia': 'Capital: Phnom Penh, Currency: Riel',
      'cameroon': 'Capital: Yaounde, Currency: Franc',
      'canada': 'Capital: Ottawa, Currency: Dollar',
      'central african republic': 'Capital: Bangui, Currency: Franc',
      'chad': "Capital: N'Djamena, Currency: Franc",
      'chile': 'Capital: Santiago, Currency: Peso',
      'china': 'Capital: Beijing, Currency: Renminbi',
      'colombia': 'Capital: Bogota, Currency: Peso',
      'comoros': 'Capital: Moroni, Currency: Franc',
      'congo': 'Capital: Kinshasa, Currency: Franc',
      'democratic republic of congo': 'Capital: Kinshasa, Currency: Franc',
      'costa rica': 'Capital: San Jose, Currency: Colon',
      "cote d'ivoire": 'Capital: Yamoussoukro, Currency: Franc',
      "cote divoire": 'Capital: Yamoussoukro, Currency: Franc',
      "ivory coast": 'Capital: Yamoussoukro, Currency: Franc',
      'croatia': 'Capital: Zagreb, Currency: Kuna',
      'cuba': 'Capital: Havana',
      'cyprus': 'Capital: Nicosia, Currency: Euro',
      'czech republic': 'Capital: Prague, Currency: Koruna',
      'denmark': 'Capital: Copenhagen, Currency: Krone',
      'djibouti': 'Capital: Djibouti, Currency: Franc',
      'dominica': 'Capital: Roseau, Currency: Dollar',
      'dominican republic': 'Capital: Santo Domingo, Currency: Peso',
      'ecuador': 'Capital: Quito, Currency: Dollar',
      'egypt': 'Capital: Cairo, Currency: Pound',
      'el salvador': 'Capital: San Salvador, Currency: Dollar',
      'equatorial guinea': 'Capital: Malabo, Currency: Franc',
      'eritrea': 'Capital: Asmara, Currency: Nakfa',
      'estonia': 'Capital: Tallinn, Currency: Euro',
      'eswatini': 'Capital: Mbabane, Currency: Lilangeni',
      'swaziland': 'Capital: Mbabane, Currency: Lilangeni',
      'ethiopia': 'Capital: Addis Ababa, Currency: Birr',
      'federated states of micronesia': 'Capital: Palikir, Currency: Dollar',
      'micronesia': 'Capital: Palikir, Currency: Dollar',
      'fiji': 'Capital: Suva, Currency: Dollar',
      'finland': 'Capital: Helsinki, Currency: Euro',
      'france': 'Capital: Paris, Currency: Euro',
      'gabon': 'Capital: Libreville, Currency: Franc',
      'the gambia': 'Capital: Banjul, Currency: Dalasi',
      'gambia': 'Capital: Banjul, Currency: Dalasi',
      'georgia': 'Capital: Tbilisi, Currency: Lari',
      'germany': 'Capital: Berlin, Currency: Euro',
      'ghana': 'Capital: Accra, Currency: Cedi',
      'greece': 'Capital: Athens, Currency: Euro',
      'greenland': 'Capital: Nuuk, Currency: Krone',
      'grenada': "Capital: Saint George's, Currency: Dollar",
      'guatemala': 'Capital: Guatemala City, Currency: Quetzal',
      'guinea': 'Capital: Conakry, Currency: Franc',
      'guinea-bissau': 'Capital: Bissau, Currency: Franc',
      'guineabissau': 'Capital: Bissau, Currency: Franc',
      'guyana': 'Capital: Georgetown, Currency: Dollar',
      'haiti': 'Capital: Port-Au-Prince, Currency: Gourde',
      'honduras': 'Capital: Tegucigalpa, Currency: Lempira',
      'hungary': 'Capital: Budapest, Currency: Forint',
      'iceland': 'Capital: Reykjavik, Currency: Krona',
      'india': 'Capital: New Delhi, Currency: Rupee',
      'indonesia': 'Capital: Jakarta, Currency: Rupiah',
      'iran': 'Capital: Tehran, Currency: Rial',
      'iraq': 'Capital: Baghdad, Currency: Dinar',
      'ireland': 'Capital: Dublin, Currency: Euro',
      'israel': 'Capital: Jerusalem, Currency: Shekel',
      'italy': 'Capital: Rome, Currency: Euro',
      'jamaica': 'Capital: Kingston, Currency: Dollar',
      'japan': 'Capital: Tokyo, Currency: Yen',
      'jordan': 'Capital: Amman, Currency: Dinar',
      'kazakhstan': 'Capital: Nur-Sultan, Currency: Tenge',
      'kiribati': 'Capital: South Tarawa, Currency: Dollar',
      'kosovo': 'Capital: Pristina, Currency: Euro',
      'kuwait': 'Capital: Kuwait City, Currency: Dinar',
      'kyrgyzstan': 'Capital: Bishkek, Currency: Som',
      'laos': 'Capital: Vientiane, Currency: Kip',
      'latvia': 'Capital: Riga, Currency: Euro',
      'lebanon': 'Capital: Beirut, Currency: Pound',
      'lesotho': 'Capital: Maseru, Currency: Loti',
      'liberia': 'Capital: Monrovia, Currency: Dollar',
      'libya': 'Capital: Tripoli, Currency: Dinar',
      'liechtenstein': 'Capital: Vaduz, Currency: Franc',
      'lithuania': 'Capital: Vilnius, Currency: Euro',
      'luxembourg': 'Capital: Luxembourg, Currency: Euro',
      'madagascar': 'Capital: Antananarivo, Currency: Ariary',
      'malawi': 'Capital: Lilongwe, Currency: Kwacha',
      'malaysia': 'Capital: Kuala Lumpur, Currency: Ringgit',
      'maldives': 'Capital: Male, Currency: Rufiyaa',
      'mali': 'Capital: Bamako, Currency: Franc',
      'malta': 'Capital: Valletta, Currency: Euro',
      'marshall islands': 'Capital: Majuro, Currency: Dollar',
      'mauritania': 'Capital: Nouakchott, Currency: Ouguiya',
      'mauritius': 'Capital: Port Louis, Currency: Rupee',
      'mexico': 'Capital: Mexico City, Currency: Peso',
      'moldova': 'Capital: Chisinau, Currency: Leu',
      'monaco': 'Capital: Monaco, Currency: Euro',
      'mongolia': 'Capital: Ulaanbaatar, Currency: Tugrik',
      'montenegro': 'Capital: Podgorica, Currency: Euro',
      'morocco': 'Capital: Rabat, Currency: Dirham',
      'mozambique': 'Capital: Maputo, Currency: Metical',
      'myanmar': 'Capital: Nay Pyi Taw, Currency: Kyat',
      'burma': 'Capital: Nay Pyi Taw, Currency: Kyat',
      'namibia': 'Capital: Windhoek, Currency: Dollar',
      'nauru': 'Capital: Yaren District, Currency: Dollar',
      'nepal': 'Capital: Kathmandu, Currency: Rupee',
      'netherlands': 'Capital: Amsterdam, Currency: Euro',
      'new zealand': 'Capital: Wellington, Currency: Dollar',
      'nicaragua': 'Capital: Managua, Currency: Cordoba',
      'niger': 'Capital: Niamey, Currency: Franc',
      'nigeria': 'Capital: Abuja, Currency: Naira',
      'north korea': 'Capital: Pyongyang, Currency: Won',
      'north macedonia': 'Capital: Skopje, Currency: Denar',
      'norway': 'Capital: Oslo, Currency: Krone',
      'oman': 'Capital: Muscat, Currency: Rial',
      'pakistan': 'Capital: Islamabad, Currency: Rupee',
      'palau': 'Capital: Ngerulmud, Currency: Dollar',
      'palestine': 'Capital: East Jerusalem, Currency: Shekel',
      'panama': 'Capital: Panama City, Currency: Dollar',
      'papua new guinea': 'Capital: Port Moresby, Currency: Kina',
      'paraguay': 'Capital: Asuncion, Currency: Guarani',
      'peru': 'Capital: Lima, Currency: Sol',
      'philippines': 'Capital: Manila, Currency: Peso',
      'the philippines': 'Capital: Manila, Currency: Peso',
      'poland': 'Capital: Warsaw, Currency: Zloty',
      'portugal': 'Capital: Lisbon, Currency: Euro',
      'qatar': 'Capital: Doha, Currency: Riyal',
      'republic of the congo': 'Capital: Brazzaville, Currency: Franc',
      'romania': 'Capital: Bucharest, Currency: Leu',
      'russia': 'Capital: Moscow, Currency: Ruble',
      'rwanda': 'Capital: Kigali, Currency: Franc',
      'saint kitts and nevis': 'Capital: Basseterre, Currency: Dollar',
      'saint kitts': 'Capital: Basseterre, Currency: Dollar',
      'st kitts': 'Capital: Basseterre, Currency: Dollar',
      'st. kitts': 'Capital: Basseterre, Currency: Dollar',
      'nevis': 'Capital: Basseterre, Currency: Dollar',
      'saint lucia': 'Capital: Castries, Currency: Dollar',
      'st lucia': 'Capital: Castries, Currency: Dollar',
      'st. lucia': 'Capital: Castries, Currency: Dollar',
      'saint vincent and the grenadines': 'Capital: Kingstown, Currency: Dollar',
      'saint vincent': 'Capital: Kingstown, Currency: Dollar',
      'st vincent': 'Capital: Kingstown, Currency: Dollar',
      'st. vincent': 'Capital: Kingstown, Currency: Dollar',
      'the grenadines': 'Capital: Kingstown, Currency: Dollar',
      'grenadines': 'Capital: Kingstown, Currency: Dollar',
      'samoa': 'Capital: Apia, Currency: Tala',
      'san marino': 'Capital: San Marino, Currency: Euro',
      'sao tome and principe': 'Capital: Sao Tome, Currency: Dobra',
      'sao tome': 'Capital: Sao Tome, Currency: Dobra',
      'principe': 'Capital: Sao Tome, Currency: Dobra',
      'saudi arabia': 'Capital: Riyadh, Currency: Riyal',
      'arabia': 'Capital: Riyadh, Currency: Riyal',
      'senegal': 'Capital: Dakar, Currency: Franc',
      'serbia': 'Capital: Belgrade, Currency: Dinar',
      'seychelles': 'Capital: Victoria, Currency: Rupee',
      'sierra leone': 'Capital: Freetown, Currency: Leone',
      'singapore': 'Capital: Singapore, Currency: Dollar',
      'slovakia': 'Capital: Bratislava, Currency: Euro',
      'slovenia': 'Capital: Ljubljana, Currency: Euro',
      'solomon islands': 'Capital: Honiara, Currency: Dollar',
      'somalia': 'Capital: Mogadishu, Currency: Shilling',
      'south africa': 'Capitals: Bloemfontein (judicial), Cape Town (legislative), Pretoria (executive), Currency: Rand',
      'south korea': 'Capital: Seoul, Currency: Won',
      'south sudan': 'Capital: Juba, Currency: Pound',
      'spain': 'Capital: Madrid, Currency: Euro',
      'sri lanka': 'Capital: Colombo, Sri Jayawardenepura Kotte, Currency: Rupee',
      'sudan': 'Capital: Khartoum, Currency: Pound',
      'suriname': 'Capital: Paramaribo, Currency: Dollar',
      'sweden': 'Capital: Stockholm, Currency: Krona',
      'switzerland': 'Capital: Bern, Currency: Franc',
      'syria': 'Capital: Damascus, Currency: Pound',
      'tajikistan': 'Capital: Dushanbe, Currency: Somoni',
      'tanzania': 'Capital: Dodoma, Currency: Shilling',
      'thailand': 'Capital: Bangkok, Currency: Baht',
      'timor-leste': 'Capital: Dili, Currency: Dollar',
      'timorleste': 'Capital: Dili, Currency: Dollar',
      'togo': 'Capital: Lome, Currency: Franc',
      'tonga': "Capital: Nuku'Alofa, Currency: Pa'anga",
      'trinidad and tobago': 'Capital: Port of Spain, Currency: Dollar',
      'trinidad': 'Capital: Port of Spain, Currency: Dollar',
      'tobago': 'Capital: Port of Spain, Currency: Dollar',
      'tunisia': 'Capital: Tunis, Currency: Dinar',
      'turkey': 'Capital: Ankara, Currency: Lira',
      'turkmenistan': 'Capital: Ashgabat, Currency: Manat',
      'tuvalu': 'Capital: Funafuti, Currency: Dollar',
      'uganda': 'Capital: Kampala, Currency: Shilling',
      'ukraine': 'Capital: Kiev, Currency: Hryvnia',
      'united arab emirates': 'Capital: Abu Dhabi, Currency: Dirham',
      'uae': 'Capital: Abu Dhabi, Currency: Dirham',
      'united kingdom': 'Capital: London, Currency: Pound Sterling',
      'england': 'Capital: London, Currency: Pound Sterling',
      'scotland': 'Capital: Edinburgh, Currency: Pound Sterling',
      'ireland': 'Capital: Dublin, Currency: Pound Sterling',
      'wales': 'Capital: Cardiff, Currency: Pound Sterling',
      'uk': 'Capital: London, Currency: Pound Sterling',
      'united states': 'Capital: Washington D.C., Currency: Dollar',
      'usa': 'Capital: Washington D.C., Currency: Dollar',
      'america': 'Capital: Washington D.C., Currency: Dollar',
      'united states of america': 'Capital: Washington D.C., Currency: Dollar',
      'the united states': 'Capital: Washington D.C., Currency: Dollar',
      'uruguay': 'Capital: Montevideo, Currency: Peso',
      'uzbekistan': 'Capital: Tashkent, Currency: Som',
      'vanuatu': 'Capital: Port Vila, Currency: Vatu',
      'vatican city': 'Capital: Vatican City, Currency: Euro',
      'venezuela': 'Capital: Caracas, Currency: Bolivar',
      'vietnam': 'Capital: Hanoi, Currency: Dong',
      'yemen': "Capital: Sana'a, Currency: Rial",
      'zambia': 'Capital: Lusaka, Currency: Kwacha',
      'zimbabwe': 'Capital: Harare, Currency: Dollar',
  }

  return c[land2];

}

const getElement = (element) => {

    if (element != undefined)
    {
        if (element === "help")
        {
            return "Please choose a number between 1-118 (atomic number).";
        }

        let elm = [
            'Hydrogen, Nonmetal',
            'Helium, Noble Gas',
            'Lithium, Alkali Metal',
            'Beryllium, Alkaline Earth Metal',
            'Boron, Metalloid',
            'Carbon, Nonmetal',
            'Nitrogen, Nonmetal',
            'Oxygen, Nonmetal',
            'Flourine, Halogen',
            'Neon, Noble Gas',
            'Sodium, Alkali Metal',
            'Magnesium, Alkaline Earth Metal',
            'Aluminum, Post-Transition Metal',
            'Silicon, Metalloid',
            'Phosphorus, Nonmetal',
            'Sulfur, Nonmetal',
            'Chlorine, Halogen',
            'Argon, Noble Gas',
            'Potassium, Alkali Metal',
            'Calcium, Alkaline Earth Metal',
            'Scandium, Transition Metal',
            'Titanium, Transition Metal',
            'Vanadium, Transition Metal',
            'Chromium, Transition Metal',
            'Maganese, Transition Metal',
            'Iron, Transition Metal',
            'Cobalt, Transition Metal',
            'Nickel, Transition Metal',
            'Copper, Transition Metal',
            'Zinc, Transition Metal',
            'Gallium, Post-Transition Metal',
            'Germanium, Metalloid',
            'Arsenic, Metalloid',
            'Selenium, Nonmetal',
            'Bromine, Halogen',
            'Krypton, Noble Gas',
            'Rubidium, Alkali Metal',
            'Strontium, Alkaline Earth Metal',
            'Yttrium, Transition Metal',
            'Zirconium, Transition Metal',
            'Niobium, Transition Metal',
            'Molybdenum, Transition Metal',
            'Technetium, Transition Metal',
            'Ruthenium, Transition Metal',
            'Rhodium, Transition Metal',
            'Palladium, Transition Metal',
            'Silver, Transition Metal',
            'Cadmium, Transition Metal',
            'Indium, Post-Transition Metal',
            'Tin, Post-Transition Metal',
            'Antimony, Metalloid',
            'Tellurium, Metalloid',
            'Iodine, Halogen',
            'Xenon, Noble Gas',
            'Cesium, Alkali Metal',
            'Barium, Alkaline Earth Metal',
            'Lanthanum, Lanthanide',
            'Cerium, Lanthanide',
            'Praseodymium, Lanthanide',
            'Neodymium, Lanthanide',
            'Promethium, Lanthanide',
            'Samarium, Lanthanide',
            'Europium, Lanthanide',
            'Gadolinium, Lanthanide',
            'Terbium, Lanthanide',
            'Dysprosium, Lanthanide',
            'Holmium, Lanthanide',
            'Erbium, Lanthanide',
            'Thulium, Lanthanide',
            'Ytterbium, Lanthanide',
            'Lutetium, Lanthanide',
            'Hafnium, Transition Metal',
            'Tantalum, Transition Metal',
            'Tungsten, Transition Metal',
            'Rhenium, Transition Metal',
            'Osmium, Transition Metal',
            'Iridium, Transition Metal',
            'Platinum, Transition Metal',
            'Gold, Transition Metal',
            'Mercury, Transition Metal',
            'Thallium, Post-Transition Metal',
            'Lead, Post-Transition Metal',
            'Bismuth, Post-Transition Metal',
            'Polonium, Metalloid',
            'Astatine, Halogen',
            'Radon, Noble Gas',
            'Francium, Alkali Metal',
            'Radium, Alkaline Earth Metal',
            'Actinium, Actinide',
            'Thorium, Actinide',
            'Protactinium, Actinide',
            'Uranium, Actinide',
            'Neptunium, Actinide',
            'Plutonium, Actinide',
            'Americium, Actinide',
            'Curium, Actinide',
            'Berkelium, Actinide',
            'Californium, Actinide',
            'Einsteinium, Actinide',
            'Fermium, Actinide',
            'Mendelevium, Actinide',
            'Nobelium, Actinide',
            'Lawrencium, Actinide',
            'Rutherfordium, Transition Metal',
            'Dubnium, Transition Metal',
            'Seaborgium, Transition Metal',
            'Bohrium, Transition Metal',
            'Hassium, Transition Metal',
            'Meitnerium, Transition Metal',
            'Darmstadtium, Transition Metal',
            'Roentgenium, Transition Metal',
            'Copernicium, Transition Metal',
            'Nihonium, Post-Transition Metal',
            'Flerovium, Post-Transition Metal',
            'Moscovium, Post-Transition Metal',
            'Livermorium, Post-Transition Metal',
            'Tennessine, Halogen',
            'Oganesson, Noble Gas'

        ]

        /* element.replace('&','');
        element.replace('?','');
        element.replace('!','');
        element.replace('%','');
        element.replace('$','');
        element.replace('#',''); */

        typeof element === 'number' ? element = Math.floor(element) : {};
        
        return elm[element - 1];

    } else {
        return "Type 'help' for assistance.";
    }
}

const getP = (planet) => {

  let mercury = [
    'Orbital Period: 87.969 days',
    'Rotation Period: 1,407.6 hours',
    'Average Day Length: 4,222.6 hours',
    'Equatorial Diameter: 4,879.4 kilometers',
    'Axial Tilt: 0.01 degrees',
    'Mass: 0.3302 * 10^24 kilograms',
    'Surface Gravity: 3.7 m/s^2',
    'Average Temperature: 167 degrees celsius'
  ]
  let venus = [
    'Orbital Period: 224.701 days',
    'Rotation Period: -5,832.5 hours',
    'Average Day Length: 280.2 hours',
    'Equatorial Diameter: 12,103.6 kilometers',
    'Axial Tilt: 177.36 degrees',
    'Mass: 4.8685 * 10^24 kilograms',
    'Surface Gravity: 8.87 m/s^2',
    'Surface Pressure: 92 bars',
    'Average Temperature: 464 degrees celsius'
  ]
  let earth = [
    'Orbital Period: 365.256 days',
    'Rotation Period: 23.934 hours',
    'Average Day Length: 24 hours',
    'Equatorial Diameter: 12,756 kilometers',
    'Axial Tilt: 23.45 degrees',
    'Mass: 5.9736 * 10^24 kilograms',
    'Surface Gravity: 9.78 m/s^2',
    'Surface Pressure: 1.014 bars',
    'Average Temperature: 15 degrees celsius'
  ]
  let mars = [
    'Orbital Period: 686.980 days',
    'Rotation Period: 24.623 hours',
    'Average Day Length: 24.660 hours',
    'Equatorial Diameter: 6,794 kilometers',
    'Axial Tilt: 25.19 degrees',
    'Mass: 0.64185 * 10^24 kilograms',
    'Surface Gravity: 3.69 m/s^2',
    'Surface Pressure: 0.007 bars',
    'Average Temperature: -65 degrees celsius'
  ]
  let ceres = [
    'Orbital Period: 1680.1 days',
    'Rotation Period: 9.0744 hours',
    'Average Day Length: 9.0864 hours',
    'Equatorial Diameter: 960 kilometers',
    'Mass: 0.00087 * 10^24 kilograms',
    'Average Temperature: -90 degrees celsius'
  ]
  let jupiter = [
    'Orbital Period: 4,332.6 days',
    'Rotation Period: 9.925 hours',
    'Average Day Length: 9.9259 hours',
    'Equatorial Diameter: 142,984 kilometers',
    'Axial Tilt: 3.13 degrees',
    'Mass: 1,898.6 * 10^24 kilograms',
    'Surface Gravity: 23.12 m/s^2',
    'Surface Pressure: 100+ bars',
    'Average Temperature: -110 degrees celsius'
  ]
  let saturn = [
    'Orbital Period: 10,759.2 days',
    'Rotation Period: 10.656 hours',
    'Average Day Length: 10.656 hours',
    'Equatorial Diameter: 120,536 kilometers',
    'Axial Tilt: 26.73 degrees',
    'Mass: 568.46 * 10^24 kilograms',
    'Surface Gravity: 8.96 m/s^2',
    'Surface Pressure: 100+ bars',
    'Average Temperature: -140 degrees celsius'
  ]
  let chiron = [
    'Orbital Period: 18,518 days',
    'Rotation Period: 5.8992 hours',
    'Average Day Length: 5.8992 hours',
    'Equatorial Diameter: 208 kilometers',
    'Mass: 0.000006 * 10^24 kilograms',
  ]
  let uranus = [
    'Orbital Period: 30,685 days',
    'Rotation Period: -17.239 hours',
    'Average Day Length: 17.239 hours',
    'Equatorial Diameter: 51,118 kilometers',
    'Axial Tilt: 97.77 degrees',
    'Mass: 86.832 * 10^24 kilograms',
    'Surface Gravity: 8.69 m/s^2',
    'Surface Pressure: 100+ bars',
    'Average Temperature: -195 degrees celsius'
  ]
  let neptune = [
    'Orbital Period: 60,190 days',
    'Rotation Period: 16.11 hours',
    'Average Day Length: 16.11 hours',
    'Equatorial Diameter: 49.528 kilometers',
    'Axial Tilt: 28.32 degrees',
    'Mass: 102.43 * 10^24 kilograms',
    'Surface Gravity: 11 m/s^2',
    'Surface Pressure: 100+ bars',
    'Average Temperature: -215 degrees celsius'
  ]
  let pluto = [
    'Orbital Period: 90,465 days',
    'Rotation Period: -153.29 hours',
    'Average Day Length: 153.28 hours',
    'Equatorial Diameter: 2390 kilometers',
    'Axial Tilt: 122.53 degrees',
    'Mass: 0.0125 * 10^24 kilograms',
    'Surface Gravity: 0.58 m/s^2',
    'Average Temperature: -223 degrees celsius'
  ]

  if (planet === 'mercury')
  {
    return mercury.length - 1;
  }
  else if (planet === 'venus')
  {
    return venus.length - 1;
  }
  else if (planet === 'earth' || planet === 'the earth')
  {
    return earth.length - 1;
  }
  else if (planet === 'mars')
  {
    return mars.length - 1;
  }
  else if (planet === 'ceres')
  {
    return ceres.length - 1;
  }
  else if (planet === 'jupiter')
  {
    return jupiter.length - 1;
  }
  else if (planet === 'saturn')
  {
    return saturn.length - 1;
  }
  else if (planet === 'chiron')
  {
    return chiron.length - 1;
  }
  else if (planet === 'uranus')
  {
    return uranus.length - 1;
  }
  else if (planet === 'neptune')
  {
    return neptune.length - 1;
  }
  else if (planet === 'pluto')
  {
    return pluto.length - 1;
  }

  if (planet === 'MERCURY') {
    return mercury;
  }
  else if (planet === 'VENUS')
  {
    return venus;
  }
  else if (planet === 'EARTH' || planet === 'THE EARTH')
  {
    return earth;
  }
  else if (planet === 'MARS')
  {
    return mars;
  }
  else if (planet === 'CERES')
  {
    return ceres;
  }
  else if (planet === 'JUPITER')
  {
    return jupiter;
  }
  else if (planet === 'SATURN')
  {
    return saturn;
  }
  else if (planet === 'CHIRON')
  {
    return chiron;
  }
  else if (planet === 'URANUS')
  {
    return uranus;
  }
  else if (planet === 'NEPTUNE')
  {
    return neptune;
  }
  else if (planet === 'PLUTO')
  {
    return pluto;
  }
}

const getPlanet = (planet,number) => {

  if (planet != undefined)
  {

      typeof planet === 'string' ? planet = planet.toUpperCase().trim() : {};

      planet.replace('&','');
      planet.replace('?','');
      planet.replace('!','');
      planet.replace('%','');
      planet.replace('$','');
      planet.replace('#','');

      if (planet === "HELP")
      {
          return "Please choose a planet i.e. (Mars, Mercury, Earth, etc.)";
      }
      
      if (planet === 'MERCURY') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'VENUS') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'EARTH' || planet === 'THE EARTH') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'MARS') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'CERES') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'JUPITER') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'SATURN') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'CHIRON') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'URANUS') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'NEPTUNE') {
        let newP = getP(planet);
        return newP[number];
      }
      else if (planet === 'PLUTO') {
        let newP = getP(planet);
        return newP[number];
      }

  } else {
      return "Type 'help' for assistance.";
  }
}

const topGames = (g,n) => {
    
  //typeof year === 'string' ? year = year.toLowerCase().trim() : {};

  let atari = [
    'Pac-Man by Atari Inc. 1982, 7.7 Million Sales',
    'Pitfall! by Activision 1982, 4 Million Sales',
    'Asteroids by Atari Inc. 1981, 3.8 Million Sales',
    'Missile Command by Atari Inc. 1981, 2,5 Million Sales',
    'Space Invaders by Atari Inc. 1980, 2 Million Sales',
    'Frogger by Intellivision Inc. 1982, 2 Million Sales',
    'Demon Attack by Imagic 1982, 2 Million Sales',
    'E.T. the Extra-Terrestrial by Atari Inc. 1982, 1.5 Million Sales',
    'Adventure by Atari Inc. 1980, 1 Million Sales',
    'Laser Blast by Activision 1981, 1 Million Sales',
  ]; 
  let nes = [
    'Super Mario Bros by Nintendo R&D4 1985, 40.2 Million Sales',
    'Duck Hunt by Nintendo R&D1 1984, 28.3 Million Sales',
    'Super Mario Bros 3 by Nintendo R&D4 1988, 18 Million Sales',
    'Super Mario Bros 2 by Nintendo R&D4 1988, 7.5 Million Sales',
    'The Legend of Zelda by Nintendo R&D4 1986, 6.5 Million Sales',
    'Tetris by Nintendo R&D1 1989, 5.6 Million Sales',
    'Dr. Mario by Nintendo R&D1 1990, 4.9 Million Sales',
    'Zelda II: The Adventure of Link by Nintendo R&D4 1987, 4.4 Million Sales',
    'Excitebike by Nintendo R&D1 1984, 4.2 Million Sales',
    'Golf by Nintendo R&D1 1984, 4 Million Sales'
  ];
  let gameboy = [
    'Tetris (Gameboy) by Nintendo R&D1 1989, 35 Million Sales',
    'Pokemon Red, Green, and Blue (Gameboy) by Game Freak 1996, 31.4 Million Sales',
    'Pokemon Gold and Silver (Gameboy Color) by Game Freak 1988, 23.1 Million Sales',
    'Super Mario Land (Gameboy) by Nintendo R&D1 1988, 18.1 Million Sales',
    'Pokemon Yellow (Gameboy) by Game Freak 1998, 14.6 Million Sales',
    'Super Mario Land 2: 6 Golden Coins (Gameboy) by Nintendo R&D1 1992, 11.2 Million Sales',
    'Pokemon Crystal (Gameboy Color) by Game Freak 2000, 6.4 Million Sales',
    'Dr. Mario (Gameboy) by Nintendo R&D1 1990, 5.3 Million Sales',
    'Pokemon Pinball (Gameboy Color) by Jupiter 1999, 5.3 Million Sales',
    'Wario Land: Super Mario Land 3 (Gameboy) by Nintendo R&D1 1994, 5.2 Million Sales'
  ]; 
  let snes = [
    'Super Mario World by Nintendo EAD 1990, 20.6 Million Sales',
    'Super Mario All-Stars by Nintendo EAD 1993, 10.6 Million Sales',
    'Donkey Kong Country by Rare 1994, 9.3 Million Sales',
    'Super Mario Kart by Nintendo EAD 1992, 8.8 Million Sales',
    'Street Fighter II: The World Warrior by Capcom 1992, 6.3 Million Sales',
    "Donkey Kong Country 2: Diddy's Kong Quest by Rare 1995, 5.2 Million Sales",
    'The Legend of Zelda: A Link to the Past by Nintendo EAD 1990, 4.6 Million Sales',
    "Super Mario World 2: Yoshi's Island by Nintendo EAD 1995, 4.1 Million Sales",
    'Street Fighter II Turbo: Hyper Fighting by Capcom 1993, 4.1 Million Sales',
    "Donkey Kong Country 3: Dixie Kong's Double Trouble! by Rare 1996, 3.5 Million Sales"
  ];
  let n64 = [
    'Super Mario 64 by Nintendo EAD 1996, 11.9 Million Sales',
    'Mario Kart 64 by Nintendo EAD 1996, 9.9 Million Sales',
    'GoldenEye 007 by Rare 1997, 8.1 Million Sales',
    'The Legend of Zelda: Ocarina of Time by Nintendo EAD 1998, 7.6 Million Sales',
    'Super Smash Bros. by HAL Laboratory 1999, 5.5 Million Sales',
    "Pokemon Stadium by Nintendo EAD 1999, 5.5 Million Sales",
    'Donkey Kong 64 by Nintendo EAD 1999, 5.3 Million Sales',
    "Diddy Kong Racing by Rare 1997, 4.9 Million Sales",
    'Star Fox 64 by Nintendo EAD 1997, 4 Million Sales',
    "Banjo-Kazooie by Rare 1998, 3.6 Million Sales"
  ];
  let gba = [
    'Pokemon Ruby and Sapphire by Game Freak 2002, 16.2 Million Sales',
    'Pokemon FireRed and LeafGreen by Game Freak 2004, 12 Million Sales',
    'Pokemon Emeral by Game Freak 2004, 7.1 Million Sales',
    'Mario Kart: Super Circuit by Intelligent Systems 2001, 5.9 Million Sales',
    'Super Mario World: Super Mario Advance 2 by Nintendo R&D2 2001, 5.7 Million Sales',
    "Super Mario Advance by Nintendo R&D2 2001, 5.6 Million Sales",
    'Super Mario Advance 4: Super Mario Bros. 3 by Nintendo R&D2 2003, 5.4 Million Sales',
    "Namco Museum by Mass Media Games 2001, 3 Million Sales",
    'Pac-Man Collection by Mass Media Games 2001, 2.9 Million Sales',
    "Yoshi's Island: Super Mario Advance 3 by Nintendo R&D2 2002, 2.8 Million Sales"
  ];
  let gc = [
    'Super Smash Bros. Melee by HAL Laboratory 2001, 7.4 Million Sales',
    'Mario Kart: Double Dash by Nintendo EAD 2003, 7 Million Sales',
    'Super Mario Sunshine by Nintendo EAD 2002, 6.3 Million Sales',
    'The Legend of Zelda: The Wind Waker by Nintendo EAD 2002, 3.1 Million Sales',
    "Luigi's Mansion by Nintendo EAD 2001, 3 Million Sales",
    "Animal Crossing by Nintendo EAD 2001, 2.4 Million Sales",
    'Metroid Prime by Retro Studios 2002, 2 Million Sales',
    "Mario Party 4 by Hudson Soft 2002, 2 Million Sales",
    'Mario Party 7 by Hudson Soft 2005, 1.9 Million Sales',
    "Pokemon Colosseum by Genius Sonority 2003, 1.8 Million Sales"
  ];
  let nds = [
    'New Super Mario Bros. by Nintendo EAD 2006, 30.8 Million Sales',
    'Nintendogs by Nintendo EAD 2005, 24 Million Sales',
    'Mario Kart DS by Nintendo EAD 2005, 23.6 Million Sales',
    'Brain Age by Nintendo SPD 2005, 19 Million Sales',
    'Pokemon Diamond and Pearl by Game Freak 2006, 17.7 Million Sales',
    "Pokemon Black and White by Game Freak 2010, 15.6 Million Sales",
    'Brain Age 2 by Nintendo SPD 2005, 14.9 Million Sales',
    'Pokemon HeartGold and SoulSilver by Game Freak 2009, 12.7 Million Sales',
    "Animal Crossing: Wild World by Nintendo EAD 2005, 11.8 Million Sales",
    'Super Mario 64 DS by Nintendo EAD Comprehensive Group 2004, 11.1 Million Sales',
  ];
  let wii = [
    'Wii Sports by Nintendo EAD 2006, 82.9 Million Sales',
    'Mario Kart Wii by Nintendo EAD 2009, 37.3 Million Sales',
    'Wii Sports Resort by Nintendo EAD 2009, 33.1 Million Sales',
    'New Super Mario Bros. Wii by Nintendo EAD 2009, 30.3 Million Sales',
    'Wii Play by Nintendo EAD 2006, 28 Million Sales',
    "Wii Fit by Exergaming 2008, 22.67 Million Sales",
    'Wii Fit Plus by Exergaming 2008, 21.1 Million Sales',
    "Super Smash Bros. Brawl by Ad Hoc Development Team 2008, 13.3 Million Sales",
    'Super Mario Galaxy by Nintendo EAD 2007, 12.8 Million Sales',
    "Wii Party by Nd Cube 2010, 9.3 Million Sales"
  ];
  let wiiU = [
    'Mario Kart 8 by Nintendo EAD 2014, 8.5 Million Sales',
    'Super Mario 3D World by Nintendo EAD 2013, 5.8 Million Sales',
    'New Super Mario Bros. U by Nintendo EAD 2012, 5.8 Million Sales',
    'Super Smash Bros. for Wii U by Sora Ltd. 1992, 5.3 Million Sales',
    'Nintendo Land by Nintendo EAD 2012, 5.2 Million Sales',
    "Splatoon by Nintendo EAD 2015, 5 Million Sales",
    'Super Mario Maker by Nintendo EAD 2015, 4 Million Sales',
    "New Super Luigi U by Nintendo EAD 2013, 3.1 Million Sales",
    'The Legend of Zelda: The Wind Waker HD by Nintendo EAD 2013, 2.3 Million Sales',
    "Mario Party 10 by Nd Cube 2015, 2.2 Million Sales"
  ];
  let xbox = [
    'Halo 2 by Bungie 2004, 8.5 Million Sales',
    'Halo: Combat Evolved by Bungie 2001, 5 Million Sales',
    'Fable by Big Blue Box Studios 2004, 3 Million Sales',
    'Project Gotham Racing by Bizarre Creations 2001, 2.5 Million Sales',
    'Grand Theft Auto Double Pack by Rockstar Vienna 2003, 2.5 Million Sales',
    "Star Wars: Knights of the Old Republic by BioWare 2003, 1.6 Million Sales",
    'Counter-Strike by Valve 2003, 1.5 Million Sales',
    "Ninja Gaiden by Team Ninja 2004, 1.5 Million Sales",
    'Grand Theft Auto: San Andreas by Rockstar North 2005, 1.5 Million Sales',
    "Need for Speed: Underground 2 by EA Black Box 2004, 1.4 Million Sales"
  ];
  let xbox360 = [
    'Kinect Adventures by Good Science Studio 2010, 24 Million Sales',
    'Grand Theft Auto V by Rockstar North 2013, 17.8 Million Sales',
    'Halo 3 by Bungie 2007, 14.5 Million Sales',
    'The Elder Scrolls V: Skyrim by Bethesda Game Studios 2011, 13.7 Million Sales',
    'Minecraft: Xbox 360 Edition by 4J Studios 2012, 13 Million Sales',
    "Call of Duty: Black Ops by Treyarch 2010, 12 Million Sales",
    'Halo: Reach by Bungie 2010, 9.9 Million Sales',
    "Halo 4 by 343 Industries 2012, 9.4 Million Sales",
    'Call of Duty: Modern Warfare 2 by Infinity Ward 2009, 7.6 Million Sales',
    "Gears of War by Epic Games 2006, 5 Million Sales"
  ];
  let xbox1 = [
    'Grand Theft Auto V by Rockstar North 2014, 8.7 Million Sales',
    "PlayerUnknown's Battleground by PUBG Corporation 2017, 8 Million Sales",
    'Call of Duty: Black Ops III by Treyarch 2015, 7.4 Million Sales',
    'Call of Duty: WWII by Sledgehammer Games 2017, 6.2 Million Sales',
    'Red Dead Redemption 2 by Rockstar Studios 2018, 5.8 Million Sales',
    "Minecraft: Xbox One Edition by Mojang 2014, 5.4 Million Sales",
    'Call of Duty: Advanced Warfare by Sledgehammer Games 2014, 5.2 Million Sales',
    "Battlefield 1 by EA DICE 2016, 5.1 Million Sales",
    'Fallout 4 by Bethesda Game Studios 2016, 5 Million Sales',
    "Halo 5: Guardians by 343 Industries 2015, 5 Million Sales"
  ];
  let ds3 = [
    'Mario Kart 7 by Nintendo EAD 2011, 18.7 Million Sales',
    'Pokemon X and Y by Game Freak 2013, 16.5 Million Sales',
    'Pokemon Sun and Moon by Game Freak 2016, 16.2 Million Sales',
    'Pokemon Omega Ruby and Alpha Sapphire by Game Freak 2014, 14.3 Million Sales',
    'New Super Mario Bros. 2 by Nintendo EAD 2012, 13.3 Million Sales',
    "Super Mario 3D Land by Nintendo EAD 2011, 12.7 Million Sales",
    'Animal Crossing: New Leaf by Nintendo EAD 2013, 12.6 Million Sales',
    "Super Smash Bros. for Nintendo 3DS by Sora Ltd. 2014, 9.6 Million Sales",
    'Pokemon Ultra Sun and Ultra Moon by Game Freak 2017, 8.8 Million Sales',
    "Tomodachi Life by Nintendo SPD 2014, 6.6 Million Sales"
  ];
  let nsw = [
    'Mario Kart 8 Deluxe by Nintendo EPD 2017, 24.8 Million Sales',
    'Super Smash Bros. Ultimate by Sora Ltd. 2018, 18.8 Million Sales',
    'The Legend of Zelda: Breath of the Wild by Nintendo EPD 2017, 17.4 Million Sales',
    'Super Mario Odyssey by Nintendo EPD 2017, 17.4 Million Sales',
    'Pokemon Sword and Shield by Game Freak 2019, 17.4 Million Sales',
    "Animal Crossing: New Horizons by Nintendo EPD 2020, 13.4 Million Sales",
    "Pokemon: Let's Go, Pikachu!/Eevee! by Game Freak 2018, 12 Million Sales",
    "Splatoon 2 by Nintendo EPD 2017, 10.1 Million Sales",
    'Super Mario Party by Nd Cube 2018, 10.1 Million Sales',
    "New Super Mario Bros. U Deluxe by Nintendo EPD 2019, 6.6 Million Sales"
  ];
  let segaG = [
    'Sonic the Hedgehog by Sonic Team 1991, 15 Million Sales',
    'Sonic the Hedgehog 2 by Sonic Team 1992, 6 Million Sales',
    "Disney's Aladdin by Ubisoft 1993, 4 Million Sales",
    'Sonic the Hedgehog 3/Sonic & Knuckles by Sonic Team 1994, 4 Million Sales',
    'NBA Jam by Midway 1993, 1.9 Million Sales',
    "Mortal Combat II by Midway 1993, 1.8 Million Sales",
    'Street Fighter II: Special Champion Edition by Capcom 1994, 1.7 Million Sales',
    "Altered Beast by Asmik Ace 1988, 1.4 Million Sales",
    'Mortal Kombat 3 by Midway 1995, 1 Million Sales',
    "Jurrasic Park by BlueSky Software 1993, 1 Million Sales"
  ];



  let ps1 = [
    'Gran Turismo by Polyphony Digital 1997, 10.9 Million Sales',
    'Final Fantasy VII by Square 1997, 10 Million Sales',
    'Gran Turismo 2 by Polyphony Digital 1999, 9.4 Million Sales',
    'Final Fantasy VIII by Square 1999, 8.6 Million Sales',
    'Tekken 3 by Namco 1998, 8.3 Million Sales',
    "Harry Potter and the Philosopher's Stone by Argonaut Games 2001, 8 Million Sales",
    'Tomb Raider by Core Design 1996, 7.1 Million Sales',
    "Crash Bandicoot by Naughty Dog 1996, 6.8 Million Sales",
    'Tomb Raider II by Core Design 1997, 6.8 Million Sales',
    "Metal Gear Solid by Konami 1998, 6 Million Sales"
  ];
  let ps2 = [
    'Grand Theft Auto: San Andreas by Rockstar North 2004, 17.3 Million Sales',
    'Gran Turismo 3: A-Spec by Polyphony Digital 2001, 14.9 Million Sales',
    'Gran Turismo 4 by Polyphony Digital 2005, 11.8 Million Sales',
    'Grand Theft Auto: Vice City by Rockstar North 2002, 9.8 Million Sales',
    'Final Fantasy X by Square 2001, 8.5 Million Sales',
    "Grand Theft Auto III by Rockstar North 2001, 8.1 Million Sales",
    'Metal Gear Solid 2: Sons of Liberty by Konami 2001, 7 Million Sales',
    "Final Fantasy XII by Square Enix 2006, 6 Million Sales",
    'Tekken 5 by Namco 2005, 6 Million Sales',
    "Kingdom Hearts by Square 2002, 5.9 Million Sales"
  ];
  let ps3 = [
    'Grand Theft Auto V by Rockstar North 2013, 21.3 Million Sales',
    'Gran Turismo 5 by Polyphony Digital 2010, 11.9 Million Sales',
    'The Last of Us by Naughty Dog 2013, 7 Million Sales',
    "Uncharted 3: Drake's Deception by Naughty Dog 2011, 6.6 Million Sales",
    'Uncharted 3: Among Thieves by Naughty Dog 2009, 6.5 Million Sales',
    "Metal Gear Solid 4: Guns of the Patriots by Kojima Productions 2008, 6 Million Sales",
    'Batman: Arkham City by Rocksteady Studios 2011, 5.5 Million Sales',
    "Gran Turismo 5 Prologue by Polyphony Digital 2008, 5.4 Million Sales",
    'God of War III by Santa Monica Studio 2010, 5.2 Million Sales',
    "Gran Turismo 6 by Polyphony Digital 2013, 5.1 Million Sales"
  ];
  let ps4 = [
    'Grand Theft Auto V by Rockstar North 2014, 20 Million Sales',
    "Uncharted 4: A Thief's End by Naughty Dog 2016, 16 Million Sales",
    "Marvel's Spider-Man by Insomniac Games 2018, 13.2 Million Sales",
    'The Witcher 3: Wild Hunt by CD Projekt Red 2015, 10.8 Million Sales',
    'God of War by Santa Monica Studio 2014, 10 Million Sales',
    "The Last of Us Remastered by Naughty Dog 2014, 10 Million Sales",
    'Horizon Zero Dawn by Guerrilla Games 2017, 10 Million Sales',
    "Gran Turismo Sport by Polyphony Digital 2017, 8 Million Sales",
    'Monster Hunter: World by Capcom 2018, 4.7 Million Sales',
    "The Last of Us Part II by Naughty Dog 2020, 4 Million Sales"
  ];
  let psp = [
    'Grand Theft Auto: Liberty City Stories by Rockstar Leeds/North 2005, 8 Million Sales',
    'Grand Theft Auto: Vice City Stories by Rockstar Leeds/North 2006, 5 Million Sales',
    'Monster Hunter Portable 3rd by Capcom 2010, 5 Million Sales',
    'Gran Turismo by Polyphony Digital 2009, 4.1 Million Sales',
    'Monster Hunter Freedom Unite by Capcom 2008, 3.8 Million Sales',
    "Ratchet & Clank: Size Matters by High Impact Games 2007, 3.7 Million Sales",
    'God of War: Chains of Olympus by Ready at Dawn/Santa Monica Studio 2008, 3.2 Million Sales',
    "Crisis Core: Final Fantasy VII by Square Enix 2007, 3.1 Million Sales",
    'Monster Hunter Freedom 2 by Capcom 2007, 2.4 Million Sales',
    "Daxter by Ready at Dawn 2006, 2.3 Million Sales"
  ];
  let pc = [
    "PlayerUnknown's Battlegrounds by PUBG Corporation 2017, 42 Million Sales",
    'Minecraft by Mojang 2011, 33 Million Sales',
    'Diablo III by Blizzard Entertainment 2012, 20 Million Sales',
    'World of Warcraft by Blizzard Entertainment 2004, 14 Million Sales',
    'Terraria by Re-Logic 2011, 14 Million Sales',
    "The Witcher 3: Wild Hunt by CD Projekt Red 2015, 12 Million Sales",
    'The Sims by Maxis 2000, 11 Million Sales',
    "StarCraft by Blizzard Entertainment 1998, 11 Million Sales",
    "Garry's Mod by Facepunch Studios 2006, 10 Million Sales",
    "RollerCoaster Tycoon 3 by Frontier Developments 2004, 10 Million Sales"
  ];


  typeof n === 'number' ? n = Math.floor(n) : {};
  typeof g === 'string' ? g = g.toLowerCase().trim() : {};

  if (g === 'atari' || g === 'atari 2600') {
    let at = atari[n-1];
    return at;
  }
  else if (g === 'nes' || g === 'nintendo entertainment system') {
    let ne = nes[n-1];
    return ne;
  }
  else if (g === 'gameboy' || g === 'gameboy color' || g === 'gb' || g === 'gbc') {
    let gb = gameboy[n-1];
    return gb;
  }
  else if (g === 'snes' || g === 'super nintendo' || g === 'super nintendo entertainment system') {
    let sn = snes[n-1];
    return sn;
  }
  else if (g === 'n64' || g === 'nintendo 64') {
    let n6 = n64[n-1];
    return n6;
  }
  else if (g === 'gba' || g === 'gameboy advance') {
    let g2 = gba[n-1];
    return g2;
  }
  else if (g === 'gc' || g === 'gamecube' || g === 'nintendo gamecube') {
    let gcu = gc[n-1];
    return gcu;
  }
  else if (g === 'ds' || g === 'nintendo ds') {
    let ds = nds[n-1];
    return ds;
  }
  else if (g === '3ds' || g === 'nintendo 3ds') {
    let d3 = ds3[n-1];
    return d3;
  }
  else if (g === 'switch' || g === 'nintendo switch') {
    let sw = nsw[n-1];
    return sw;
  }
  else if (g === 'genesis' || g === 'sega genesis') {
    let sg = segaG[n-1];
    return sg;
  }
  else if (g === 'xbox' || g === 'microsoft xbox') {
    let x1 = xbox[n-1];
    return x1;
  }
  else if (g === 'xbox 360' || g === 'microsoft xbox 360') {
    let x2 = xbox360[n-1];
    return x2;
  }
  else if (g === 'xbox 1' || g === 'xbox one' || g === 'microsoft xbox 1' || g === 'microsoft xbox one') {
    let x3 = xbox1[n-1];
    return x3;
  }
  else if (g === 'wii' || g === 'nintendo wii') {
    let w1 = wii[n-1];
    return w1;
  }
  else if (g === 'wiiu' || g === 'wii u' || g === 'nintendo wiiu' || g === 'nintendo wii u') {
    let w2 = wiiU[n-1];
    return w2;
  }
  else if (g === 'playstation' || g === 'playstation 1' || g === 'sony playstation' || g === 'sony playstation 1' || g === 'sony playstation one' || g === 'ps1') {
    let p1 = ps1[n-1];
    return p1;
  }
  else if (g === 'playstation 2' || g === 'sony playstation 2' || g === 'sony playstation two' || g === 'ps2') {
    let p2 = ps2[n-1];
    return p2;
  }
  else if (g === 'playstation 3' || g === 'sony playstation 3' || g === 'sony playstation three' || g === 'ps3') {
    let p3 = ps3[n-1];
    return p3;
  }
  else if (g === 'playstation 4' || g === 'sony playstation 4' || g === 'sony playstation four' || g === 'ps4') {
    let p4 = ps4[n-1];
    return p4;
  }
  else if (g === 'playstation portable' || g === 'sony playstation portable' || g === 'sony psp' || g === 'psp') {
    let p2 = ps2[n-1];
    return p2;
  }
  else if (g === 'pc' || g === 'computer' || g === 'desktop' || g === 'personal computer') {
    let pC = pc[n-1];
    return pC;
  }

}

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

const app = new Vue({
  
  el: '#app',

  data: {
    element: '',
    usC: '',
    CCC: '',
    game: '',
    planet: '',
    rank: 1,
    atomicNum: 1,
    maxElement: 118,
    planetVal: 1,
    max: 10,
    planetMax: 1,
    cantUse: true,
    cantUse2: true
  },

  computed: {

    // get and set periodic table of elements
    n1: {
      get: function() {
        return getElement(this.atomicNum);
      },
      set: function(ele) {
        const e = ele;

        //this.val1 = names;
        this.element = e;
      }
    },

    // get and set united states capitals
    n2: {
      get: function() {
        return getCapital1(this.usC);
      },
      set: function(Cap) {
        const US = Cap;
        this.usC = US;
      }
    },

    // get and set country capitals and currencies
    n3: {
      get: function() {
        return getCapital2(this.CCC);
      },
      set: function(C) {
        const cc = C;

        this.CCC = cc;
      }
    },

    // get and set videogame ranks
    n4: {
      get: function() {
        return topGames(this.game,this.rank);
      },
      set: function(G) {
        const vg = G[0];
        //this.otherName = names;
        this.game = vg;
      }
    },

    // get and set planet information
    n5: {
      get: function() {
        return getPlanet(this.planet,this.planetVal);
      },
      set: function(p) {
        const thisP = p;
        this.planet = thisP;
      }
    }
  },
  watch: {
    
  },
  methods: {

    // reset all fields
    resetFields: function() {
      this.capital = '';
      this.usC = '';
      this.CCC = '';
      this.planet = '';
      this.game = '';
      this.rank = 1;
      this.atomicNum = 1;
      this.planetVal = 1;
      this.planetMax = 1;
      this.cantUse = true;
      this.cantUse2 = true;
    },

    // change max value for videogame slider
    changeRankMax: function() {
      let p = this.game.toLowerCase().trim()
      if (
        p === 'atari' || p === 'atari 2600' ||
        p === 'nes' || p === 'nintendo entertainment system' ||
        p === 'gameboy' || p === 'gameboy color' ||
        p === 'gb' || p === 'gbc' ||
        p === 'snes' || p === 'super nintendo' ||
        p === 'super nintendo entertainment system' || p === 'n64' ||
        p === 'nintendo 64' || p === 'gba' ||
        p === 'gameboy advance' || p === 'gc' ||
        p === 'gamecube' || p === 'nintendo gamecube' ||
        p === 'ds' || p === 'nintendo ds' ||
        p === '3ds' || p === 'nintendo 3ds' ||
        p === 'switch' || p === 'nintendo switch' ||
        p === 'genesis' || p === 'sega genesis' ||
        p === 'xbox' || p === 'microsoft xbox' ||
        p === 'xbox 360' || p === 'microsoft xbox 360' ||
        p === 'xbox 1' || p === 'xbox one' ||
        p === 'microsoft xbox 1' || p === 'microsoft xbox one' ||
        p === 'wii' || p === 'nintendo wii' ||
        p === 'wiiu' || p === 'wii u' ||
        p === 'nintendo wiiu' || p === 'nintendo wii u' ||
        p === 'playstation' || p === 'playstation 1' ||
        p === 'sony playstation' || p === 'sony playstation 1' ||
        p === 'sony playstation one' || p === 'ps1' ||
        p === 'playstation 2' || p === 'sony playstation 2' ||
        p === 'sony playstation two' || p === 'ps2' ||
        p === 'playstation 3' || p === 'sony playstation 3' ||
        p === 'sony playstation three' || p === 'ps3' ||
        p === 'playstation 4' || p === 'sony playstation 4' ||
        p === 'sony playstation four' || p === 'ps4' ||
        p === 'playstation portable' || p === 'sony playstation portable' ||
        p === 'sony psp' || p === 'psp' ||
        p === 'pc' || p === 'computer' ||
        p === 'desktop' || p === 'personal computer'
      )
      {
        this.Max = 10;
        this.cantUse2 = false;
      } else {
        this.Max = 1;
        this.cantUse2 = true;
      }
    },

    // change max value for planet slider
    changeMax: function() {
      let p = this.planet.toLowerCase().trim()
      if (
        p === 'mercury' || p === 'venus' ||
        p === 'earth' || p === 'the earth' ||
        p === 'mars' || p === 'ceres' ||
        p === 'jupiter' || p === 'saturn' ||
        p === 'chiron' || p === 'uranus' ||
        p === 'neptune' || p === 'pluto'
      )
      {
        const pValue = getP(p);
        this.planetMax = pValue;
        this.cantUse = false;
      } else {
        this.planetMax = 1;
        this.cantUse = true;
      }
    }
  }
});