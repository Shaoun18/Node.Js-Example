var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});