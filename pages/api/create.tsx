//import isEmail from 'validator/lib/isEmail';
import * as argon2 from 'argon2';
import withMiddleware from '../middlewares/withMiddleware';

const handler = (req, res) => {
  console.log(req,res);
  if (req.method === 'POST') {
    const { firstname,lastname,email, password } = req.body;
    console.log(email,firstname);
    console.log('collectiondb',req.db.collection);
    // if (!isEmail(email)) {
    //   return res.send({
    //     status: 'error',
    //     message: 'The email you entered is invalid.',
    //   });
    // }
    return req.db.collection('sightings').countDocuments({ email })
      // .then((count) => {
      //   if (count) {
      //     return Promise.reject(Error('The email has already been used.'));
      //   }
      //   return argon2.hash(password);
      // })
      // .then(hashedPassword => req.db.collection('sightings').insertOne({
      //   firstname,
      //   lastname,
      //   email,
      //   password: hashedPassword,
      // }))
      .then(req.db.collection('sightings').insertOne({
        firstname,
        lastname,
        email,
        password
      }))
      .then((user) => {
        req.session.userId = user.insertedId;
        res.status(201).send({
          status: 'ok',
          message: 'User signed up successfully',
        });
      })
      .catch(error => res.send({
        status: 'error',
        message: error.toString(),
      }));
  }
  return res.status(405).end();
};

export default handler;