const fs = require("fs");

module.exports = {
    getListings: function (response) {
        const contents = fs.readFileSync("blog-listings.json");
        const jsonContent = JSON.parse(contents);
        console.log(jsonContent);

        response.setHeader('Content-Type', 'application/json');
        response.writeHead(200, {
            'content-type': 'application/json'
        });
        response.end(JSON.stringify(jsonContent));
    }
}