import { MongoClient } from 'mongodb';

const client = 
new MongoClient('mongodb+srv://db-user-64:1wxaM4VRxWQah2px@cluster0.dqqag.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default function database(req, res, next) {
  if (!client.isConnected()) {
    return client.connect().then(() => {
      req.dbClient = client;
      req.db = client.db('slightings');
      return next();
    });
  }
  req.dbClient = client;
  req.db = client.db('slightings');
  return next();
}