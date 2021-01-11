import nextConnect from 'next-connect';
import database from './withDatabase';
import session from './withSession';
import authentication from './authentication';

const middleware = nextConnect();

middleware.use(database);
middleware.use(session);
middleware.use(authentication);

export default middleware;