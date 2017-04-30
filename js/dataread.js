
/* Read data from a public google spreadsheet test */

  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1LucdKPLs0ldwC0oTOh_rtca7SuO4JfxYJcm5UyeNjYU/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    //alert('Successfully processed!')
    console.log(data);
  }
  window.addEventListener('DOMContentLoaded', init)

