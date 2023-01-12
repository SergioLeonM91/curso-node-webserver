const http = require('node:http');

http.createServer( (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader( 'Content-Disposition', 'attachment; filename=list.csv' );
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'id, name\n' );
    res.write( '1, Sergio\n' );
    res.write( '2, Sandra\n' );
    res.write( '3, Ruben\n' );
    res.write( '4, Fer\n' );
    res.end();
})
.listen( 8080 );

