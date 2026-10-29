// Events abroad (Europe, Asia, Oceania) between late March and early August 2027.
// status: "confirmed" = 2027 dates published; "annual" = same calendar date every year; "tbc" = 2027 not announced yet, date is based on the 2025/2026 pattern.
// region: EU (Europe), AS (Asia), OC (Oceania). cat: sport, music, drink, festival, culture.
// len: how long the trip realistically needs from New York.
window.TRIP_EVENTS = [

// ===================== EUROPE =====================
{ id:"grand-national", t:"Grand National Festival", loc:"Aintree, Liverpool", country:"England", region:"EU", cat:"sport", start:"2027-04-08", end:"2027-04-10", status:"tbc",
  desc:"Three days of jump racing ending with the National on Saturday, the most-watched horse race on earth. Ladies' Day on Friday is the party. Liverpool's bars take it from there.",
  golf:"England's Golf Coast is right there: Royal Birkdale, Hillside, Formby, Southport & Ainsdale, Royal Liverpool (Hoylake), Royal Lytham. All bookable as visitors with notice.",
  plus:["Big race plus a serious golf coast in one spot","Liverpool nightlife","Cheap-ish flights into Manchester"], minus:["Early April: 50F and wet","Race itself is one afternoon"], len:"7 nights works (Liverpool, 3 to 4 rounds)" },

{ id:"feria-abril", t:"Feria de Abril", loc:"Seville", country:"Spain", region:"EU", cat:"drink", start:"2027-04-11", end:"2027-04-17", status:"tbc",
  desc:"A week of drinking rebujito (sherry and lemon soda) in 1,000+ striped tents (casetas) until 6 a.m., flamenco dresses, horses, and a fairground. Two weeks after Easter, so mid-April in 2027.",
  golf:"Real Club de Golf de Sevilla (hosted the Spanish Open). Valderrama, Sotogrande and Finca Cortesin are 2 hours south.",
  plus:["All-night party for a full week","Great food, cheap","Andalusia in spring is perfect weather"], minus:["Best casetas are private; you need an invite or go public","Hotels triple"], len:"7 nights (Seville + Sotogrande golf)" },

{ id:"frühlingsfest", t:"Munich Frühlingsfest", loc:"Munich", country:"Germany", region:"EU", cat:"drink", start:"2027-04-16", end:"2027-05-02", status:"tbc",
  desc:"Oktoberfest's little brother on the same Theresienwiese grounds: two giant beer tents, liter steins, lederhosen, rides, no tourist crush.",
  golf:"Munich has a dozen decent parkland courses (GC München Eichenried hosts the BMW International Open).",
  plus:["Oktoberfest energy at a fraction of the price and crowds","Easy add-on to Alps"], minus:["Still cool in April","Golf is fine, not a destination"], len:"7 nights (Munich + Austria/Alps)" },

{ id:"kings-day", t:"King's Day (Koningsdag)", loc:"Amsterdam", country:"Netherlands", region:"EU", cat:"drink", start:"2027-04-27", end:"2027-04-27", status:"annual",
  desc:"The biggest street party in Europe: the whole country dressed in orange, boats jammed on the canals, DJs on every corner, from morning until the police give up. Falls on a Tuesday in 2027 (King's Night is Monday).",
  golf:"The Dutch (hosted KLM Open) and Amsterdamse GC. Decent, not the reason to go.",
  plus:["One of the great drinking days on the planet","Amsterdam is an easy nonstop"], minus:["Weekday","One day; the rest is a normal Amsterdam trip"], len:"5 to 7 nights" },

{ id:"punchestown", t:"Punchestown Festival", loc:"Kildare", country:"Ireland", region:"EU", cat:"sport", start:"2027-04-27", end:"2027-05-01", status:"tbc",
  desc:"Ireland's end-of-season jump racing festival, five days, 130,000 people, Guinness tents. The K Club is 15 minutes away.",
  golf:"The K Club (two courses), Carton House (two), The Island, Portmarnock all within an hour.",
  plus:["Racing plus Ireland's best inland golf in one base","Dublin airport 45 minutes but no need to stay in Dublin"], minus:["Inland, not the coast you like","Late April weather is a coin flip"], len:"7 nights" },

{ id:"orthodox-easter-corfu", t:"Orthodox Easter in Corfu", loc:"Corfu", country:"Greece", region:"EU", cat:"festival", start:"2027-04-30", end:"2027-05-02", status:"annual",
  desc:"Holy Saturday (May 1) locals hurl giant clay pots full of water off balconies in Corfu Town, then the island parties through Easter Sunday with lamb on spits and ouzo. Greek Easter is a week after ours in 2027.",
  golf:"Corfu Golf Club (Ropa Valley), one course, decent. Not a golf trip.",
  plus:["One of the most unusual festival scenes in Europe","Early-season island prices"], minus:["Golf is thin","Sea still cold"], len:"7 nights" },

{ id:"nrl-magic-round", t:"NRL Magic Round", loc:"Brisbane", country:"Australia", region:"OC", cat:"sport", start:"2027-05-07", end:"2027-05-09", status:"tbc",
  desc:"Every NRL game of the round played at Suncorp Stadium over one weekend: eight games, three days, the entire league's fans in one city drinking in Caxton Street.",
  golf:"Brookwater (Greg Norman), Sanctuary Cove and the Gold Coast courses an hour south.",
  plus:["Pure sports-bar weekend, Brisbane is warm in May","Gold Coast beaches and golf next door"], minus:["Rugby league is an acquired taste","Far for a one-weekend event"], len:"10 to 14 nights (Australia from NYC)" },

{ id:"giro", t:"Giro d'Italia (final weekends)", loc:"Italy", country:"Italy", region:"EU", cat:"sport", start:"2027-05-08", end:"2027-05-30", status:"tbc",
  desc:"Three weeks of racing through Italy; the mountain stages in the Dolomites in the last week and the Rome finish are the ones to see from a roadside bar.",
  golf:"Golf Club Castelfalfi, Royal Golf La Bagnaia (Tuscany), Golf Nazionale (Rome).",
  plus:["Free, roadside, wine involved","Italy in May"], minus:["You chase it by car","Golf is secondary"], len:"7 to 10 nights" },

{ id:"eurovision", t:"Eurovision Song Contest Final", loc:"Burgas", country:"Bulgaria", region:"EU", cat:"music", start:"2027-05-11", end:"2027-05-15", status:"confirmed",
  desc:"The camp, chaotic, 160-million-viewer song contest, final on Saturday May 15 in Burgas on the Black Sea coast. Semi-finals May 11 and 13. Cheap beer, surprisingly fun crowd.",
  golf:"Thracian Cliffs (Gary Player, cliffside, one of Europe's most dramatic), BlackSeaRama and Lighthouse, all 2 hours north near Varna.",
  plus:["Bulgaria is absurdly cheap","Thracian Cliffs is a bucket-list course"], minus:["Two flights","Eurovision is Eurovision"], len:"7 nights" },

{ id:"san-isidro", t:"San Isidro Festival", loc:"Madrid", country:"Spain", region:"EU", cat:"festival", start:"2027-05-15", end:"2027-05-15", status:"annual",
  desc:"Madrid's patron saint day: street parties, free concerts, and the start of the San Isidro bullfighting season at Las Ventas (runs through early June, the Super Bowl of bullfighting).",
  golf:"Real Club de Golf La Moraleja, Club de Campo Villa de Madrid, Centro Nacional de Golf.",
  plus:["Madrid nightlife is the best in Europe","Easy nonstop"], minus:["Bullfighting is not for everyone","Hot by late May"], len:"5 to 7 nights" },

{ id:"norway-day", t:"Norway National Day", loc:"Oslo", country:"Norway", region:"EU", cat:"drink", start:"2027-05-17", end:"2027-05-17", status:"annual",
  desc:"The whole country in traditional bunad, parades, champagne breakfast, and a nation politely drunk by noon. Then fjords.",
  golf:"Oslo Golf Club (Bogstad), Losby, Miklagard. Lofoten Links in the Arctic (midnight-sun golf) is the real draw if you go north.",
  plus:["Unique national-party day","Lofoten Links at midnight sun is a once-in-a-lifetime round"], minus:["Norway prices","Monday"], len:"7 to 10 nights (Oslo + Lofoten)" },

{ id:"pl-final-day", t:"Premier League Final Day", loc:"England", country:"England", region:"EU", cat:"sport", start:"2027-05-23", end:"2027-05-23", status:"tbc",
  desc:"All ten matches kick off at the same time on the last Sunday. Pick a city, pick a pub. FA Cup Final is usually the Saturday before or after at Wembley.",
  golf:"Depends on city. Manchester or Liverpool put you on England's Golf Coast; London puts you near Sunningdale, Wentworth, Royal St George's.",
  plus:["Pub atmosphere is the point","Combine with Liverpool/Southport golf"], minus:["Tickets to a match are hard","Late May can be cold"], len:"7 nights" },

{ id:"roland-garros", t:"French Open", loc:"Paris", country:"France", region:"EU", cat:"sport", start:"2027-05-23", end:"2027-06-06", status:"tbc",
  desc:"Two weeks of clay-court tennis at Roland Garros, finals weekend Jun 5 to 6. Grounds passes get you onto the outer courts with a glass of rosé.",
  golf:"Le Golf National (2018 Ryder Cup), Chantilly, Fontainebleau, Morfontaine (private, world top 50).",
  plus:["Paris in June","Le Golf National is a must-play"], minus:["Center-court tickets via lottery","Paris is not a pub town"], len:"7 nights" },

{ id:"iom-tt", t:"Isle of Man TT", loc:"Isle of Man", country:"UK", region:"EU", cat:"sport", start:"2027-05-29", end:"2027-06-11", status:"tbc",
  desc:"Motorcycles doing 200 mph on public roads through villages. Practice week then race week. Watch from a pub garden on the Mountain Course with a pint. The most dangerous race in the world.",
  golf:"Castletown Golf Links (seaside, excellent), Ramsey, Mount Murray.",
  plus:["Nothing else like it anywhere","Pubs are part of the viewing"], minus:["Island fills up; book a year out","Getting there is a ferry or a small plane"], len:"7 nights" },

{ id:"copenhagen-distortion", t:"Distortion", loc:"Copenhagen", country:"Denmark", region:"EU", cat:"drink", start:"2027-06-02", end:"2027-06-06", status:"tbc",
  desc:"Five-day street party that takes over a different neighborhood each day with DJs, then club nights. 300,000 people in the streets drinking Carlsberg from the can.",
  golf:"Royal Copenhagen, Great Northern (Nicklaus), Scandinavian Golf Club (two top courses), all under an hour.",
  plus:["Copenhagen in June is perfect","Scandinavian Golf Club is world class"], minus:["Expensive city","Mostly electronic music"], len:"7 nights" },

{ id:"primavera", t:"Primavera Sound", loc:"Barcelona", country:"Spain", region:"EU", cat:"music", start:"2027-06-03", end:"2027-06-05", status:"tbc",
  desc:"The best-curated big festival in Europe, on the waterfront at Parc del Fòrum. Headliners the last three years: Lana Del Rey, Pulp, Vampire Weekend, Sabrina Carpenter, Charli XCX. Runs until 6 a.m.",
  golf:"PGA Catalunya (Stadium Course, Spain's best), Real Club de Golf El Prat, Emporda, all within 90 min.",
  plus:["Barcelona plus a world-class festival","PGA Catalunya"], minus:["Festival days start at 5 p.m. and end at dawn, so golf mornings hurt","Pricey week in Barcelona"], len:"7 nights" },

{ id:"kilkenny-cat-laughs", t:"Kilkenny Cat Laughs", loc:"Kilkenny", country:"Ireland", region:"EU", cat:"festival", start:"2027-06-03", end:"2027-06-07", status:"tbc",
  desc:"Comedy festival in a medieval pub town over the June bank holiday weekend: 100+ comics doing sets in pubs, Smithwick's brewery on the river.",
  golf:"Mount Juliet (Nicklaus, hosted Irish Open) is 15 minutes away. Kilkenny GC in town.",
  plus:["Pub town, walkable","Mount Juliet"], minus:["Inland","Bank holiday crowds"], len:"7 nights (pair with southeast coast)" },

{ id:"monaco-gp", t:"Monaco Grand Prix", loc:"Monaco", country:"Monaco", region:"EU", cat:"sport", start:"2027-06-04", end:"2027-06-06", status:"confirmed",
  desc:"F1's crown jewel, first Monaco sprint weekend in 2027. Watch from a yacht, a balcony, or the Rocher hillside for cheap. Same weekend as the Champions League final in Madrid.",
  golf:"Monte-Carlo Golf Club (on a mountain above the principality), Terre Blanche (two top courses, 90 min), Cannes-Mougins.",
  plus:["The one race worth the trip","Nice and Antibes beaches"], minus:["Stupid expensive; grandstand seats from $1,000","Hotels in Monaco sell out a year ahead"], len:"7 nights (Nice base)" },

{ id:"ucl-final", t:"UEFA Champions League Final", loc:"Estadio Metropolitano, Madrid", country:"Spain", region:"EU", cat:"sport", start:"2027-06-05", end:"2027-06-05", status:"confirmed",
  desc:"The biggest club match in the world, Saturday Jun 5. Even without a ticket, Madrid on final day is a party; fan zones, Plaza Mayor, and a 3 a.m. city.",
  golf:"La Moraleja, Club de Campo, Centro Nacional. Pair with Valderrama/Sotogrande (3 hours south) for the real golf.",
  plus:["Madrid nightlife","Same weekend as Monaco if you want a two-city sprint"], minus:["Tickets effectively hospitality-only, $3,000+","Which teams is a coin flip"], len:"7 nights" },

{ id:"wtc-final", t:"World Test Championship Final", loc:"The Oval, London", country:"England", region:"EU", cat:"sport", start:"2027-06-09", end:"2027-06-13", status:"confirmed",
  desc:"Cricket's world final, five days at The Oval. If you're going to get into cricket, a day at an English Test ground with a pint of Pimm's in the sun is the way.",
  golf:"Sunningdale, Wentworth, Walton Heath, Royal St George's (90 min).",
  plus:["London","Easy warm-up for the Ashes a week later"], minus:["A day of cricket is long","Teams TBD"], len:"7 nights" },

{ id:"santo-antonio", t:"Santo António Festival", loc:"Lisbon", country:"Portugal", region:"EU", cat:"drink", start:"2027-06-12", end:"2027-06-13", status:"annual",
  desc:"Lisbon's big night (Jun 12): every street in Alfama and Graça becomes a grilled-sardine-and-beer party with music until sunrise. Then a parade on the 13th.",
  golf:"Oitavos Dunes (Cascais, world top 100 links-style), Penha Longa, Troia. Algarve 2.5 hours.",
  plus:["Cheapest great city in Western Europe","Oitavos Dunes"], minus:["One night","Crowded"], len:"7 nights (Lisbon + Algarve golf)" },

{ id:"le-mans", t:"24 Hours of Le Mans", loc:"Le Mans", country:"France", region:"EU", cat:"sport", start:"2027-06-12", end:"2027-06-13", status:"tbc",
  desc:"Twenty-four hours of racing with a 300,000-person campsite party around it. Ferris wheel at 3 a.m., beer tents, Porsche curves. Weekend of Jun 12 to 13 by the usual pattern.",
  golf:"Le Mans GC (24 Heures course), Golf des 24 Heures. Paris courses 2 hours away.",
  plus:["All-night atmosphere","Combine with Paris"], minus:["Camping or 90-minute drives","Golf is a sideshow"], len:"7 nights" },

{ id:"royal-ascot", t:"Royal Ascot", loc:"Ascot, Berkshire", country:"England", region:"EU", cat:"drink", start:"2027-06-15", end:"2027-06-19", status:"tbc",
  desc:"Five days of flat racing, top hats, champagne, and a crowd that drinks 56,000 bottles of Champagne. The Queen Anne Enclosure is the sweet spot (no morning suit needed, just a jacket and tie).",
  golf:"Sunningdale (Old and New), Swinley Forest, Wentworth, The Berkshire: the heathland belt is literally next door and is England's best inland golf.",
  plus:["Drinking event plus the best inland golf in England within 20 minutes","Trains from London"], minus:["Dress code","Pricey"], len:"7 nights" },

{ id:"ashes", t:"The Ashes (England v Australia)", loc:"Nottingham, London, Birmingham, Southampton", country:"England", region:"EU", cat:"sport", start:"2027-06-18", end:"2027-08-02", status:"confirmed",
  desc:"Five Tests: Trent Bridge Jun 18 to 22, Lord's Jun 30 to Jul 4, Edgbaston Jul 8 to 12, Southampton Jul 21 to 25, The Oval Jul 29 to Aug 2. Edgbaston's Hollies Stand is the drunkest crowd in cricket; Lord's is the cathedral.",
  golf:"Lord's: Sunningdale/Wentworth. Edgbaston: The Belfry (Ryder Cup x4). Southampton: Remedy Oak, Parkstone, Broadstone. Nottingham: Notts (Hollinwell), a top-100 course.",
  plus:["Day 2 or 3 of a Test is a full day of drinking in the sun with 25,000 people","Pairs with The Open and Scottish Open in July"], minus:["Five days per Test; you'd go for one or two days","Tickets via ballot, released early"], len:"7 to 14 nights" },

{ id:"portugal-gp", t:"Portuguese Grand Prix", loc:"Portimão, Algarve", country:"Portugal", region:"EU", cat:"sport", start:"2027-06-18", end:"2027-06-20", status:"confirmed",
  desc:"F1 returns to the Algarve rollercoaster circuit. The whole region is a golf resort with a race attached.",
  golf:"The best density in Europe: Monte Rei (Nicklaus), Quinta do Lago (South), Vale do Lobo, Penina, Vilamoura Old Course, Palmares. All 20 to 60 min from the track.",
  plus:["Best golf-plus-F1 combo on this list","Algarve beaches and seafood"], minus:["Algarve nightlife is Vilamoura marina and that's about it","Hot"], len:"7 nights" },

{ id:"kiel-week", t:"Kieler Woche", loc:"Kiel", country:"Germany", region:"EU", cat:"drink", start:"2027-06-19", end:"2027-06-27", status:"tbc",
  desc:"The largest sailing event in the world and a nine-day waterfront festival with 3 million visitors, beer gardens the length of the harbor, free concerts every night.",
  golf:"GC Kitzeberg (on the fjord), GC Kiel. Hamburg's courses 90 min away.",
  plus:["Massive, free, under-the-radar for Americans","Baltic coast"], minus:["Sailing is the sport","Kiel is not glamorous"], len:"7 nights" },

{ id:"glastonbury", t:"Glastonbury Festival", loc:"Pilton, Somerset", country:"England", region:"EU", cat:"music", start:"2027-06-23", end:"2027-06-27", status:"confirmed",
  desc:"The one. 210,000 people, 100+ stages, five days, the Pyramid Stage. Exactly Jun 23 to 27, 2027. Main sale sold out in October 2026; the resale for returned tickets is late April 2027 and you must be registered first (free at glastonburyfestivals.co.uk).",
  golf:"Burnham & Berrow (championship links, 45 min) is excellent. Bath and Bristol parklands otherwise.",
  plus:["Biggest and best festival on earth","Dates match the June green weekend exactly"], minus:["Tickets are a lottery; register now and hit the April resale","Camping, mud, five days with no shower"], len:"7 nights (fly Tue, festival Wed to Sun)" },

{ id:"sao-joao", t:"Festa de São João", loc:"Porto", country:"Portugal", region:"EU", cat:"drink", start:"2027-06-23", end:"2027-06-24", status:"annual",
  desc:"Porto's wildest night: the entire city in the streets hitting each other with plastic hammers, grilled sardines, port wine, fireworks over the Douro at midnight, then dawn on the beach.",
  golf:"Oporto Golf Club (Espinho, 1890, oldest in Iberia), Estela (links), Ponte de Lima. Vidago Palace inland.",
  plus:["Cheap, chaotic, friendly","Port cellars by day"], minus:["One night","Golf is good not great"], len:"7 nights (Porto + Lisbon)" },

{ id:"calcio-storico", t:"Calcio Storico Final", loc:"Florence", country:"Italy", region:"EU", cat:"sport", start:"2027-06-24", end:"2027-06-24", status:"annual",
  desc:"Sixteenth-century rugby-boxing-football hybrid played in sand in Piazza Santa Croce by four neighborhoods in Renaissance costume. Final every Jun 24 (San Giovanni) with fireworks over the Arno.",
  golf:"Golf Club Ugolino (1889, hills south of Florence), Castelfalfi, Royal Golf La Bagnaia.",
  plus:["Most insane sporting event in Europe","Tuscany"], minus:["Tickets are scarce and go to locals","One day"], len:"7 nights (Tuscany road trip)" },

{ id:"ceres-games", t:"Ceres Highland Games", loc:"Ceres, Fife", country:"Scotland", region:"EU", cat:"festival", start:"2027-06-26", end:"2027-06-26", status:"tbc",
  desc:"The oldest free Highland Games in Scotland (since 1314), last Saturday of June, in a village 20 minutes from St Andrews. Caber toss, pipe bands, beer tent, then pubs in St Andrews.",
  golf:"St Andrews (Old Course ballot, plus New, Jubilee, Castle), Kingsbarns, Crail, Elie, Carnoustie, Dumbarnie. The best golf week on earth is within 30 minutes.",
  plus:["Pure golf-first trip with a quirky event attached","East Neuk fishing-village pubs"], minus:["Old Course ballot is luck","Fife weather"], len:"7 nights" },

{ id:"irish-derby", t:"Irish Derby", loc:"The Curragh, Kildare", country:"Ireland", region:"EU", cat:"sport", start:"2027-06-25", end:"2027-06-27", status:"tbc",
  desc:"Ireland's biggest flat race, last weekend of June, with the Derby itself on Saturday. Big tents, big crowd, big night in Newbridge and Kildare after.",
  golf:"The K Club (Irish Open there Jul 1 to 4 the following week), Carton House, The Island, Portmarnock, The European Club.",
  plus:["Lines up with the Irish Open the next week","Inland golf is Ireland's best"], minus:["Not the coast","Dublin-adjacent"], len:"7 nights" },

{ id:"midsummer", t:"Midsummer (Sweden and Finland)", loc:"Stockholm archipelago / Helsinki", country:"Sweden", region:"EU", cat:"drink", start:"2027-06-25", end:"2027-06-26", status:"annual",
  desc:"Midsummer Eve (Friday Jun 25) is the biggest drinking day of the Scandinavian year: schnapps, herring, maypole dancing, 20 hours of daylight, and a lake or island. You need to get out of the city to do it right.",
  golf:"Bro Hof Slott (Nordic's best, 45 min from Stockholm), Ullna, Kungsängen. Finland: Linna Golf, Kytäjä.",
  plus:["Light until 11 p.m.","Archipelago"], minus:["Cities empty out; you want a cabin invite","Expensive"], len:"7 nights" },

{ id:"donauinselfest", t:"Donauinselfest", loc:"Vienna", country:"Austria", region:"EU", cat:"music", start:"2027-06-25", end:"2027-06-27", status:"tbc",
  desc:"Europe's biggest free open-air festival: 2.5 million people over three days on an island in the Danube, a dozen stages, beer by the liter.",
  golf:"GC Fontana (Austria's best), Golfclub Schloss Schönborn, Colony Club Gutenhof.",
  plus:["Free","Vienna is beautiful and cheap-ish"], minus:["Mostly German-language pop and rock","Crowds"], len:"7 nights (Vienna + Alps)" },

{ id:"sea-sessions", t:"Sea Sessions", loc:"Bundoran, Donegal", country:"Ireland", region:"EU", cat:"music", start:"2027-06-25", end:"2027-06-27", status:"tbc",
  desc:"Surf-and-music festival on the beach in Donegal's surf town, 10,000 people, Irish and UK headliners, then Bundoran's pubs. Exactly the small-coastal-town Ireland you want.",
  golf:"Donegal GC (Murvagh, 15 min), Rosses Point, Enniscrone, Strandhill, Ballyliffin, Narin & Portnoo. Northwest links are underrated and empty.",
  plus:["Fits the pub road trip premise perfectly","Northwest links are cheaper and quieter than Kerry"], minus:["Weather","Small festival, lineup announced spring"], len:"7 nights" },

{ id:"roskilde", t:"Roskilde Festival", loc:"Roskilde", country:"Denmark", region:"EU", cat:"music", start:"2027-06-26", end:"2027-07-03", status:"tbc",
  desc:"Eight days, 130,000 people, the Scandinavian Glastonbury. The first four days are just camping and drinking before the music starts; the naked run is a tradition.",
  golf:"Scandinavian Golf Club, Great Northern, Royal Copenhagen within an hour.",
  plus:["Danish crowd is the friendliest festival crowd anywhere","Copenhagen"], minus:["Eight days of camping","Tickets sell out"], len:"7 to 10 nights" },

{ id:"hideout", t:"Hideout Festival", loc:"Zrce Beach, Pag", country:"Croatia", region:"EU", cat:"music", start:"2027-06-27", end:"2027-07-01", status:"tbc",
  desc:"House and techno on a beach of open-air clubs, boat parties by day. The Croatian island party circuit (Hideout, then Ultra Split Jul 9 to 11, then Yacht Week) is a thing.",
  golf:"Almost none. Croatia has two real courses (Adriatic GC Cervar, Golf Jadran).",
  plus:["Cheap beer, warm sea, boat parties","Pairs with sailing"], minus:["Zero golf","Very young crowd"], len:"7 nights" },

{ id:"wimbledon", t:"Wimbledon", loc:"London", country:"England", region:"EU", cat:"sport", start:"2027-06-28", end:"2027-07-11", status:"tbc",
  desc:"Two weeks of grass-court tennis. The Queue (camp overnight, walk in for Centre Court on the day) is the move if you don't win the ballot. Pimm's, strawberries, Henman Hill.",
  golf:"Sunningdale, Wentworth, Royal St George's, Royal Cinque Ports, Walton Heath. Plus London.",
  plus:["London in July","Overlaps with the Ashes at Lord's (Jun 30 to Jul 4)"], minus:["Tickets are the hard part","London prices"], len:"7 nights" },

{ id:"henley", t:"Henley Royal Regatta", loc:"Henley-on-Thames", country:"England", region:"EU", cat:"drink", start:"2027-06-29", end:"2027-07-04", status:"tbc",
  desc:"Rowing on the Thames is the excuse; the event is a six-day garden party of blazers, boaters, and Pimm's by the pint in the Stewards' Enclosure and the riverbank bars.",
  golf:"Huntercombe, Harleyford, The Oxfordshire. Heathland belt 40 min.",
  plus:["Very English, very boozy","Easy from London"], minus:["Dress code in enclosures","Rowing"], len:"7 nights" },

{ id:"open-poland", t:"Open'er Festival", loc:"Gdynia", country:"Poland", region:"EU", cat:"music", start:"2027-06-30", end:"2027-07-03", status:"tbc",
  desc:"Poland's big one on the Baltic: four days, big international headliners, beer at $2, Gdańsk old town 20 minutes away.",
  golf:"Sierra Golf Club, Sand Valley (Nicklaus-designed, 90 min).",
  plus:["Cheapest major festival in Europe","Gdańsk"], minus:["Two flights","Not a golf trip"], len:"7 nights" },

{ id:"irish-open", t:"Amgen Irish Open", loc:"The K Club, Kildare", country:"Ireland", region:"EU", cat:"sport", start:"2027-07-01", end:"2027-07-04", status:"confirmed",
  desc:"Moved to July for 2027 because the Ryder Cup is in Ireland in September. First leg of a three-week run: Irish Open, Scottish Open (Jul 8 to 11), The Open at St Andrews (Jul 15 to 18).",
  golf:"The K Club, Carton House, Portmarnock, The Island, The European Club. Rent a car and the west coast is 3 hours.",
  plus:["Start of the best three weeks on the golf calendar","Rory at home"], minus:["Kildare, not the coast","Hotels near the course gone"], len:"7 to 21 nights (do all three events: Ireland, East Lothian, Fife)" },

{ id:"tour-de-france", t:"Tour de France Grand Départ", loc:"Edinburgh, Lake District, Liverpool, Cardiff", country:"Scotland / England / Wales", region:"EU", cat:"sport", start:"2027-07-02", end:"2027-07-04", status:"confirmed",
  desc:"Stage 1 Fri Jul 2 Edinburgh to Carlisle, Stage 2 Sat Jul 3 Keswick to Liverpool, Stage 3 Sun Jul 4 Welshpool to Cardiff. Free to watch, a million people on the roadside, pubs open all day.",
  golf:"Edinburgh: Muirfield, North Berwick, Gullane, Archerfield. Liverpool: Royal Birkdale, Hoylake, Hillside. Pick a stage and the golf picks itself.",
  plus:["Free, massive, once-in-a-generation UK start","Same weekend as British GP and Lord's Ashes Test"], minus:["Edinburgh hotels will be gone","A stage passes you in 30 seconds"], len:"7 nights" },

{ id:"british-gp", t:"British Grand Prix", loc:"Silverstone", country:"England", region:"EU", cat:"sport", start:"2027-07-02", end:"2027-07-04", status:"confirmed",
  desc:"F1 sprint weekend at Silverstone, 480,000 people over three days, the biggest campsite party in motorsport. Lewis Hamilton's home race.",
  golf:"Woburn (three courses, 30 min), The Belfry (60 min), Whittlebury Park next to the track.",
  plus:["Best atmosphere on the F1 calendar","Woburn"], minus:["Expensive and sold out early","Pick: this or the Tour de France stage, same weekend"], len:"7 nights" },

{ id:"rock-werchter", t:"Rock Werchter", loc:"Werchter", country:"Belgium", region:"EU", cat:"music", start:"2027-07-01", end:"2027-07-04", status:"tbc",
  desc:"Belgium's big rock festival, four days, 88,000 a day, huge headliners, Belgian beer tents. Leuven (student beer town) is 15 minutes.",
  golf:"Royal Golf Club de Belgique, Royal Waterloo, Royal Antwerp (top 100).",
  plus:["Belgian beer","Easy from Brussels or Amsterdam"], minus:["Camping or commuting","Belgium is not a golf destination"], len:"7 nights" },

{ id:"palio", t:"Palio di Siena", loc:"Siena", country:"Italy", region:"EU", cat:"festival", start:"2027-07-02", end:"2027-07-02", status:"annual",
  desc:"Bareback horse race around the Piazza del Campo, 90 seconds, 17 neighborhoods who hate each other, medieval pageantry, and the winning contrada drinks for a week. Jul 2 every year.",
  golf:"Royal Golf La Bagnaia (Siena), Castelfalfi, Argentario.",
  plus:["Tuscany","Peak spectacle"], minus:["Piazza standing room is free but you stand for 6 hours in July heat","Balcony seats $500+"], len:"7 nights" },

{ id:"montreux", t:"Montreux Jazz Festival", loc:"Montreux", country:"Switzerland", region:"EU", cat:"music", start:"2027-07-02", end:"2027-07-17", status:"tbc",
  desc:"Two weeks of concerts on Lake Geneva: half jazz, half huge pop and rock acts, free stages along the lakefront every night. Wine from the Lavaux terraces.",
  golf:"Golf Club de Lausanne, Golf de Montreux, Crans-sur-Sierre (hosts the European Masters, 7,000 feet in the Alps).",
  plus:["Alps plus lake plus music","Crans-Montana golf is spectacular"], minus:["Swiss prices","Jazz-adjacent"], len:"7 nights" },

{ id:"san-fermin", t:"San Fermín (Running of the Bulls)", loc:"Pamplona", country:"Spain", region:"EU", cat:"drink", start:"2027-07-06", end:"2027-07-14", status:"annual",
  desc:"Nine days that start with a champagne fight at noon on Jul 6 and never really stop. Bulls run at 8 a.m. daily (Jul 7 to 14), everyone in white and red, a city that doesn't sleep. San Sebastián and its pintxos bars are an hour away.",
  golf:"Golf Ulzama (Pamplona), Real Golf Club de San Sebastián, Basozabal, Real Club de Golf de Zarauz (oldest in Spain). Biarritz courses across the border.",
  plus:["The all-time drinking festival","San Sebastián is the best eating town in Europe"], minus:["Running is actually dangerous","Hotels 5x and sold out; the town is filthy by day 3"], len:"7 nights (2 nights Pamplona, rest San Sebastián/Biarritz)" },

{ id:"all-blacks-july", t:"All Blacks July Tests", loc:"Auckland / Wellington / Dunedin", country:"New Zealand", region:"OC", cat:"sport", start:"2027-07-03", end:"2027-07-17", status:"tbc",
  desc:"The All Blacks play their home Tests on consecutive July Saturdays (opponents and venues announced early 2027). Eden Park at night with 50,000 Kiwis, then the Viaduct bars.",
  golf:"Tara Iti and Te Arai (world top 50, north of Auckland), Kauri Cliffs, Cape Kidnappers, Jack's Point and The Hills (Queenstown).",
  plus:["Best rugby on earth","New Zealand golf is in the world top tier"], minus:["Mid-winter: cold and wet in Auckland","Long flight; needs 10+ nights"], len:"10 to 14 nights" },

{ id:"scottish-open", t:"Genesis Scottish Open", loc:"The Renaissance Club, East Lothian", country:"Scotland", region:"EU", cat:"sport", start:"2027-07-08", end:"2027-07-11", status:"tbc",
  desc:"The week before The Open, half the field warming up on a links 30 minutes from Edinburgh. East Lothian is Scotland's golf coast: a dozen courses in 20 miles.",
  golf:"Muirfield (visitor days Tue/Thu), North Berwick (West Links, world top 100), Gullane 1, 2, 3, Archerfield, Dunbar, Kilspindie. Then drive to Fife for The Open week.",
  plus:["Perfect lead-in to St Andrews","North Berwick pubs"], minus:["Everything in East Lothian booked a year ahead for this fortnight","Scottish July weather"], len:"7 to 14 nights (chain with The Open)" },

{ id:"goodwood-fos", t:"Goodwood Festival of Speed", loc:"Goodwood, West Sussex", country:"England", region:"EU", cat:"sport", start:"2027-07-08", end:"2027-07-11", status:"tbc",
  desc:"The world's biggest car garden party: F1 cars, hypercars, and vintage racers on a hill climb through a stately home's grounds, with Champagne bars.",
  golf:"Goodwood (Downs course), Royal St George's and Royal Cinque Ports 90 min east, Sunningdale 60 min north.",
  plus:["Supercars plus a country estate","Chichester and the Sussex coast"], minus:["Car-person event","Pricey"], len:"7 nights" },

{ id:"trnsmt", t:"TRNSMT Festival", loc:"Glasgow Green", country:"Scotland", region:"EU", cat:"music", start:"2027-07-09", end:"2027-07-11", status:"tbc",
  desc:"Scotland's big city festival, 50,000 a day, no camping, big headliners, and Glasgow's pubs after. Same weekend as the Scottish Open an hour east.",
  golf:"Western Gailes, Prestwick (first Open, 1860), Royal Troon, Turnberry, all 45 min down the Ayrshire coast.",
  plus:["Festival plus Ayrshire links plus East Lothian in one week","Glasgow is the best night out in Scotland"], minus:["Rain","Lineup announced in spring"], len:"7 nights" },

{ id:"nos-alive", t:"NOS Alive", loc:"Lisbon", country:"Portugal", region:"EU", cat:"music", start:"2027-07-08", end:"2027-07-10", status:"tbc",
  desc:"Lisbon's riverside festival, three nights, big headliners (Arctic Monkeys, Pearl Jam, Dua Lipa in recent years), shows until 4 a.m., beach by day.",
  golf:"Oitavos Dunes, Penha Longa, Troia, Praia d'El Rey. Algarve 2.5 hours.",
  plus:["Cheap, warm, great lineups","Oitavos Dunes"], minus:["Hot","Lineups announced early spring"], len:"7 nights" },

{ id:"mad-cool", t:"Mad Cool Festival", loc:"Madrid", country:"Spain", region:"EU", cat:"music", start:"2027-07-07", end:"2027-07-10", status:"tbc",
  desc:"Madrid's big summer festival, four nights, big US and UK headliners, shows until 3 a.m. and then Madrid's actual nightlife.",
  golf:"La Moraleja, Club de Campo, El Encín.",
  plus:["Madrid in July is a party","Lineups rival Primavera"], minus:["100F days","Golf is secondary"], len:"7 nights" },

{ id:"ultra-europe", t:"Ultra Europe", loc:"Split", country:"Croatia", region:"EU", cat:"music", start:"2027-07-09", end:"2027-07-11", status:"tbc",
  desc:"Three nights of the biggest EDM DJs in a stadium on the Adriatic, then island parties on Hvar and Brač all week (the Destination Ultra week). Boat parties, beach clubs.",
  golf:"None worth the name.",
  plus:["Croatia in July: warm sea, cheap wine, islands","Yacht Week overlaps"], minus:["No golf at all","EDM"], len:"7 nights" },

{ id:"umbria-jazz", t:"Umbria Jazz", loc:"Perugia", country:"Italy", region:"EU", cat:"music", start:"2027-07-09", end:"2027-07-18", status:"tbc",
  desc:"Ten days of jazz and big crossover acts in a hilltop town, free stages in the piazzas every night, Umbrian wine.",
  golf:"Golf Club Perugia, Antognolla (new, Robert Trent Jones Jr.), Tuscany courses 90 min.",
  plus:["Umbria is Tuscany without the tourists","Antognolla"], minus:["Jazz","Hot"], len:"7 nights" },

{ id:"the-open", t:"The 155th Open Championship", loc:"St Andrews (Old Course)", country:"Scotland", region:"EU", cat:"sport", start:"2027-07-11", end:"2027-07-18", status:"confirmed",
  desc:"The Open at the Home of Golf, practice rounds Jul 11 to 14, championship Jul 15 to 18. The town is a week-long party: the Dunvegan, the Jigger Inn, the Criterion, 300,000 people on the Old Course grounds. Tickets via The One Club ballot (opens autumn 2026).",
  golf:"The Old Course is closed for The Open, but New, Jubilee, Castle, Kingsbarns, Crail, Elie, Carnoustie, Dumbarnie, Panmure, Scotscraig, Lundin are all within 30 minutes. Play the Old Course the week before or after.",
  plus:["Golf-first premise, maximum version","Chain: Irish Open Jul 1 to 4, Scottish Open Jul 8 to 11, The Open Jul 15 to 18"], minus:["Fife accommodation during Open week is the hardest booking in golf; think Dundee, Perth or Edinburgh and drive","Tickets by ballot"], len:"7 nights minimum; 14 to 21 for the full three-event run" },

{ id:"bastille-day", t:"Bastille Day", loc:"Paris", country:"France", region:"EU", cat:"festival", start:"2027-07-13", end:"2027-07-14", status:"annual",
  desc:"Jul 13 night: the Firemen's Balls, where every fire station in Paris throws an open-door dance party until 4 a.m. Jul 14: military parade down the Champs-Élysées, then fireworks at the Eiffel Tower.",
  golf:"Le Golf National, Chantilly, Fontainebleau, Saint-Germain.",
  plus:["Firemen's Balls are the best party most tourists never find","Paris"], minus:["Wednesday","Paris in July is hot and packed"], len:"5 to 7 nights" },

{ id:"gentse-feesten", t:"Gentse Feesten", loc:"Ghent", country:"Belgium", region:"EU", cat:"drink", start:"2027-07-16", end:"2027-07-25", status:"tbc",
  desc:"Ten days where a medieval city of 250,000 hosts 1.5 million people, free concerts on a dozen squares, bars open 24 hours by city decree. One of the largest cultural festivals in Europe and almost unknown to Americans.",
  golf:"Royal Latem, Royal Antwerp (top 100), Royal Zoute (links-style, on the coast at Knokke).",
  plus:["Belgian beer, free, 24-hour bars","Ghent is prettier than Bruges and less touristy"], minus:["Ten days of this would kill you","Golf is a day trip"], len:"7 nights" },

{ id:"tomorrowland", t:"Tomorrowland", loc:"Boom", country:"Belgium", region:"EU", cat:"music", start:"2027-07-16", end:"2027-07-25", status:"tbc",
  desc:"The biggest EDM festival on earth, two weekends (usually Jul 16 to 18 and Jul 23 to 25), 400,000 people, stages that look like theme-park sets. Tickets sell out in minutes at the January sale; Global Journey packages (flight plus ticket) are the realistic route.",
  golf:"Royal Antwerp, Rinkven, Royal Zoute.",
  plus:["Spectacle","Antwerp and Brussels"], minus:["Tickets","EDM for three days"], len:"7 nights" },

{ id:"redentore", t:"Festa del Redentore", loc:"Venice", country:"Italy", region:"EU", cat:"festival", start:"2027-07-17", end:"2027-07-18", status:"annual",
  desc:"Third Saturday of July: thousands of boats pack the Giudecca Canal for a picnic-and-prosecco party, then a 40-minute fireworks show over the lagoon at midnight. Best seen from a rented boat.",
  golf:"Circolo Golf Venezia on the Lido (1930, in the dunes), Golf Club Asolo.",
  plus:["One of the best fireworks nights anywhere","Venice"], minus:["Venice in July: 95F and tourist season","Rent a boat early"], len:"7 nights (Venice + Dolomites)" },

{ id:"zwarte-cross", t:"Zwarte Cross", loc:"Lichtenvoorde", country:"Netherlands", region:"EU", cat:"festival", start:"2027-07-15", end:"2027-07-18", status:"tbc",
  desc:"The Netherlands' weirdest festival: motocross, stunt shows, 30 music stages, a 'full-contact' beer culture, 220,000 people in a farm field. Big Dutch and international acts.",
  golf:"Golfbaan Het Rijk van Nunspeet, De Lochemse. Not the draw.",
  plus:["Nothing like it","Cheap"], minus:["Rural Dutch; everything in Dutch","Golf is weak"], len:"7 nights" },

{ id:"killarney-races", t:"Killarney July Races", loc:"Killarney, Kerry", country:"Ireland", region:"EU", cat:"sport", start:"2027-07-12", end:"2027-07-15", status:"tbc",
  desc:"Four evenings of racing at the prettiest track in Ireland (mountains behind the back straight), then Killarney's pubs: Jimmy Brien's for the Guinness, Courtney's, O'Connor's.",
  golf:"Killarney (Killeen), Dooks, Waterville, Ballybunion, Tralee, Dingle. The Kerry links loop from the earlier research.",
  plus:["Exactly the Itinerary 1 from the pub research, with a racing festival dropped in","Overlaps The Open week if you want to fly Kerry to Edinburgh"], minus:["Evening meetings, so long days","Kerry in July is peak tourist"], len:"7 nights" },

{ id:"galway-arts", t:"Galway International Arts Festival", loc:"Galway", country:"Ireland", region:"EU", cat:"festival", start:"2027-07-12", end:"2027-07-25", status:"tbc",
  desc:"Two weeks of concerts (the Big Top gets major acts), street theater, and the best pub town in Ireland running at full tilt. Leads straight into the Galway Races.",
  golf:"Lahinch (world top 100), Doonbeg, Connemara, Galway Bay, Ballybunion 2 hours.",
  plus:["Galway pubs are the Guinness ranking sheet's natural home","Lahinch"], minus:["Galway is touristy in July","Weather"], len:"7 nights" },

{ id:"belgian-gp", t:"Belgian Grand Prix", loc:"Spa-Francorchamps", country:"Belgium", region:"EU", cat:"sport", start:"2027-07-23", end:"2027-07-25", status:"confirmed",
  desc:"F1 at the greatest circuit in the world, Eau Rouge, in the Ardennes. Same weekend as Tomorrowland's second weekend 90 minutes away.",
  golf:"Royal Golf Club des Fagnes (Spa, 1930, a gem), Royal Golf Club de Belgique.",
  plus:["Best track","Ardennes beer and frites"], minus:["It rains at Spa","Campsites"], len:"7 nights" },

{ id:"galway-races", t:"Galway Races Summer Festival", loc:"Ballybrit, Galway", country:"Ireland", region:"EU", cat:"drink", start:"2027-07-26", end:"2027-08-01", status:"tbc",
  desc:"Seven days, 150,000 people, Ireland's biggest party week disguised as a race meeting. Ladies' Day Thursday, then every pub in Galway until 3 a.m. Last week of July.",
  golf:"Lahinch, Doonbeg, Connemara, Galway Bay.",
  plus:["The Irish drinking-event answer, full stop","Lahinch and the Clare coast 45 min away"], minus:["Starts Monday Jul 26, so a Sun Jul 25 arrival catches the whole thing","Accommodation gone a year out"], len:"7 nights" },

{ id:"glorious-goodwood", t:"Glorious Goodwood", loc:"Goodwood, West Sussex", country:"England", region:"EU", cat:"drink", start:"2027-07-27", end:"2027-07-31", status:"tbc",
  desc:"Five days of flat racing on the prettiest racecourse in England, on the South Downs, linen suits and panama hats, Champagne lawns.",
  golf:"Goodwood Downs, Royal St George's, Royal Cinque Ports, Rye (private, best in England), Littlestone.",
  plus:["Less formal than Ascot, better views","Kent links an hour away"], minus:["Late July, hot in a suit","Weekday-heavy"], len:"7 nights" },

{ id:"hungarian-gp", t:"Hungarian Grand Prix", loc:"Budapest", country:"Hungary", region:"EU", cat:"sport", start:"2027-07-30", end:"2027-08-01", status:"confirmed",
  desc:"F1 in Budapest, one of the best party cities in Europe: ruin bars, thermal baths, Danube boat parties. Sziget Festival follows two weeks later.",
  golf:"Pannonia Golf, Old Lake Golf, Zala Springs (2 hours, resort).",
  plus:["Budapest is cheap and wild","Baths for the hangover"], minus:["Hot","Golf is thin"], len:"7 nights" },

// ===================== ASIA =====================
{ id:"sakura", t:"Cherry Blossom (Hanami) Season", loc:"Tokyo and Kyoto", country:"Japan", region:"AS", cat:"festival", start:"2027-03-25", end:"2027-04-10", status:"tbc",
  desc:"Peak bloom is usually the first week of April. Hanami is a nationwide excuse to drink in parks under the trees from noon until the last train: Ueno and Yoyogi in Tokyo, the Philosopher's Path and Maruyama Park in Kyoto.",
  golf:"Japan has 2,000+ courses. Kawana (Fuji Course, the 'Pebble Beach of Japan'), Kasumigaseki, Taiheiyo Gotemba (under Fuji), Hirono (private, Japan's best). Resort courses are bookable; private ones need an intro.",
  plus:["Drinking in a park with a million locals","Japan food and nightlife"], minus:["Peak crowds and prices","Bloom timing is a gamble by a week either way"], len:"10 to 14 nights" },

{ id:"jinhae", t:"Jinhae Cherry Blossom Festival", loc:"Jinhae, near Busan", country:"South Korea", region:"AS", cat:"festival", start:"2027-03-26", end:"2027-04-04", status:"tbc",
  desc:"Korea's biggest blossom festival, 2 million people, then Busan's beaches, seafood market and soju bars 40 minutes away.",
  golf:"South Cape Owners Club (world top 100, cliffside, 90 min from Busan), Pine Beach, Nine Bridges (Jeju).",
  plus:["South Cape is a bucket-list course","Busan is underrated"], minus:["Korean golf is expensive and formal","Long flights"], len:"10 nights" },

{ id:"kanamara", t:"Kanamara Matsuri", loc:"Kawasaki, Tokyo", country:"Japan", region:"AS", cat:"festival", start:"2027-04-04", end:"2027-04-04", status:"annual",
  desc:"The 'festival of the steel phallus': a Shinto fertility festival on the first Sunday of April where a giant pink one is paraded through the streets. Sake, candy, a very good photo.",
  golf:"See cherry blossom entry.",
  plus:["Easy day trip during hanami week","Peak weird Japan"], minus:["One afternoon","Crowded"], len:"Add to a Japan trip" },

{ id:"hk-sevens", t:"Hong Kong Sevens", loc:"Kai Tak Stadium", country:"Hong Kong", region:"AS", cat:"drink", start:"2027-04-09", end:"2027-04-11", status:"confirmed",
  desc:"Three days of rugby sevens that are really a three-day costume-party drinking session in the South Stand, now in the new 50,000-seat Kai Tak Stadium. Then Lan Kwai Fong. The best sports-drinking weekend in Asia.",
  golf:"Hong Kong Golf Club at Fanling (three courses, hosts the HK Open), Clearwater Bay (cliffs), Kau Sai Chau (public, Nicklaus). Mission Hills in Shenzhen (12 courses) an hour over the border.",
  plus:["Same weekend as the Japanese GP; HK to Tokyo is 4 hours","Hong Kong dining and bars"], minus:["Tickets go in a ballot","Expensive city"], len:"10 nights (HK + Japan)" },

{ id:"japan-gp", t:"Japanese Grand Prix", loc:"Suzuka", country:"Japan", region:"AS", cat:"sport", start:"2027-04-09", end:"2027-04-11", status:"confirmed",
  desc:"F1 at Suzuka during late cherry blossom. The Japanese fans are the most dedicated on the calendar. Nagoya 45 minutes, Kyoto 90.",
  golf:"Nagoya Golf Club Wago (hosts the Chunichi Crowns), Mie courses around Suzuka.",
  plus:["Pairs with Hong Kong Sevens the same weekend if you split up, or do Japan start to finish","Kyoto"], minus:["Suzuka is remote-ish","Tickets sell fast"], len:"10 to 14 nights" },

{ id:"songkran", t:"Songkran (Thai New Year)", loc:"Chiang Mai / Bangkok", country:"Thailand", region:"AS", cat:"drink", start:"2027-04-13", end:"2027-04-15", status:"annual",
  desc:"Three-day nationwide water fight. Chiang Mai's old-city moat is the epicenter: pickup trucks with barrels, Super Soakers, buckets of ice water, beer at every stall, 95F. Bangkok's Khao San and Silom are the big-city version.",
  golf:"Chiang Mai: Alpine Golf Resort, Chiang Mai Highlands, Gassan. Hua Hin: Black Mountain (Asia's best public), Banyan. Thai golf is cheap and caddies are standard.",
  plus:["Cheapest great trip on this list","Thai golf is excellent value"], minus:["Hottest month of the year","Everything is wet, including your phone"], len:"10 to 14 nights" },

{ id:"takayama", t:"Takayama Spring Festival", loc:"Takayama, Gifu", country:"Japan", region:"AS", cat:"culture", start:"2027-04-14", end:"2027-04-15", status:"annual",
  desc:"One of Japan's three most beautiful festivals: 12 ornate 17th-century floats with marionettes paraded through a preserved old town in the Alps. Sake breweries line the main street.",
  golf:"Hida courses are modest; it's an add-on to a Japan golf trip.",
  plus:["Old-town sake breweries","Japanese Alps"], minus:["Hotels book out a year ahead","Small"], len:"Add to a Japan trip" },

{ id:"china-gp", t:"Chinese Grand Prix", loc:"Shanghai", country:"China", region:"AS", cat:"sport", start:"2027-04-16", end:"2027-04-18", status:"confirmed",
  desc:"F1 in Shanghai. The city is the draw: the Bund, Found 158 bar street, the best food in China.",
  golf:"Sheshan International (hosts the WGC-HSBC), Shanghai Links, Lanhai (Nicklaus).",
  plus:["Shanghai nightlife","Cheap once you're there"], minus:["Visa (10-day visa-free for US passports as of 2025, check)","Great Firewall"], len:"10 nights" },

{ id:"full-moon", t:"Full Moon Party", loc:"Haad Rin, Koh Phangan", country:"Thailand", region:"AS", cat:"drink", start:"2027-04-20", end:"2027-07-18", status:"tbc",
  desc:"Monthly beach rave of 20,000 people, buckets of Sangsom and Red Bull, fire jump ropes. 2027 full moons: Apr 20, May 20, Jun 18, Jul 18 (party dates sometimes shift a day for Buddhist holidays).",
  golf:"Santiburi Samui (hillside, excellent) on the next island.",
  plus:["Thai islands","Santiburi"], minus:["You're 33, not 22","Jun to Jul is monsoon on the west coast, but Phangan is east coast and dry"], len:"10 to 14 nights" },

{ id:"golden-week", t:"Golden Week (avoid)", loc:"Japan", country:"Japan", region:"AS", cat:"culture", start:"2027-04-29", end:"2027-05-05", status:"annual",
  desc:"Not an event, a warning: four national holidays in a row. All of Japan travels, trains and hotels sell out, prices double. Do not plan a Japan trip over these dates.",
  golf:"Courses packed.",
  plus:["Festive atmosphere everywhere"], minus:["Everything full","Prices"], len:"Skip" },

{ id:"kanda-sanja", t:"Kanda Matsuri and Sanja Matsuri", loc:"Tokyo", country:"Japan", region:"AS", cat:"festival", start:"2027-05-08", end:"2027-05-16", status:"tbc",
  desc:"Two of Tokyo's three great festivals in one week: Kanda Matsuri (odd years only, so 2027 is on, main parade Sat May 15) and Sanja Matsuri in Asakusa (third weekend, May 14 to 16), where 100 portable shrines and the yakuza's tattooed carriers take over the streets. Beer and yakitori stalls everywhere.",
  golf:"Tokyo-area: Kasumigaseki (2020 Olympics), Taiheiyo Gotemba, Kawana (2 hours).",
  plus:["Best festival week in Tokyo, once every two years","Summer sumo tournament runs the same two weeks"], minus:["Tokyo is expensive","Jet lag"], len:"10 nights" },

{ id:"natsu-basho", t:"Summer Grand Sumo Tournament", loc:"Ryogoku Kokugikan, Tokyo", country:"Japan", region:"AS", cat:"sport", start:"2027-05-09", end:"2027-05-23", status:"tbc",
  desc:"Fifteen days of sumo in the main arena. Buy a box seat (four cushions on the floor, beer and bento delivered), arrive at 3 p.m. for the top division, out by 6 for Roppongi.",
  golf:"See Kanda/Sanja entry.",
  plus:["Easiest great thing to do in Tokyo","Box seats with beer"], minus:["Tickets sell out, buy at the April release","Fifteen days so dates are flexible"], len:"10 nights" },

{ id:"cheung-chau", t:"Cheung Chau Bun Festival", loc:"Cheung Chau Island, Hong Kong", country:"Hong Kong", region:"AS", cat:"festival", start:"2027-05-13", end:"2027-05-14", status:"tbc",
  desc:"Climbing competition up 60-foot towers of buns at midnight, a parade of children floating on hidden poles, and an island of seafood restaurants and beer. Date follows the lunar calendar (around May 13 to 14, 2027).",
  golf:"See Hong Kong Sevens entry.",
  plus:["Very strange, very local","Hong Kong"], minus:["One day","Ferry crowds"], len:"Add to an HK trip" },

{ id:"ipl-final", t:"IPL Playoffs and Final", loc:"India (venue rotates)", country:"India", region:"AS", cat:"sport", start:"2027-05-25", end:"2027-05-30", status:"tbc",
  desc:"The Indian Premier League final draws 100,000+ in person and 500 million on TV; the most electric sporting atmosphere in Asia. Late May by the usual pattern. Venue announced in spring.",
  golf:"DLF Golf & Country Club (Gurgaon, Gary Player, hosts the Indian Open), Delhi GC, Royal Calcutta (oldest outside Britain).",
  plus:["Unmatched crowd energy","India"], minus:["110F in late May","Tickets via chaos; hospitality is the way"], len:"10 nights" },

{ id:"dragon-boat", t:"Dragon Boat Festival (Tuen Ng)", loc:"Stanley, Hong Kong", country:"Hong Kong", region:"AS", cat:"drink", start:"2027-06-09", end:"2027-06-09", status:"annual",
  desc:"Public holiday (Jun 9, 2027). The Stanley races are a beach party: expat teams, beer tents, bands, then Stanley's waterfront bars. Also races in Aberdeen and Sha Tin.",
  golf:"See Hong Kong Sevens entry.",
  plus:["Hong Kong on a party holiday","Wednesday, so a midweek anchor"], minus:["June in HK: 90F and 90% humidity","One day"], len:"7 to 10 nights" },

{ id:"danang-fireworks", t:"Da Nang International Fireworks Festival", loc:"Da Nang", country:"Vietnam", region:"AS", cat:"festival", start:"2027-06-01", end:"2027-07-10", status:"tbc",
  desc:"Six Saturday nights of competing national fireworks teams over the Han River (early June to mid-July by the usual pattern), with riverside beer gardens. Hoi An and My Khe beach next door.",
  golf:"Vietnam's best cluster: Ba Na Hills (Luke Donald), Hoiana Shores (RTJ II, links), Montgomerie Links, BRG Danang (Greg Norman, dunes). Cheap, caddies, great condition.",
  plus:["Best-value golf in Asia","Beach, Hoi An, $1 beer"], minus:["Hot and humid","Long trip"], len:"10 to 14 nights" },

{ id:"bali", t:"Bali Dry Season and Arts Festival", loc:"Bali", country:"Indonesia", region:"AS", cat:"festival", start:"2027-06-12", end:"2027-07-10", status:"tbc",
  desc:"Bali Arts Festival in Denpasar (mid-June to mid-July), kite-flying season, and the dry season peak: Uluwatu surf, Seminyak and Canggu beach clubs (Potato Head, Finns), Ubud.",
  golf:"Bali National (Nusa Dua), Bukit Pandawa (cliffs), Handara (volcano crater), New Kuta.",
  plus:["Cheap luxury","Beach clubs are a drinking event every day"], minus:["Canggu is full of Australians doing exactly this","Far: 24+ hours"], len:"10 to 14 nights" },

{ id:"fuji-climb", t:"Mt. Fuji Climbing Season Opens", loc:"Yamanashi / Shizuoka", country:"Japan", region:"AS", cat:"culture", start:"2027-07-01", end:"2027-07-31", status:"annual",
  desc:"Trails open Jul 1. The classic is a night climb from the 5th station to see sunrise from the summit, then down to a hot spring and a beer. Books up; mountain huts need reservations.",
  golf:"Taiheiyo Club Gotemba (hosts the Taiheiyo Masters, views of Fuji), Fuji Classic, Kawana.",
  plus:["Bucket list","Gotemba golf under the mountain"], minus:["Crowded trail","Rainy season until mid-July"], len:"10 nights" },

{ id:"naadam", t:"Naadam Festival", loc:"Ulaanbaatar", country:"Mongolia", region:"AS", cat:"sport", start:"2027-07-11", end:"2027-07-13", status:"annual",
  desc:"Mongolia's national games: wrestling, horse racing across the steppe by child jockeys, archery, and airag (fermented mare's milk) by the bowl. Opening ceremony Jul 11 in the national stadium. Then a ger camp in the countryside.",
  golf:"Mt. Bogd Golf Club outside Ulaanbaatar, the only real course in the country. A novelty round.",
  plus:["Most unusual event on this list","Steppe, horses, vodka"], minus:["Two flights via Seoul or Beijing","Basic comforts"], len:"10 nights" },

{ id:"nagoya-basho", t:"Nagoya Grand Sumo Tournament", loc:"IG Arena, Nagoya", country:"Japan", region:"AS", cat:"sport", start:"2027-07-11", end:"2027-07-25", status:"tbc",
  desc:"July's 15-day tournament, now in the new IG Arena. Box seats, beer, bento. Nagoya is an hour from Kyoto on the bullet train, so it slots into a Gion Matsuri trip.",
  golf:"Nagoya Golf Club Wago, Ryosen (Mie), Miyoshi.",
  plus:["Fits the Jul 11 to 18 week with Gion and Hakata","Easy ticket compared to Tokyo"], minus:["Nagoya itself is dull","Humid"], len:"10 nights" },

{ id:"mitama", t:"Mitama Matsuri", loc:"Yasukuni Shrine, Tokyo", country:"Japan", region:"AS", cat:"festival", start:"2027-07-13", end:"2027-07-16", status:"annual",
  desc:"30,000 paper lanterns lit along the shrine approach for four nights, bon dancing, food and beer stalls. Tokyo's best summer-festival atmosphere; July is also rooftop beer garden season across the city.",
  golf:"See Tokyo entries.",
  plus:["Easy evening add-on","Beer gardens"], minus:["Political shrine (war dead)","Hot"], len:"Add to a Japan trip" },

{ id:"gion-matsuri", t:"Gion Matsuri", loc:"Kyoto", country:"Japan", region:"AS", cat:"festival", start:"2027-07-14", end:"2027-07-17", status:"annual",
  desc:"Japan's most famous festival. Yoiyama nights (Jul 14, 15, 16): central Kyoto closed to traffic, lantern-lit 10-ton floats, beer and street food on every block, half a million people. Yamaboko Junko parade of the floats the morning of Jul 17. A second, smaller parade Jul 24.",
  golf:"Kyoto Golf Club (Kamigamo), Biwako CC, Nagoya courses an hour east, Kobe/Hirono (private) 90 min west.",
  plus:["Peak Japan","Pairs with Hakata Yamakasa (Jul 15, 2.5 hours by train) and Nagoya sumo"], minus:["Kyoto hotels for Gion week book a year out","95F and humid"], len:"10 to 14 nights" },

{ id:"hakata-yamakasa", t:"Hakata Gion Yamakasa", loc:"Fukuoka", country:"Japan", region:"AS", cat:"festival", start:"2027-07-01", end:"2027-07-15", status:"annual",
  desc:"Two weeks of float displays ending at 4:59 a.m. on Jul 15 with the Oiyama: seven teams of men in loincloths sprinting one-ton floats 5 km through the city while spectators throw water on them. Then breakfast beer. Fukuoka is Japan's best drinking city: yatai street stalls along the river, Hakata ramen at 3 a.m.",
  golf:"Fukuoka has dozens of courses (Fukuoka Country Club, Koga), plus Oita's resort courses.",
  plus:["Best food and bar city in Japan","Chain with Gion Matsuri the same week"], minus:["4:59 a.m.","Humid"], len:"10 to 14 nights" },

{ id:"boryeong-mud", t:"Boryeong Mud Festival", loc:"Daecheon Beach, Boryeong", country:"South Korea", region:"AS", cat:"drink", start:"2027-07-23", end:"2027-08-08", status:"tbc",
  desc:"Two weeks of mud wrestling, mud slides, K-pop concerts, drone shows and beach parties 2 hours south of Seoul, with shuttles from Seoul. Opening weekend (Jul 24 to 25 by the 2026 pattern) is the big one.",
  golf:"Korea has 500+ courses; near Seoul: Jack Nicklaus GC Korea (Incheon), Haesley Nine Bridges, Sky 72. Pricey.",
  plus:["Dumb fun","Seoul nightlife"], minus:["Korean golf is expensive and rigid","Monsoon season tail"], len:"10 nights" },

{ id:"fuji-rock", t:"Fuji Rock Festival", loc:"Naeba Ski Resort, Niigata", country:"Japan", region:"AS", cat:"music", start:"2027-07-23", end:"2027-07-25", status:"tbc",
  desc:"Japan's Glastonbury: three days at a ski resort in the mountains, huge international headliners, the cleanest festival on earth (they recycle everything), onsens for the hangover. Last weekend of July by pattern.",
  golf:"Naeba and Yuzawa resort courses, Karuizawa (90 min) has a dozen.",
  plus:["Beautiful setting","Japanese festival culture is polite and fun"], minus:["Rain is traditional","Two hours from Tokyo"], len:"10 nights" },

{ id:"tenjin", t:"Tenjin Matsuri", loc:"Osaka", country:"Japan", region:"AS", cat:"festival", start:"2027-07-24", end:"2027-07-25", status:"annual",
  desc:"Osaka's biggest festival: a procession of 100 boats on the river on the night of Jul 25 with 5,000 fireworks, and Osaka (Japan's eating-and-drinking capital, Dotonbori) in full party mode.",
  golf:"Osaka Golf Club, Hirono and Naruo (private, Kobe, among Japan's best), Rokko.",
  plus:["Osaka food","Tenjin fireworks from a boat"], minus:["Hot","Crowded"], len:"10 nights" },

{ id:"sumida-fireworks", t:"Sumida River Fireworks", loc:"Tokyo", country:"Japan", region:"AS", cat:"festival", start:"2027-07-31", end:"2027-07-31", status:"tbc",
  desc:"Tokyo's biggest fireworks night (last Saturday of July), 20,000 shells, a million people in yukata drinking on the riverbanks and rooftops.",
  golf:"See Tokyo entries.",
  plus:["Iconic","Beer gardens"], minus:["Crowds","One night"], len:"Add to a Japan trip" },

// ===================== OCEANIA =====================
{ id:"bluesfest", t:"Bluesfest Byron Bay", loc:"Byron Bay, NSW", country:"Australia", region:"OC", cat:"music", start:"2027-03-25", end:"2027-03-29", status:"tbc",
  desc:"Five days over Easter (Mar 25 to 29, 2027 by pattern) of blues, roots and big crossover acts in Byron, Australia's surf-hippie town. Ends the Monday after the first Sunday-to-Sunday window starts.",
  golf:"Byron Bay GC, Coolangatta & Tweed Heads, Gold Coast courses 60 min.",
  plus:["Byron","Warm late-summer weather"], minus:["Only overlaps the first two days of our range","Far"], len:"10 to 14 nights" },

{ id:"melb-comedy", t:"Melbourne International Comedy Festival", loc:"Melbourne", country:"Australia", region:"OC", cat:"festival", start:"2027-03-24", end:"2027-04-18", status:"tbc",
  desc:"Third-biggest comedy festival in the world, 700 shows over four weeks in Melbourne's laneways and theaters. Melbourne is Australia's bar and restaurant capital.",
  golf:"The Melbourne Sandbelt: Royal Melbourne (world top 10), Kingston Heath, Victoria, Metropolitan, Yarra Yarra, Peninsula Kingswood. Several accept visitors through golf travel operators.",
  plus:["Sandbelt is the best golf cluster in the Southern Hemisphere","Autumn is Melbourne's best season"], minus:["Far","Comedy is the excuse, not the reason"], len:"10 to 14 nights" },

{ id:"aus-gp", t:"Australian Grand Prix", loc:"Albert Park, Melbourne", country:"Australia", region:"OC", cat:"sport", start:"2027-04-02", end:"2027-04-04", status:"confirmed",
  desc:"F1 around a lake in the middle of Melbourne, 450,000 people over four days, the city's bars rammed all weekend. Comedy Festival on at the same time.",
  golf:"The Sandbelt (see Comedy Festival entry).",
  plus:["F1 plus Sandbelt golf plus Melbourne nightlife in one week","Early autumn weather"], minus:["Long flight","Easter weekend, so hotels tight"], len:"10 to 14 nights" },

{ id:"anzac-afl", t:"Anzac Day AFL at the MCG", loc:"Melbourne", country:"Australia", region:"OC", cat:"sport", start:"2027-04-25", end:"2027-04-25", status:"annual",
  desc:"Collingwood v Essendon, 95,000 at the MCG, the biggest regular-season game in Australian sport, after a dawn service and a day of two-up (a legal-once-a-year coin gambling game) in every pub. Falls on a Sunday in 2027.",
  golf:"The Sandbelt.",
  plus:["Pub culture at its peak","Sandbelt in autumn"], minus:["Tickets via AFL members first","Far"], len:"10 to 14 nights" },

{ id:"vivid", t:"Vivid Sydney", loc:"Sydney", country:"Australia", region:"OC", cat:"festival", start:"2027-05-21", end:"2027-06-12", status:"tbc",
  desc:"Three weeks of light installations on the Opera House and harbour, plus a music program of big international acts at the Opera House and Carriageworks, and Vivid Food. Late May to mid-June by pattern.",
  golf:"New South Wales Golf Club (La Perouse, world top 50, ocean cliffs), The Australian, Royal Sydney, The Lakes, Bonnie Doon. Barnbougle is a 90-minute flight to Tasmania.",
  plus:["NSW Golf Club is a bucket-list course","Sydney in winter is 65F and sunny"], minus:["Far","Vivid is more of a backdrop than an event"], len:"10 to 14 nights" },

{ id:"origin-1", t:"State of Origin Game 1", loc:"Australia (venue TBC)", country:"Australia", region:"OC", cat:"sport", start:"2027-05-26", end:"2027-05-26", status:"tbc",
  desc:"NSW v Queensland rugby league, the most intense rivalry in Australian sport, three Wednesday nights a year. 2027 dates not out; 2026 pattern says late May.",
  golf:"Sydney or Brisbane courses depending on venue.",
  plus:["Pub night of the year","Mid-week anchor"], minus:["Wednesday","Date and venue TBC"], len:"10 to 14 nights" },

{ id:"dark-mofo", t:"Dark Mofo", loc:"Hobart, Tasmania", country:"Australia", region:"OC", cat:"festival", start:"2027-06-10", end:"2027-06-21", status:"tbc",
  desc:"Twelve days of dark art, fire, electronic and experimental music, the Winter Feast (a giant candlelit food-and-booze hall), Night Mass (a late-night takeover of the CBD), and the Nude Solstice Swim at dawn on Jun 21. Ran Jun 11 to 22 in 2026.",
  golf:"Barnbougle Dunes and Lost Farm (both world top 100, 2.5 hours north), Cape Wickham and Ocean Dunes on King Island (short flight), Tasmania Golf Club. Tasmania is a serious golf destination.",
  plus:["Best winter festival in the hemisphere","Barnbougle is a pilgrimage"], minus:["Winter: 45F","Hobart hotels sell out early"], len:"10 to 14 nights" },

{ id:"origin-2", t:"State of Origin Game 2", loc:"Eden Park, Auckland", country:"New Zealand", region:"OC", cat:"sport", start:"2027-06-16", end:"2027-06-16", status:"tbc",
  desc:"First Origin game ever played in New Zealand, confirmed for Eden Park; date TBC (mid-June Wednesday by pattern). Then Auckland's Viaduct bars.",
  golf:"Tara Iti / Te Arai (world top 50, 90 min north), Kauri Cliffs (3 hours), Titirangi (Alister MacKenzie, in the city).",
  plus:["Historic one-off","Te Arai"], minus:["Wednesday","Winter"], len:"10 to 14 nights" },

{ id:"matariki", t:"Matariki Weekend and Queenstown Ski Season", loc:"Queenstown and Auckland", country:"New Zealand", region:"OC", cat:"festival", start:"2027-06-25", end:"2027-06-27", status:"confirmed",
  desc:"Matariki (Maori New Year) is a public holiday on Friday Jun 25, 2027, so the whole country has a long weekend: drone and fireworks shows in Auckland and Wellington, festivals everywhere. Queenstown's ski fields (Coronet Peak, Remarkables) are open and the après scene is on.",
  golf:"Jack's Point (lake and mountain views), The Hills (private, ask), Millbrook, Arrowtown. Winter golf but they stay open. Up north: Tara Iti, Te Arai, Kauri Cliffs, Cape Kidnappers.",
  plus:["Queenstown is the best adventure-and-bars town in the hemisphere","Long weekend energy"], minus:["Winter","Long flight; needs 10+ nights"], len:"10 to 14 nights" },

{ id:"beer-can-regatta", t:"Darwin Lions Beer Can Regatta", loc:"Mindil Beach, Darwin", country:"Australia", region:"OC", cat:"drink", start:"2027-06-27", end:"2027-06-27", status:"tbc",
  desc:"Boats built entirely out of beer cans raced in the sea, plus thong (flip-flop) throwing, a tug of war, and the Mindil Beach sunset market after. Was Sunday Jun 28 in 2026; the 2027 date isn't posted and it has been mid-July in some past years.",
  golf:"Darwin Golf Club, Palmerston. Not the draw.",
  plus:["Dry season in the Top End is perfect","Kakadu and Litchfield day trips"], minus:["Darwin is 4 hours from any other Australian city","Date could move"], len:"10 to 14 nights" },

{ id:"origin-3", t:"State of Origin Game 3", loc:"Australia (venue TBC)", country:"Australia", region:"OC", cat:"sport", start:"2027-07-07", end:"2027-07-07", status:"tbc",
  desc:"The decider, usually the first or second Wednesday of July. 2027 date TBC.",
  golf:"Depends on venue (Brisbane: Brookwater; Sydney: NSW GC).",
  plus:["If the series is 1-1, the whole country stops"], minus:["Wednesday","TBC"], len:"10 to 14 nights" },

{ id:"big-red-bash", t:"Big Red Bash", loc:"Birdsville, Queensland", country:"Australia", region:"OC", cat:"music", start:"2027-07-06", end:"2027-07-08", status:"tbc",
  desc:"The most remote music festival in the world: 10,000 people camping at the foot of a 40-meter red sand dune in the Simpson Desert, Australian rock headliners, a drag race (in dresses) for charity, the Birdsville pub.",
  golf:"Birdsville has a nine-hole dirt course with sand 'greens.' That's the whole joke.",
  plus:["Nothing else like it","Outback"], minus:["Drive 12 hours from Brisbane or charter a flight","Camping in the desert"], len:"14 nights" },

{ id:"bula", t:"Bula Festival", loc:"Nadi", country:"Fiji", region:"OC", cat:"festival", start:"2027-07-10", end:"2027-07-17", status:"tbc",
  desc:"Fiji's biggest festival week: parades, concerts, kava sessions and Fiji Bitter in Nadi, mid-July. Then the Mamanuca islands.",
  golf:"Natadola Bay (Vijay Singh, oceanfront, one of the best in the Pacific), Denarau. Both excellent.",
  plus:["Natadola Bay","Fijian hospitality"], minus:["Festival is small-town","Far"], len:"10 nights" },
];
