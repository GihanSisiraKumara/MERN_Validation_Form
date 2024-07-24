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

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('Success');
                } else {
                    res.json('Invalid password');

                }
            } else {
                res.json('User not found');
            }
        })
        .catch(err => {
            console.error('Error during login:', err);
            res.status(500).json('Server error');
        });
});


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
