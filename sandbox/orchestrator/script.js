$( "#taskforce1" ).click(function() {
  $( ".infobox" ).hide();
  $( "#info1" ).css('display', 'inline');
  $( "#menu label a" ).removeClass( "menuSelected" );
  $( "#taskforce1" ).addClass( "menuSelected" );
  $( ".resultsbox" ).hide();
  $( "#results1" ).show();
});

$( "#taskforce2" ).click(function() {
  $( ".infobox" ).hide();
  $( "#info2" ).css('display', 'inline');
  $( "#menu label a" ).removeClass( "menuSelected" );
  $( "#taskforce2" ).addClass( "menuSelected" );
  $( ".resultsbox" ).hide();
  $( "#results2" ).show();
});

$( "#taskforce3" ).click(function() {
  $( ".infobox" ).hide();
  $( "#info3" ).css('display', 'inline');
  $( "#menu label a" ).removeClass( "menuSelected" );
  $( "#taskforce3" ).addClass( "menuSelected" );
  $( ".resultsbox" ).hide();
  $( "#results3" ).show();
});