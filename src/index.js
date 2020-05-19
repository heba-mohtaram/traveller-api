let express = require('express'),
    mongoose = require('mongoose'),
    travelerRoutes = require('./routes/travelers'),
    app = express(),
    port = process.env.PORT || 5556;


app.use(express.json());

app.use('/api/v1', travelerRoutes);

mongoose.connect(
    'mongodb+srv://<username>:<password>@<cluster>/<collection>',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
).then(() => {
    app.listen(port, () => { console.log(`Traveler API started on ${port}...`);});
}).catch((err) => {
    console.log(err);
});