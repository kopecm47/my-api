$(document).ready(function() {
  $('.search').submit(function(event) {
    var artists = $(this).find("input[name='artist']").val();
    getTracks(artists);
  });
});

function getTracks(artists){
  var params = {
    country: "SE",
    token: "BQD_xLMDuYTmsMLRJZ-jwDLSeniSeMGzgDzAERVh_CS1DOl40tGsV5nrmb7rRD46lAh7ntPybsW0TlbmDdNDjW9Qb9urVB3b0i0mTe5TRt-bE4n7fW575u-deW877K98ihDofWWUTg"
  };
  url: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks";

  $.getJson(url, params, function(data){
    showResults(data.items);
  });
};

function showResults(results){
  var html = "";
  $.each(results, function(index, item){
    html += '<p>'+item.tracks+'</p>'
  });
  $('search-results').html(html);
};