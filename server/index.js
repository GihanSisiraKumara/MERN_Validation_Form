const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.post('/register', (req, res) => {
    console.log(req.body);

    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => {
            console.error('Error creating employee:', err);
            res.status(400).json('Error: ' + err);
        });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
