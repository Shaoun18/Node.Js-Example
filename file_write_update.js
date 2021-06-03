var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});