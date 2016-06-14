var iceCreams = ["peanut butter chocolate", "vanilla bean", "chunky monkey", "cherry garcia", "bananas foster"];
$(document).ready(function() {
  iceCreams.forEach(function(iceCream) {
    $(".flavors").text("<p>" + iceCream + "</p>");
  });
});
