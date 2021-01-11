import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);
debugger;
const withSession = handler => session.withSession(handler, {
  store: new MongoStore({ url: 'mongodb+srv://db-user-64:1wxaM4VRxWQah2px@cluster0.dqqag.mongodb.net/?retryWrites=true&w=majority' }),
});

export default withSession;
