let input = '';

var sha1 = require('sha1');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    input += chunk;
  }
});

process.stdin.on('end', () => {
  const result = JSON.parse(input).map(res => ({
    description: res.failure,
    fingerprint: sha1(JSON.stringify(res)),
    location: {
      path: res.name.substring(__dirname.length + 1, res.name.length),
      lines: {
        begin: res.startPosition.line + 1
      }
    }
  }));
  process.stdout.write(JSON.stringify(result));
});

