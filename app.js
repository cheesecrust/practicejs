import Express from 'express';
import mongoose from 'mongoose';
import testRouter from './routes/api';

const app = Express();

mongoose.createConnection('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true   
}).then(() => {
	console.log('MongoDB connected...')
})
.catch(error => console.log(error));

app.use('/api', testRouter);

app.get('/', function(req, res) {
	res.send('backend');
});

app.listen(3000, function(){
	console.log('Connected 3000 port');
});
