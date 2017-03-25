angular.module('play', [])

.controller('playController', function($scope, $state) {

  $scope.pics = ["http://www.johnlund.com/Images/Elephant-in-the-bar-picture-Photo.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/1d/Turtle3m.JPG", "https://s-media-cache-ak0.pinimg.com/736x/2d/3c/3f/2d3c3f4cb582893b06c5c2495e943403.jpg", "http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/s/sw/swan/swan_1.jpg", "http://earthguide.ucsd.edu/eoc/special_topics/teach/sp_climate_change/images/greenhouse.jpg", "http://www.south-end-boston.com/images/exterior_pics/3149.jpg", "https://farm1.staticflickr.com/438/20356678226_70e1cae72f_m.jpg", "https://farm1.staticflickr.com/295/20383441045_019ba90306_m.jpg", "https://farm1.staticflickr.com/536/19762511583_22242d2904_m.jpg", "https://farm1.staticflickr.com/507/20196799709_b982f6bbc1_m.jpg", "https://farm1.staticflickr.com/268/19762507943_ff0ea1c118_m.jpg", "https://farm1.staticflickr.com/564/19760769344_543ebb82f0_m.jpg", "https://farm1.staticflickr.com/427/19762508463_29a53cd5df_m.jpg", "https://farm1.staticflickr.com/348/20383434715_ba8202737f_m.jpg", "https://farm4.staticflickr.com/3669/20383434915_b5d78d86aa_m.jpg", "https://farm1.staticflickr.com/530/20389595341_c6d81265f6_m.jpg", "https://farm1.staticflickr.com/425/20196790389_53c6b94a2b_m.jpg", "https://farm1.staticflickr.com/532/20196791229_3c681e8d04_m.jpg", "https://farm1.staticflickr.com/487/20389592441_9f41a44cd2_m.jpg", "https://farm1.staticflickr.com/474/19760764184_155a5e9384_m.jpg", "https://farm4.staticflickr.com/3683/20357180846_2292d829d0_m.jpg", "https://farm4.staticflickr.com/3726/20195448908_3f980bac40_m.jpg", "https://farm1.staticflickr.com/544/20196790619_d81b4e4183_m.jpg", "https://farm1.staticflickr.com/506/20195449118_725bcaeee4_m.jpg", "https://farm1.staticflickr.com/315/19760763414_954518e06b_m.jpg"];

  $scope.shuffle = function(array) {

    var temp = array.slice();
    var newArray = [];

    while (temp.length > 0) {
      // choose a random number
      var randomNum = Math.floor(Math.random() * temp.length);
      newArray.push(temp[randomNum]);
      temp.splice(randomNum, 1);
    }

    return newArray;

  };



  $scope.images = $scope.shuffle($scope.pics);

  $scope.card = $scope.images[0];

  $scope.started = false;

  $scope.start = function() {
    $scope.started = true;

  };

  
  $scope.continue = function() {
    $scope.images.pop();
    $scope.card = $scope.images[0];

  };

});