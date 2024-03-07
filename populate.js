require('dotenv').config()

const connectDB = require('./db/connect');
const Job = require('./models/Job')
const mockData = require('./mock-data.json');

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log('Success!');
        process.exit(0); //everything went well and we are exiting the process
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
