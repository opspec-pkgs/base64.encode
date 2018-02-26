const fs = require('fs');

fs.writeFileSync('/encodedValue', Buffer.from(process.env.rawValue).toString('base64'));