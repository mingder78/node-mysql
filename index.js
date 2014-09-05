// mysql
var database = require('mysql-simple');
database.init('admin', 'mypass', 'test', '192.168.59.103', 3306);

database.query('SELECT * FROM users WHERE active=? LIMIT 10', [true],
      function(err, results)
      {
          if (err) {
                console.log('error fetching some active users: ' + err);
                    return;
                      }

            for (var i = 0; i < results.length; i++)
      console.log('got active user ' + results[i]);
      });

database.querySingle('SELECT id,name FROM users WHERE id=?', [4],
      function(err, result)
      {
          if (err) {
                console.log('error fetching a single active user: ' + err);
                    return;
                      }

            if (result)
      console.log('user exists!');
  else
      console.log('user does not exist');
      });

database.queryMany('SELECT * FROM users WHERE active=?', [true],
      function(row) // Row callback
      {
          console.log('got active user ' + row);
      },
        function(err) // End callback
        {
            if (err) {
                  console.log('error fetching all active users: ' + err);
                      return;
                        }
        });

database.nonQuery('INSERT INTO users (name, email) VALUES (?, ?)',
      ['newuser', 'newuser@gmail.com'], function(err, info)
      {
          if (err) {
                console.log('error inserting new user: ' + err);
                    return;
                      }

            console.log('inserted new user, id = ' + info.insertId);
      });


// original code.

var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
