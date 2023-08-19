var notebooks = angular.module('notebooks', []);

notebooks.controller('NotebookListCtrl', function($scope) {
  $scope.notebooks = [
    {"name": "Valerie",
     "procesor": "Amy Winehouse",
     "age": 2011},
     {"name": "One Of These Nights",
     "procesor": "The Eagles",
     "age": 2011},
     {"name": "Attention",
     "procesor": "Charlie Puth",
     "age": 2011},
     {"name": "All My Ex's Live In Texas",
     "procesor": "George Strait",
     "age": 2011},
     {"name": "One Night At A Time",
     "procesor": "George Strait",
     "age": 2011},
     {"name": "Slide",
     "procesor": "The Goo Goo Dolls",
     "age": 2011},
     {"name": "I Will survive",
     "procesor": "Gloria Gaynor",
     "age": 2011},
     {"name": "What's Up",
     "procesor": "4 Non Blondes",
     "age": 2011},
     {"name": "You Oughta Know",
     "procesor": "Alanis Morrisette",
     "age": 2011},
     {"name": "One Dance",
     "procesor": "Drake",
     "age": 2011},
     {"name": "Zombie",
     "procesor": "The Cranberries",
     "age": 2011},
     {"name": "Just Hold On, We're Going Home",
     "procesor": "Drake",
     "age": 2011},
     {"name": "Dreams",
     "procesor": "Fleetwood Mac",
     "age": 2011},
     {"name": "Sex On Fire",
     "procesor": "Kings of Leon",
     "age": 2011},
     {"name": "Stuck In The Middle",
     "procesor": "Stealers Wheel",
     "age": 2011},
     {"name": "Get Lucky",
     "procesor": "Daft Punk",
     "age": 2011},
     {"name": "The Chair",
     "procesor": "George Strait",
     "age": 2011},
     {"name": "Drinkin' Problem",
     "procesor": "Midland",
     "age": 2011},
     {"name": "Como La Flor",
     "procesor": "Selena",
     "age": 2011},
     {"name": "Bidi Bidi Bom Bom",
     "procesor": "Selena",
     "age": 2011},
     {"name": "Boogie Oogie",
     "procesor": "Taste Of Honey",
     "age": 2011},
     {"name": "Poison",
     "procesor": "Bell biv Devoe",
     "age": 2011},
     {"name": "Give Me One Reason",
     "procesor": "Tracy Chapman",
     "age": 2011},
     {"name": "New Kid In Town",
     "procesor": "The Eagles",
     "age": 2011},
     {"name": "Superstition",
     "procesor": "Stevie Wonder",
     "age": 2011},
     {"name": "Love On The Brain",
     "procesor": "Rhianna",
     "age": 2011},
     {"name": "No Scrubs",
     "procesor": "TLC",
     "age": 2011},
     {"name": "Can't Get You Outta My Head",
     "procesor": "Kylie Minogue",
     "age": 2011},
     {"name": "Bennie And The Jets",
     "procesor": "Elton John",
     "age": 2011},
     {"name": "Crazy",
     "procesor": "Gnarles Barkley",
     "age": 2011},
     {"name": "Rhiannon",
     "procesor": "Fleetwood Mac",
     "age": 2011},
     {"name": "Locked Out Of Heaven",
     "procesor": "Bruno Mars",
     "age": 2011},
     {"name": "Billie Jean",
     "procesor": "Michael Jackson",
     "age": 2011},
     {"name": "Make Me Wanna",
     "procesor": "Thomas Rhett",
     "age": 2011},
     {"name": "Pony",
     "procesor": "Ginuine",
     "age": 2011},
     {"name": "Seven Nation Army",
     "procesor": "White Stripes",
     "age": 2011},
     {"name": "Neon Moon",
     "procesor": "Brooks & Dunn",
     "age": 2011},
     {"name": "Ironic",
     "procesor": "Alanis Morissette",
     "age": 2011},
     {"name": "Tennessee Whiskey",
     "procesor": "Chris Stapleton",
     "age": 2011},
     {"name": "Head Over Feet",
     "procesor": "Alanis Morissette",
     "age": 2011},
     {"name": "Toxic",
     "procesor": "Britney Spears",
     "age": 2011},
     {"name": "Chandelier",
     "procesor": "Sia",
     "age": 2011},
     {"name": "Milkshake",
     "procesor": "Kelis",
     "age": 2011},
     {"name": "Misery Business",
     "procesor": "Paramore",
     "age": 2011},
     {"name": "Don't Stop The Music",
     "procesor": "Rihanna",
     "age": 2011},
     {"name": "Don't Start Now",
     "procesor": "Dua Lipa",
     "age": 2011},
     {"name": "Come TogetherH",
     "procesor": "The Beatles",
     "age": 2011},
     {"name": "Beautiful",
     "procesor": "Christina Aguilera",
     "age": 2011},
     {"name": "Bad Girls",
     "procesor": "Donna Summer",
     "age": 2011},
     {"name": "Adore You",
     "procesor": "Harry Stlyes",
     "age": 2011},
     {"name": "Juice",
     "procesor": "Lizzo",
     "age": 2011},
     {"name": "Don't Cha",
     "procesor": "The Pussycat Dolls",
     "age": 2011},
     {"name": "Too Good",
     "procesor": "Drake and Rihanna",
     "age": 2011},
     {"name": "Diamonds",
     "procesor": "Rihanna",
     "age": 2011},
     {"name": "What Do You Mean",
     "procesor": "Justin Bieber",
     "age": 2011},
     {"name": "MGMT",
     "procesor": "Electric Feel",
     "age": 2011},
     {"name": "There's Nothing Holding Me Back",
     "procesor": "Shawn Mendes",
     "age": 2011},
     {"name": "I Feel It Coming",
     "procesor": "The Weeknd",
     "age": 2011},
     {"name": "Youngblood",
     "procesor": "5secondsofsummer",
     "age": 2011},
     {"name": "Shape Of You",
     "procesor": "Ed Sheeran",
     "age": 2011},
     {"name": "Send The Pain Below",
     "procesor": "Chevelle",
     "age": 2011},
     {"name": "Just Like Heaven",
     "procesor": "The Cure",
     "age": 2011},
     {"name": "3AM",
     "procesor": "Matchbbox 20",
     "age": 2011},
     {"name": "Loser",
     "procesor": "3 Doors Down",
     "age": 2011},
     {"name": "Here Without You",
     "procesor": "3 Doors Down",
     "age": 2011},
     {"name": "Big Empty",
     "procesor": "Stone Temple Pilots",
     "age": 2011},
     {"name": "Take Me Out",
     "procesor": "Franz Ferdinand",
     "age": 2011},
     {"name": "Hero",
     "procesor": "Foo Fighters",
     "age": 2011},
     {"name": "Easy",
     "procesor": "The Commodores",
     "age": 2011},
     {"name": "Lyin' Eyes",
     "procesor": "The Eagles",
     "age": 2011},
     {"name": "Your Kiss Is On My List",
     "procesor": "Hall & Oates",
     "age": 2011},
     {"name": "Suit and Tie",
     "procesor": "Justin Timberlake",
     "age": 2011},
     {"name": "Knocking On Heaven's Door",
     "procesor": "Gins N' Roses",
     "age": 2011},
     {"name": "My Cherie Amor",
     "procesor": "Stevie Wonder",
     "age": 2011},
     {"name": "Baby I Love Your Way",
     "procesor": "Peter Frampton",
     "age": 2011},
     {"name": "No Woman No Cry",
     "procesor": "Bob Marley",
     "age": 2011},







































     








     

  ];
  $scope.orderList = "name";
});