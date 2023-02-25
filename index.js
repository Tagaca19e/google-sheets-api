const { GoogleSpreadsheet } = require('google-spreadsheet');

const main = async () => {
  const creds = require('./credentials.json');
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1WmSnVprRZLKoZyoonSZFbRuqe3dhOaPQzeW-aOuYiPM');

  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  console.log(sheet.rowCount);

  const rows = await sheet.getRows();
  for (let row of rows) {
    console.log(row.Major);
  }
}
main();
