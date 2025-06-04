export let words = [
  { word_id: 1, word: 'Toad' },
  { word_id: 2, word: 'Spring' },
  { word_id: 3, word: 'Bush' },         // replaced "Hedge"
  { word_id: 4, word: 'Garden' },
  { word_id: 5, word: 'Freedom' },
  { word_id: 6, word: 'Earth' },
  { word_id: 7, word: 'Plow' },         // simplified spelling of "Plough"
  { word_id: 8, word: 'Soil' },
  { word_id: 9, word: 'Birdsong' },
  { word_id: 10, word: 'Government' },  // replaced "Politics"
  { word_id: 11, word: 'Snail' },
  { word_id: 12, word: 'War' },
  { word_id: 13, word: 'Flower' },
  { word_id: 14, word: 'Simple' },      // replaced "Ordinary"
  { word_id: 15, word: 'Leaf' },
  { word_id: 16, word: 'Wind' },        // replaced "Breeze"
  { word_id: 17, word: 'Sunlight' },
  { word_id: 18, word: 'Green' }, // replaced "Moss"
  { word_id: 19, word: 'Fighter' },     // replaced "Rebel"
  { word_id: 20, word: 'Boots' },
  { word_id: 21, word: 'England' },
  { word_id: 22, word: 'Bushes' },      // replaced "Hedgerow"
  { word_id: 23, word: 'Happiness' },   // replaced "Pleasure"
  { word_id: 24, word: 'Nature' },
  { word_id: 25, word: 'Tulip' },
  { word_id: 26, word: 'Canal' }, // replaced "Ditch"
  { word_id: 27, word: 'Pond' },
  { word_id: 28, word: 'Skin bump' },   // replaced "Wart"
  { word_id: 29, word: 'Worm' },
  { word_id: 30, word: 'Ribbit' },      // replaced "Croak"
  { word_id: 31, word: 'Fog' },
  { word_id: 32, word: 'March' },
  { word_id: 33, word: 'Frog eggs' },   // replaced "Frogspawn"
  { word_id: 34, word: 'Wood' },        // replaced "Log"
  { word_id: 35, word: 'Hole' },        // replaced "Burrow"
  { word_id: 36, word: 'Old leaves' },  // replaced "Compost"
  { word_id: 37, word: 'Roots' },
  { word_id: 38, word: 'Grass field' }, // replaced "Meadow"
  { word_id: 39, word: 'Shade' },
  { word_id: 40, word: 'Thick plants' },// replaced "Underbrush"
  { word_id: 41, word: 'Tweet' },       // replaced "Chirp"
  { word_id: 42, word: 'Morning' },     // replaced "Dawn"
  { word_id: 43, word: 'Fence' },
  { word_id: 44, word: 'Shovel' },      // replaced "Spade"
  { word_id: 45, word: 'Farm' },        // replaced "Pasture"
  { word_id: 46, word: 'Silence' },
  { word_id: 47, word: 'Walk' },        // replaced "Wander"
  { word_id: 48, word: 'Path' },
  { word_id: 49, word: 'Cottage' }, // replaced "Cottage"
  { word_id: 50, word: 'Field' },
  { word_id: 51, word: 'Stone' },
  { word_id: 52, word: 'Weed' }, // replaced "Weed"
  { word_id: 53, word: 'Swamp' },       // replaced "Marsh"
  { word_id: 54, word: 'Melt' },        // replaced "Thaw"
  { word_id: 55, word: 'Dirt' },
  { word_id: 56, word: 'Fence' },  // replaced "Wattle"
  { word_id: 57, word: 'Cabbage' },
  { word_id: 58, word: 'Thorny plants' }, // replaced "Brambles"
  { word_id: 59, word: 'Light rain' },  // replaced "Drizzle"
  { word_id: 60, word: 'Sky' },
  { word_id: 61, word: 'Shovel' },      // duplicate, kept consistent
];

 
 export let types = new Array(25).fill('Rosies',0,8).fill('Cornflowers',8,16).fill('Dandelion',16,24).fill('Thorns',24,25)