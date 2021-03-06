const error = require('../middleware/error');
const parents = require('../routes/parents');
const students = require('../routes/students');
const drivers = require('../routes/drivers');
const schools = require('../routes/schools');
const locations = require('../routes/locations');
const buses = require('../routes/buses');
const busRoutes = require('../routes/busroutes');
const schoolAdmins = require('../routes/schooladmins');
const superUsers = require('../routes/superusers');
const dailyAttendances = require('../routes/dailyattendances');
const authParents = require('../routes/authparents');
const authDrivers = require('../routes/authdrivers');
const authSchoolAdmins = require('../routes/authschooladmins');
const authSuperUsers = require('../routes/authsuperusers');
const express = require('express');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/parents',parents);
    app.use('/api/students',students);
    app.use('/api/drivers',drivers);
    app.use('/api/schools',schools);
    app.use('/api/locations',locations);
    app.use('/api/buses',buses);
    app.use('/api/busroutes',busRoutes);
    app.use('/api/schooladmins',schoolAdmins);
    app.use('/api/superusers',superUsers);
    app.use('/api/dailyattendances',dailyAttendances);
    app.use('/api/authparents',authParents);
    app.use('/api/authdrivers',authDrivers);
    app.use('/api/authschooladmins',authSchoolAdmins);
    app.use('/api/authsuperusers',authSuperUsers);
    app.use(error);
}