const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const validator  = require('validator')
const bcrypt     = require('bcryptjs')
const jwt        = require('jsonwebtoken')

var cors = require('cors');

mongoose.connect("mongodb+srv://este:root@cluster0-pelk3.mongodb.net/test?retryWrites=true&w=majority",{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {console.log(err)}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 8080;

const User     = require('./src/models/user');

var router = express.Router();           

router.use(function(req, res, next) {
    next(); 
});


router.route('/users')
.get(function(req, res) {

  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users)
  })
 })
.post(async function(req,res) {
  try {
      var user = new User();
      params = req.body;

      user.first_name = params.first_name;
      user.last_name  = params.last_name;
      user.email      = params.email;
      user.age        = params.age;
      user.password   = params.password;

      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({ user, token })
  } catch (error) {
      res.status(400).send(error)
  }


});
router.route('/users/:user_id')
.get(function(req,res) {
  User.findById(req.params.user_id,function(error,user) {
    if(error)
      res.send(error);
    
    res.json(user);  
  })
  
})
.put(function(req, res) {

  User.findById(req.params.user_id, function(err, user) {

      if (err)
          res.send(err);


      params = req.body;
    
      user.first_name = params.first_name;
      user.last_name  = params.last_name;
      user.email      = params.email,
      user.age        = params.age
        
      user.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'user updated!' });
      });

  });
})
.delete(function(req, res) {

  User.remove({
      _id: req.params.user_id
  },function(err, user) {
      if (err)
          res.send(err);

    User.find(function(err, users) {
      if (err)
        res.send(err);
  
      res.json({ message: 'Successfully deleted',users})
    })
  });
});

router.route('/users/login')
.post(async function (req, res){
  try {
      const { email , password } = req.body;

      const user = await User.findOne({email});

      if (!user) {
          throw new Error({ error: 'Invalid login credentials' })
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password)
      if (!isPasswordMatch) {
          throw new Error({ error: 'Invalid login credentials' })
      }
 
      if (!user) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
      }
      const token = await user.generateAuthToken()
      res.send({ user, token })

  } catch (error) {
      res.status(400).send(error)
  }
})

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);