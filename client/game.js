//Array to load images will be called pics
//pictures are from flickr album "Georgeria"
//Just a test for all the pictures
//document.write(pics[3])
var pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];
var cardPics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber" img style="border:5px solid black">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper" img style="border:5px solid black">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins" img style="border:5px solid black">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish" img style="border:5px solid black">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s" img style="border:5px solid black">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood" img style="border:5px solid black">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis" img style="border:5px solid black">'];

var i = 0;
var j = 0;
var k = 0;
var p = 0;
var card = [];

var pick = 0;

var hat = [];
var hat2 = [];
var hat3 = [];
var hat4 = [];
var hat5 = [];
var hat6 = [];

// this will be the randomizer function
function mixer() {
  
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat);
//document.write('<br>');
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat2.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat2);
//document.write('<br>');
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat3.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat3);
//document.write('<br>');
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat4.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat4);
//document.write('<br>');
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat5.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat5);
//document.write('<br>');
for (i=0; i<25; i++) {  
pick = Math.floor(Math.random() * pics.length);
hat6.push(pics[pick]);
pics.splice(pick,1);

};
pics = ['<img src="http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG" width="133" height="169" alt="70 Dayton St">','<img src="https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg" width="133" height="169" alt="70 Dayton St">','<img src="http://www.south-end-boston.com/images/exterior_pics/3149.jpg" width="133" height="169" alt="70 Dayton St">','<img src="https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg" width="133" height="169" alt="70 Dayton St">', '<img src="https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg" width="133" height="169" alt="BackRollar">', '<img src="https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg" width="133" height="169" alt="Beachcomber">','<img src="https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg" width="133" height="169" alt="Bean Supper">','<img src="https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg" width="133" height="185" alt="Chicken Coop">', '<img src="https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg" width="133" height="185" alt="chickadee">', '<img src="https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg" width="133" height="185" alt="canada goose">', '<img src="https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg" width="133" height="185" alt="Cousins">', '<img src="https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg" width="133" height="185" alt="Corn">', '<img src="https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg" width="133" height="185" alt="Cormorants">', '<img src="https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg" width="133" height="185" alt="GeorgeCarving">', '<img src="https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg" width="133" height="185" alt="GeorgeAnddog">', '<img src="https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg" width="133" height="185" alt="Flowers by George">', '<img src="https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg" width="133" height="185" alt="fish">', '<img src="https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg" width="133" height="185" alt="Family1950s">', '<img src="https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg" width="133" height="185" alt="Elaine">', '<img src="https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg" width="133" height="185" alt="duck">', '<img src="https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg" width="133" height="185" alt="Driftwood">', '<img src="https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg" width="133" height="185" alt="Don and Luis">'];

//document.write(hat6);
//document.write('<br>');
};




// cardMaker is a function for making random cards #height * #width


function cardMaker(rows, columns, bag) {
    // This for outer for loop creates rows = height
    
    for (i = 0; i < rows; i++) {
        
        //this inner for loop populates the rows with random pictures = width
        
        for (j = 0; j < columns; j++) {
        k = (i * 5) + j;    
        //card.push (bag[k])
      document.write(bag[k]);        
        };
        
        document.write('<br>');
        card = [];
    };
    
};

function players() {
  p = prompt("How many players? 1-6");
  if (p > 6 || p == 0) {
    players();
  };
}

function main() {
    
    players();
    //document.write(p);
    //document.write('<br>');
   
   //var boards = window.open("", "", "width=200, height=100");
   //document.write("Hi")
   
   mixer();    
    
    cardMaker(5,5,hat);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
    
    if (p > 1) {
    cardMaker(5,5,hat2);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
    
    };
    
    if (p > 2) {
    cardMaker(5,5,hat3);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
    };
    
    if (p > 3) {
    cardMaker(5,5,hat4);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
    };
    
    if (p > 4) {
    cardMaker(5,5,hat5);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
    };
    
    if (p > 5) {
    cardMaker(5,5,hat6);
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    //document.write('<br>');
    document.write('<div class="page-break"></div>');
   };
 
};

        
    