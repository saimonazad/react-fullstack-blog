import config from '../config/config';
import app from './express'
import mongoose from 'mongoose'


app.listen(config.port, (err) => {
    if (err) console.log(err)
    console.log(`Server started on port ${config.port}`);
});