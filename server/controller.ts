import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Application} from 'express';
import {getAllCourses, getCourseById} from './university/get-courses.route';
import {searchLessons} from './university/search-lessons.route';
import {getCourseCategories} from './university/course-categories.route';
import {onFileupload} from './university/file-upload.route';
import {checkLogin, geAccountById} from './authentication/account';

const fileUpload = require('express-fileupload');
const app: Application = express();

app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// ACCOUNTS
app.route('/api/login').post(checkLogin);

app.route('/api/account').get(geAccountById);


// ANGULAR UNIVERSITY COURSES / LESSONS / CATEGORIES
app.use(fileUpload());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/course-categories').get(getCourseCategories);

app.route('/api/thumbnail-upload').post(onFileupload);


const httpServer: any = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});




