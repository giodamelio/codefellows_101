$(function() {
  $("#go").click(function() {
    $.getJSON({
      url: "https://api.forecast.io/forecast/a09b467b8ff59a62f3a7c9e68ef2bcb2/47.6062,-122.3321?callback=?"
    }).done(function(data) {
      console.log(data.currently.icon);
      if (['rain', 'sleet'].indexOf(data.currently.icon) !== -1) {
        window.location.href = "yoga.html";
      } else if (['snow'].indexOf(data.currently.icon) !== -1) {
        window.location.href = "skiing.html";
      } else {
        window.location.href = "biking.html";
      }
    });
  });
});
