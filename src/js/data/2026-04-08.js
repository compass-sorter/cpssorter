// dataSetVersion = "datehere"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-04-08";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain hero roles.",
    checked: false,
    sub: [
      { name: "Attackers", key: "atk" }, { name: "Sprinters", key: "spr" }, { name: "Gunners", key: "gun" }, { name: "Tanks", key: "tank" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict certain genders.",
    checked: false,
    sub: [ { name: "Men", key: "men" }, { name: "Women", key: "fem" }, { name: "Nonbinary", tooltip: "How unwoke of you!", key: "nb" }
    ]
  },
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict if you want collab heroes or not.",
    checked: false,
    sub: [ { name: "Original Heroes", key: "og" }, { name: "Collab Heroes", key: "co" } ]
  },
  {
    name: "Allow Pairs?",
	key: "pair",
    tooltip: "Check this if you want heroes considered pairs to be restricted to one or to seperate them.",
	checked: false,
    sub: [
      { name: "Keep Pairs Together", key: "yes" },
      { name: "Seperate Pairs", key: "no" },
	 ]
  },
   {
    name: "Extra fun filters",
    key: "extra",
    tooltip: "It's a pepperoni surprise that will help you organize even worse!",
    checked: false,
    sub: [
	{ name: "Robots", tooltip: "anyone in this thread got a robot bias", key: "drd" }, { name: "Gamers", tooltip: "What's up gamers", key: "virgin" }, { name: "Pink", tooltip: "do you feel bonita?", key: "pink" }, { name: "Blondes", tooltip: "why are there so many...?", key: "blonde" }, { name: "Canonically dead. (Includes collab hero spoilers!)", tooltip: "REST IN PEACE MY GRANNY SHE GOT HIT BY A BAZOOKA", key: "rip" }, { name: "Widows (Includes collab hero spoilers!)", tooltip: "Those that have dead lovers", key: "widow" }, { name: "Twinks", tooltip: "i'm so tired of these ikemens in my game bro.", key: "twink" }
    ]
  },
];

dataSet[dataSetVersion].characterData = [
 //Og Heroes
        {
  name: "Atari Jumonji",
  img: "https://64.media.tumblr.com/6f4f570d0b243ac63488c7ee52a3e25b/09331b9ac1fa1f40-cd/s400x600/ff7d5c38b2b2889b4e6f0688a36b03ca477ae2a9.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["twink", "blonde", "virgin"],
   }
  },
        {
  name: "Justice Hancock",
  img: "https://64.media.tumblr.com/198b52ba2ab83f68158965da7ecf3698/3465321d8070e9ee-24/s400x600/36a296704cb5468422474a0ef21c5e34720af6d2.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },        {
  name: "Lyrica",
  img: "https://64.media.tumblr.com/13e87c11fa3ca8ceb57f73a2c6723b67/eb19f84d84606eed-3a/s400x600/fe45f8f006e98cf79167e643ac639c7dab7244a3.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["rip", "pink"],
   }
  },
        {
  name: "Noho Sobiki",
  img: "https://64.media.tumblr.com/50f2c486968b6a300c2d45a97695ed4c/20077b7569494904-75/s400x600/342d0241f54682457a704246eab89dbe39d49b7b.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
        {
  name: "Tadaomi Oka",
  img: "https://64.media.tumblr.com/4256d3f47c6198bd5c24d709ca43eadd/20077b7569494904-f8/s400x600/dbb610ab82e9b773b6efff47259c322bc4a0d1d3.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Jeanne d'Arc",
  img: "https://64.media.tumblr.com/b8730e74ced09dfda6d3063ae7f389c0/3465321d8070e9ee-d2/s400x600/daadd228f09dea199fd0ffaec69fe342cf255d5f.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
        {
  name: "Marcos'55",
  img: "https://64.media.tumblr.com/41062475bb672fd23b8081d95eccdcbe/20077b7569494904-bb/s400x600/f4bd69c51b129c3960902362cc33265d36ddeeea.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["twink", "blonde", "virgin"],
   }
  },
        {
  name: "Luciano",
  img: "https://64.media.tumblr.com/71359af14546c7a5cf3e046ced1f8a76/eb19f84d84606eed-df/s400x600/d0df14c60ef3c6eb47f807ff8bc90894c563a5e7.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["pink", "widow"],
   }
  },
          {
  name: "Voidoll",
  img: "https://64.media.tumblr.com/ec21972a962de696d2d7e67d731a5dfc/09331b9ac1fa1f40-5c/s400x600/ef9cfb0a8ca94682878d292b8209c49224518633.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
  },
          {
  name: "Matoi Fukagawa",
  img: "https://64.media.tumblr.com/3a0013189314844c9c419a4908d7f49e/eb19f84d84606eed-ad/s400x600/af2339cb1f1492604fcc225c58e2075629d8f41a.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Gustav Heydrich",
  img: "https://64.media.tumblr.com/ad9c3ce574f4238cbc334c5c9b7e7228/3465321d8070e9ee-30/s400x600/d63a5b8eb9c81dfb2f6359fda37d641e30c6bc30.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Nikola Tesla",
  img: "https://64.media.tumblr.com/3db55665a5e052c9b40f6e40924ae65d/09331b9ac1fa1f40-18/s400x600/2fb8e93ac85196b147d9c1a61abe84866dd796c5.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
          {
  name: "Violetta Noire",
  img: "https://64.media.tumblr.com/fae7137e628cdaf428cfdf5006a56968/3465321d8070e9ee-7b/s400x600/0264549d3928fe8378900b229d43ea849f2e4a29.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Coquelicot Blanche",
  img: "https://64.media.tumblr.com/3f7f12abd12b5213a7af62e7c803b8c7/09331b9ac1fa1f40-44/s400x600/4a0f8c5e11d978f3fc028460eebc41039e5263f0.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Maria S. Leonburg",
  img: "https://64.media.tumblr.com/7df1a7693ad4c71b67859e8845749e99/20077b7569494904-a6/s400x600/02c40ca31cf5d7d3cf8a5fba894fdd86bf62d0a6.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Adam Yuriev",
  img: "https://64.media.tumblr.com/208729d3d1a3bd95b0ee6c9818641a4f/20077b7569494904-30/s400x600/2b70ddd8546372b8f007626df8720ba2d703a681.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["what"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
          {
  name: "13 †Thirteen†",
  img: "https://64.media.tumblr.com/77a73063cf14876985bd9ec6d76920b1/eb19f84d84606eed-a3/s400x600/f8d491708cc04bcbc64038ea1e4cd074d8143042.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Heroic Dasher",
  img: "https://64.media.tumblr.com/0f17ca3ea4ed3a68ddf1688d7cd1aed7/09331b9ac1fa1f40-56/s400x600/75bbab72ba234dba65b16bdf74ea2f8ab3c72a46.png",
  opts: {
    type: ["og"],
	gender: ["men", "nb", "fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Meg Meg",
  img: "https://64.media.tumblr.com/d5a22194388c6eb9fcb2e038c9617556/eb19f84d84606eed-a6/s400x600/d6778f08247ae863ecfeb71617af179e3e5c75ce.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["pink"],
   }
  },
          {
  name: "Istaqa",
  img: "https://64.media.tumblr.com/b6ce349728a1784ba151e909e119015b/eb19f84d84606eed-c2/s400x600/83c60fc8df70320740143877143055bf8d7bc4d8.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Kirara Kiryuin",
  img: "https://64.media.tumblr.com/199d4797f412d6a0adf9dd1d7547ca1f/09331b9ac1fa1f40-9f/s400x600/b79508cb9b87a1b8ae5916d0a77a46250f3e9d97.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin"],
   }
  },
        {
  name: "Venus Pororotcho",
  img: "https://64.media.tumblr.com/84b8b86f6f1b7ae72046f862c604ca78/20077b7569494904-8a/s400x600/d08702c6ce579cc114ad3782206afc2c19087774.png",
  opts: {
    type: ["og"],
	gender: ["nb", "fem", "men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
	
          {
  name: "Thorne Yuriev",
  img: "https://64.media.tumblr.com/7a952cf621a597b6dee79b49850919a4/eb19f84d84606eed-df/s400x600/5e79f456e33204ad6e90acce1d137811d0fafad6.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
        {
  name: "Delmin Devilmintkiryu",
  img: "https://64.media.tumblr.com/564f16fe414d3147ccf92eb68297d0ab/20077b7569494904-1a/s400x600/43dd70e0af21ee6ba15761faa3916904f5cf775e.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
        {
  name: "Thomas",
  img: "https://64.media.tumblr.com/e668cd5bcaf69f59333634d897608996/3465321d8070e9ee-35/s400x600/5a939dbe4095b62b045e82cc6ca5ed48cde89f57.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Layer",
  img: "https://64.media.tumblr.com/3c9cf928975a1a53fb5e8e2e34cd2676/09331b9ac1fa1f40-8d/s400x600/612ac17e0efa3d78c9e404d54b7f3697d884c368.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
          {
  name: "Luruca",
  img: "https://64.media.tumblr.com/33fb227f9ca88450d63c2ce6a86d65c0/20077b7569494904-50/s400x600/03cabe5c1d883224c7246ea5c92cc60761b5134d.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["widow", "blonde"],
   }
  },
          {
  name: "Pierre the 77th",
  img: "https://64.media.tumblr.com/4a7c5ea7a2ffedf2f2b317d09dc364fc/09331b9ac1fa1f40-84/s400x600/5af2c1786d6760ad8f524d9cd6ba647314f67866.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["pink"],
   }
  },
          {
  name: "Amairo Kitsunegasaki",
  img: "https://64.media.tumblr.com/4e2e91b6b69389e057e6bcb57b62565e/20077b7569494904-3a/s400x600/66372b986cebc88d482e3a0621e4cd304cdde62e.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "HM-WA100 Nidhogg",
  img: "https://64.media.tumblr.com/dbfcf78ce95fea7f65134d2237ef782e/eb19f84d84606eed-53/s400x600/d813e15f997c46893248a59bb4a658929ed751c6.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
  },
          {
  name: "Game Bazooka Girl",
  img: "https://64.media.tumblr.com/29a3a2f12b76161919a1e424490aa9af/eb19f84d84606eed-8b/s400x600/779fc705ee43ccabdc312072df59b3a30c6d3904.png",
  opts: {
    type: ["og"],
	gender: ["what"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Alice Aoharu",
  img: "https://64.media.tumblr.com/e6edd19c73c7024b3a9802a8ab4b189c/3465321d8070e9ee-5c/s400x600/83c7b8c39be5e49c715c2a51a691191d4561a14b.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Ignis Will Wisp",
  img: "https://64.media.tumblr.com/9d10b7393dd4d6621657cbf9b644c28a/20077b7569494904-69/s400x600/e453ea6dd0bd8c3abd8494fb45f30521be70b724.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Rinne Itomeguri",
  img: "https://64.media.tumblr.com/36a856580742917d62275c5dea2a2851/eb19f84d84606eed-c3/s400x600/5ea20627c003760331f4933b4fff4a257dd6b9c3.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
          {
  name: "Bugdoll",
  img: "https://64.media.tumblr.com/341f57894225bb08660fdacc403596e6/eb19f84d84606eed-f3/s400x600/0eb47afd30d756eae5cb6f3095015eac055ce6e7.png",
  opts: {
    type: ["og"],
	gender: ["nb"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
  },
          {
  name: "Stellea Lala Silva",
  img: "https://64.media.tumblr.com/c60ee060b6c8e7ec86c405e4c2342560/20077b7569494904-9e/s400x600/38d3622992762a532c9439ad48e6a9e173547f32.png",
  opts: {
    type: ["og"],
	gender: ["what"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Lovey Chouchoumarchou",
  img: "https://64.media.tumblr.com/9b7d2c9acbad3ec9e1295207e96cd82f/3465321d8070e9ee-00/s400x600/de3eec46f524382286852e49f86d8ab60545ad28.png",
  opts: {
    type: ["og"],
	gender: ["men", "nb", "fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde", "twink", "pink"],
   }
  },
          {
  name: "Al-Dahab Alqatia",
  img: "https://64.media.tumblr.com/0d3a67355ca9f9113bb2708fccfb8980/09331b9ac1fa1f40-26/s400x600/899333fee65236e9971728b5a53f2ab45c0472f3.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
          {
  name: "Blaze Dragon",
  img: "https://64.media.tumblr.com/84fb548fea054aad4d82cdb6462dfc95/eb19f84d84606eed-ad/s400x600/12ecb20d640041726a6adb8cea62cd8dce32ccdd.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Nanigashi",
  img: "https://64.media.tumblr.com/4cff591f162f479314b8330d7d33e9d8/09331b9ac1fa1f40-18/s400x600/c16754fb9432048b24f61a6d7d2cb335ed3bc901.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
    {
  name: "Cu Sith",
  img: "https://64.media.tumblr.com/92dfc5ede9e7de693ad9dd66aad522fe/20077b7569494904-e8/s400x600/3381d69a89adf8258180a711955a888d2d1de411.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["what"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
},
          {
  name: "Amistad Balandin",
  img: "https://64.media.tumblr.com/d1f1e06973955c3feec9371b3022aa84/3465321d8070e9ee-54/s400x600/535be354a3b69c2409309d8fed80d5e95226574e.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Ura Onigashiki",
  img: "https://64.media.tumblr.com/458010f3c5a6db8fb0828115776b41ca/3465321d8070e9ee-8d/s400x600/bb55ba3322f8352105f8430a9c5d825475fc34ed.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
          {
  name: "Collapse",
  img: "https://64.media.tumblr.com/06d22bb140f555942bd01d33fe4a0b4b/20077b7569494904-d2/s400x600/7a5326f22f027899f36563db6c1900f232fc9251.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
},
          {
  name: "Milipoyu",
  img: "https://64.media.tumblr.com/04555875cbe8c9fbbb93e54ca070fca6/eb19f84d84606eed-9e/s400x600/1c906d6ad42831ec76ba0365aa64a1f405a19bfe.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["pink", "blonde"],
   }
  },
          {
  name: "Ms. Chie",
  img: "https://64.media.tumblr.com/177799648023809b15cae62597ed7cdd/09331b9ac1fa1f40-04/s400x600/34c560124861e11e7a1afaf3203b8afd55e604e5.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "—Pellinie",
  img: "https://64.media.tumblr.com/26269a69b572bfa60d17f72cc50b5bba/09331b9ac1fa1f40-78/s400x600/0c33ceaf5ae5f7de68591ca6709b05c61ffeca06.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "Meloonya Lancerna",
  img: "https://64.media.tumblr.com/8362137985d9169ab00d2327ef29dcac/eb19f84d84606eed-46/s400x600/7684ec783943ce54c17b7cb727eb46202d58ce88.png",
  opts: {
    type: ["og"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
          {
  name: "†First†",
  img: "https://64.media.tumblr.com/bb749adb9d50b71c7445baa1a390de14/3465321d8070e9ee-e6/s400x600/caa979fe9795915e1a971e1d95ed2385cddc2168.png",
  opts: {
    type: ["og"],
	gender: ["men"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
//Collab Heroes 56
          {
  name: "Sol Badguy",
  img: "https://64.media.tumblr.com/c04dff1b82a56f37546e3a89f6c84746/20077b7569494904-8e/s400x600/632e1208136b8f655090de95a59ac7f22f474b24.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["widow"],
   }
  },
	          {
  name: "Dizzy",
  img: "https://64.media.tumblr.com/9a8ec9bee97f132349b0d84c3c6b8cb1/eb19f84d84606eed-0d/s400x600/0a8fd1b27d932b507109ac9b3df530b3cbeccc67.png",
  opts: {
    type: ["co"],
	gender: ["gun"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Hatsune Miku",
  img: "https://64.media.tumblr.com/143ed38c4e88815dc031bf6edd189a20/09331b9ac1fa1f40-89/s400x600/2c0eef1d6dc02652add6918780e59a98bf8ed623.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
  },
	          {
  name: "Ryu",
  img: "https://64.media.tumblr.com/53aae1bb0aeb8712ec9ee998962bedd7/20077b7569494904-77/s400x600/792088522dc2860db2cc4186feed7dcbad5992b3.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Chun-Li",
  img: "https://64.media.tumblr.com/74ad8977e7638512adb7c18b75bbc4ac/09331b9ac1fa1f40-9d/s400x600/b221df4c33d46440f63c1d5f0567e9dbfc072776.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Emilia",
  img: "https://64.media.tumblr.com/da4099838ac137e2fb3881fd6d1bbd79/eb19f84d84606eed-8a/s400x600/7b73fe638f932298565db60c84003a66fe9c52a4.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Rem",
  img: "https://64.media.tumblr.com/dc9b4809ed570263893d0bfe55075c88/20077b7569494904-76/s400x600/c13df6b5d64d78dc3a589befaeeb8c36b901a065.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Ky Kiske",
  img: "https://64.media.tumblr.com/b23fd30f75070a84bd56c513527a11c8/20077b7569494904-64/s400x600/b44bd3af2062d719a6a195075b9844a2d77b0c48.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde", "twink"],
   }
  },
	          {
  name: "Kagamine Rin",
  img: "https://64.media.tumblr.com/80f343772cfa72a507639a908126d6aa/eb19f84d84606eed-14/s400x600/904021462bdcda74335928f18aba231268801c68.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["blonde", "drd"],
   }
  },
	          {
  name: "Kagamine Len",
  img: "https://64.media.tumblr.com/9280179b1efb492917a6d9244ed9bcec/3465321d8070e9ee-54/s400x600/497139a0918a2879a18ca447d55c6cd36c8f332d.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
	extra: ["blonde", "twink", "rip", "drd"],
   }
  },
	          {
  name: "Zack & Ray",
  img: "https://64.media.tumblr.com/49b16e18629963ef79253e8c9c824365/09331b9ac1fa1f40-8c/s400x600/eb2e56d43b8d88c25ebae1c36f0b8c31a85e5ace.png",
  opts: {
    type: ["co"],
	gender: ["fem", "men"],
	role: ["spr"],
	pair: ["yes"],
	extra: ["rip"],
   }
  },
	          {
  name: "Zack",
  img: "https://64.media.tumblr.com/1deec6734d071d1aa3b031cd388d5bcb/09331b9ac1fa1f40-94/s400x600/9e83fff9789962a5f96448cab3fd9ec7681f6b17.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["no"],
	extra: ["rip"],
   }
  },
	          {
  name: "Rachel",
  img: "https://64.media.tumblr.com/94a7d57d1bf0f70d2ea9d9b7ce417f8f/09331b9ac1fa1f40-ac/s400x600/cdb082d6ef9c94be6d67266fc8ce82f4645f08ab.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["no"],
	extra: ["blonde", "rip"],
   }
  },
	          {
  name: "Monokuma",
  img: "https://64.media.tumblr.com/517c4a12b8b6cc7b17afec02a2d89e16/3465321d8070e9ee-e7/s400x600/50912307455f51ad36e6723140c5b82902daddf8.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["rip"],
   }
  },
	          {
  name: "Aqua",
  img: "https://64.media.tumblr.com/cf33f328117feb2d673f80c870bc96e0/09331b9ac1fa1f40-0d/s400x600/0b08efff15490c505c1b94371f69dd72015330b0.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Megumin",
  img: "https://64.media.tumblr.com/7c2a81b966a6a06408162a2399096f6a/3465321d8070e9ee-a9/s400x600/32495180f68fad32a941247c3f0d40e7bae238b5.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Levi",
  img: "https://64.media.tumblr.com/9ccd2a72846800597ebeaae6894e6518/20077b7569494904-9b/s400x600/2b0e22fe65338f10f3e4205a4ab2931040c2b010.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["widow"],
   }
  },
	          {
  name: "Nekomiya Hinata",
  img: "https://64.media.tumblr.com/ccdd5ee42052c7acf66f06cfe912e2c0/eb19f84d84606eed-ee/s400x600/6cf2e2e4c106a50515858d44fda345085719f09a.png",
  opts: {
    type: ["co"],
	gender: ["nb"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["virgin", "pink"],
   }
  },
	          {
  name: "Rintaro Okabe",
  img: "https://64.media.tumblr.com/056894452e8a36f781dfc71e557f6c9d/eb19f84d84606eed-f7/s400x600/85e4a4406c8a9c15c54a81be64f783e1f6a9b812.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["rip", "virgin", "twink"],
   }
  },
	          {
  name: "Saber Alter",
  img: "https://64.media.tumblr.com/597e839e2a8af0df93eac838ca95b4d3/20077b7569494904-d4/s400x600/12202729e8fc50091f9f6db488b04a0a325204f6.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde", "rip"],
   }
  },
	          {
  name: "Gilgamesh",
  img: "https://64.media.tumblr.com/d47d2f58ca73d9f15f22eb5ecee3d400/eb19f84d84606eed-95/s400x600/b736be7a5388f27ba4d78024aacc48b01c18c0fe.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["blonde", "widow", "rip", "twink"],
   }
  },
	          {
  name: "Satō Shirōbyōe Tadanobu",
  img: "https://64.media.tumblr.com/ad810036ee5eecd3aa438fb79e79aa62/3465321d8070e9ee-47/s400x600/a4c251d5ea99ce4de09015a489bec90c10e9eb86.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Ais Wallenstein",
  img: "https://64.media.tumblr.com/c3d8134a538cf47a7acbf0fae5a30972/20077b7569494904-b1/s400x600/3a91d98c3e9945dfae1655c093d5e19d2db43d03.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
	          {
  name: "Noctis",
  img: "https://64.media.tumblr.com/b89d21e14da499b5a3e2aa6ad26be1c8/20077b7569494904-68/s400x600/72c40bcf53a0947c8670d4d4611169f7ce8bce99.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Atsushi Nakajima",
  img: "https://64.media.tumblr.com/3b87d9e06d303a8913de020d379f3c1e/09331b9ac1fa1f40-2f/s400x600/9147faae25e4133f7e872af46c142a18b1c1f8d2.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Ryūnosuke Akutagawa",
  img: "https://64.media.tumblr.com/3809097874a9e651a51c581131accf7c/eb19f84d84606eed-72/s400x600/d0d5a7cf6712d48726fb1a0ee5fdd6a189a86b41.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
	          {
  name: "Reisalin Stout",
  img: "https://64.media.tumblr.com/c685d06ade109653eed4694d7e87463b/3465321d8070e9ee-20/s400x600/8b27db621986b01183d8fe8d4594927cf7a04a94.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Joker",
  img: "https://64.media.tumblr.com/2c9a6487c606802caccadd809f0f2b46/09331b9ac1fa1f40-b7/s400x600/b0b542b0c35e41d4297845278eeb239466746718.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink", "widow"],
   }
  },
	          {
  name: "Ainz Ooal Gown",
  img: "https://64.media.tumblr.com/0cfe3ff5dcce3de5e395f2a6dac32067/eb19f84d84606eed-57/s400x600/fc82932fa5d9601cbccb6d27ef7286b8be4079e0.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["virgin"],
   }
  },
	          {
  name: "Kirito",
  img: "https://64.media.tumblr.com/f8e777732a6ecf1ebf1ab575017e0030/20077b7569494904-ab/s400x600/29c188b0451f69940c2ed56c97fc614bc3fb9358.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink", "widow"],
   }
  },
	          {
  name: "Asuna",
  img: "https://64.media.tumblr.com/e16f5c89afdee50c62e91e6662c62956/09331b9ac1fa1f40-f2/s400x600/b28df74929bccbfcf9798c1fee3f9112ea719ab4.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin"],
   }
  },
	          {
  name: "Ram",
  img: "https://64.media.tumblr.com/7ca619bd66253a531008513da998e5ca/09331b9ac1fa1f40-c8/s400x600/f256518dd7d54b3f010a1d7ff5d9e14857c8c25c.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["pink"],
   }
  },
	          {
  name: "2B",
  img: "https://64.media.tumblr.com/8f723fdf55e1ca34efea0c8d532b46cb/20077b7569494904-a5/s400x600/be1ad7cad568197f9c2f54a2d50f82e0025c82db.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["drd"],
   }
  },
	          {
  name: "Rimuru Tempest",
  img: "https://64.media.tumblr.com/4172e9c4de6ccf9cc620958827a2bdd1/20077b7569494904-e3/s400x600/f82191a86498ed063c4bcef99d0b4f2d06271548.png",
  opts: {
    type: ["co"],
	gender: ["nb"],
	role: ["atk"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "Mikoto Misaka",
  img: "https://64.media.tumblr.com/e360e931f83435351157a6020d022c10/20077b7569494904-85/s400x600/60ef1678207d79d99a1299bf0ab94ac9671ce140.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin"],
   }
  },
	          {
  name: "Accelerator",
  img: "https://64.media.tumblr.com/55eb5fd3e792b8c63291d7ea7bda32dc/eb19f84d84606eed-3f/s400x600/e100373f0249686efec09fbaa2735e5bc3b38bae.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["twink"],
   }
  },
	          {
  name: "Bell Cranel",
  img: "https://64.media.tumblr.com/a82857e0f05a672a864d78109f7805a0/09331b9ac1fa1f40-66/s400x600/aee819c6576c96e1f623effd288c2081b4ded7bb.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Roxy Migurdia",
  img: "https://64.media.tumblr.com/395b193d65b4949cb652ced20ce7dc6b/eb19f84d84606eed-87/s400x600/708eac2edb72c99567e1c729da3be5154b379bce.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  },
	          {
  name: "MegaMan.EXE",
  img: "https://64.media.tumblr.com/674f8c3ea3fc6088fc98eb03abb11dcf/eb19f84d84606eed-98/s400x600/28360e4c83e169c7c85eb3be3e2cf284bad56ee2.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["rip", "twink", "virgin", "drd"],
   }
  },
	          {
  name: "Denji",
  img: "https://64.media.tumblr.com/69cb063152c93616f2efd58a3439745a/20077b7569494904-7e/s400x600/3766b923565b0440e8be86334ee9417a8393dbf6.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink", "blonde", "widow"],
   }
  },
	          {
  name: "Power",
  img: "https://64.media.tumblr.com/6abc611ed439bd02c5910702843d7378/09331b9ac1fa1f40-0f/s400x600/7c7f039ec9ad93211927dde426830b5e6e86016c.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "blonde", "rip"],
   }
  },
	          {
  name: "Sinon",
  img: "https://64.media.tumblr.com/caad0abc95e6a45dac1cb7b650b204c1/eb19f84d84606eed-87/s400x600/0c099d37ea95577860826859b58ba25468a085af.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["gun"],
	pair: ["yes", "no"],
	extra: ["virgin"],
   }
  },
	          {
  name: "Tanya Degurechaff",
  img: "https://64.media.tumblr.com/b007c81d30468e4673d139f1b2b4f212/20077b7569494904-4b/s400x600/d78b1c6b30c4ac96cf83ef86a80545d5a95ab8d9.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde"],
   }
  },
	          {
  name: "Bondrewd",
  img: "https://64.media.tumblr.com/176c17b706dd4a6843efcc9764372c16/20077b7569494904-41/s400x600/4a5f2b3d6c3b99a5ebe4f55166e6ca1d370886af.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["widow"],
   }
  },
	          {
  name: "Gon Freecss",
  img: "https://64.media.tumblr.com/a6171bf201216a87398e0c9c338d43a8/20077b7569494904-fc/s400x600/59bdd046ea985d4d44cd960488b6c1513a929974.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Killua Zoldyck",
  img: "https://64.media.tumblr.com/73d0c5014dc32c5aeb6a698a4e75845f/09331b9ac1fa1f40-20/s400x600/ab318fec5da657c1fc081ef5821f8667e7dc0827.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
	
   }
  },
	          {
  name: "Toma Kamijo",
  img: "https://64.media.tumblr.com/f3d7206b056bf6590068d0c38dfb9723/09331b9ac1fa1f40-ef/s400x600/5e0d9acf1752d786f8fc08ea7a781dad73213a49.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Shadow",
  img: "https://64.media.tumblr.com/597891a9735df6f62ccdcff081ba0c20/20077b7569494904-50/s400x600/9116583d9c98a1f7f1bef8aa1c6886ca108a906a.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["virgin", "twink"],
   }
  },
	          {
  name: "Pop Team Epic",
  img: "https://64.media.tumblr.com/0fd2f860a2a862e7667fb1ca7cac6a38/3465321d8070e9ee-2f/s400x600/cea81eabc77c72c244336c9981aae38a9c5b44e5.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["yes"],
	extra: ["blonde", "virgin"],
   }
  },
	          {
  name: "Popuko",
  img: "https://64.media.tumblr.com/50bc5d3e1d17420f476f3960ed8684dc/3465321d8070e9ee-dd/s400x600/f113b8d0d66c2bec422ffc920bdf8c783f9b2ca7.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["no"],
	extra: ["blonde", "virgin"],
   }
  },
	          {
  name: "Pipimi",
  img: "https://64.media.tumblr.com/ce93e42afa5b7ebd0fd0998820dffafa/3465321d8070e9ee-c4/s400x600/561516c0892aea8c4444f83e6abb78d3a2f06791.png",
  opts: {
    type: ["co"],
	gender: ["fem"],
	role: ["tank"],
	pair: ["no"],
	extra: ["virgin"],
   }
  },
	          {
  name: "Saber",
  img: "https://64.media.tumblr.com/74858c5f8d87388af4fa53b1d2871cc2/09331b9ac1fa1f40-e4/s400x600/a0c859b1fda000b557d946e1f212ca44607d7d00.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["spr"],
	pair: ["yes", "no"],
	extra: ["blonde", "twink"],
   }
  },
	          {
  name: "Archer",
  img: "https://64.media.tumblr.com/afbe9cec7c0792ccda1edd582c397f8a/b0cb3573a1b7fd0e-6a/s400x600/cf89946b382e3a87907da5fc9065891123acfed4.png",
  opts: {
    type: ["co"],
	gender: ["men"],
	role: ["atk"],
	pair: ["yes", "no"],
	extra: ["blonde", "twink", "widow"],
   }
  },
	          {
  name: "Lancer",
  img: "https://64.media.tumblr.com/d86e44959f6051f4ef532954b60398f0/eb19f84d84606eed-39/s400x600/82b850917d7757af1a7ad07175227f395308c6ff.png",
  opts: {
    type: ["co"],
	gender: ["nb"],
	role: ["gun"],
	pair: ["yes", "no"],
   }
  }

  ];
