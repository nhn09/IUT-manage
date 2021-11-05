//external import
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const path = require("path");
const cookieParser = require('cookie-parser');
const app = express();
const cors = require ('cors')
//internal import

const departmentRouter = require('./routes/departments/departmentRoute')
const discussRouter = require('./routes/discuss/discussRoute')
const profileRouter = require('./routes/profile/profileRoute')
const rootRouter = require('./routes/root/root')
const CoursesRoute = require('./routes/check/check')
const ConferenceRouter = require('./routes/conference/conference')
const SubjectsRoute = require('./routes/subjects/subjectRoute')
const allDeptSemRouter = require('./routes/btm/btm')
const  subjectsBtmRouter = require('./routes/btm/subjectsBtmRouter')
const cseSubjectRouter = require('./routes/cse/cseSubjectsRouter')
const ceeSubjectRouter = require('./routes/cee/ceeSubjectsRouter')
const mpeSubjectRouter = require('./routes/mpe/mpeSubjectsRouter')
const tveSubjectRouter = require('./routes/tve/tveSubjectsRouter')
const eeeSubjectRouter = require('./routes/eee/eeeSubjectsRouter')
const indivisualCourseRouter = require ('./routes/indivisualCourses/indivisualCourses')
dotenv.config();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

//route
app.use('/departments',departmentRouter)
app.use('/discuss',discussRouter)
app.use('/profile',profileRouter)
app.use('/',rootRouter)
app.use('/Courses/',SubjectsRoute)
app.use('/Courses',CoursesRoute)
app.use('/conferences',ConferenceRouter)
app.use('/semesters/btm/',subjectsBtmRouter)
app.use('/semesters/cse/',cseSubjectRouter)
app.use('/semesters/cee/',ceeSubjectRouter)
app.use('/semesters/tve/',tveSubjectRouter)
app.use('/semesters/mpe/',mpeSubjectRouter)
app.use('/semesters/eee/',eeeSubjectRouter)
app.use('/subjects/',indivisualCourseRouter)
app.use('/semesters',allDeptSemRouter)




//middlewares

const db = require("./model/index");
const Role = db.role;

db.mongoose.connect(process.env.MONGO_CONN_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
  require('./routes/user/user.routes')(app);
  require('./routes/auth/auth.routes')(app);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

//listen
app.listen(process.env.PORT,()=>{
    console.log('listening at port 5000');
})