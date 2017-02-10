var pg = require('pg');

var connectionString;

if (process.env.DATABASE_URL){
  pg.defaults.ssl = true;
  console.log('environment var');
  connectionString = process.env.DATABASE_URL;
} else {
  console.log('local var');
  connectionString = //TODO: postgres://localhost:5432/database name;
}

function initializeDB(){
  return new Promise(function(resolve, reject) {
  pg.connect(connectionString, function(err, client, done){
    console.log('connected to pg');
    if(err){
      console.log('Error connecting to DB!', err);
      reject(Error(err));
      process.exit(1);

    } else {

      var listTable = 'CREATE TABLE IF NOT EXISTS emailList (' +
      'email varchar(255) NOT NULL);'