function myFunction() {
  Logger.log("Warming Up")
  var response = UrlFetchApp.fetch("https://www1.nseindia.com/products/content/sec_bhavdata_full.csv")

  if(response.getResponseCode() == 200) {
    Logger.log(response.getContentText())
    csvData = Utilities.parseCsv(response.getContentText());
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    // boom data to a sheet
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData); 
  }
}
