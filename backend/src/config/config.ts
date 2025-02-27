import dotenv from 'dotenv'
dotenv.config()
export default {
  port: process.env.PORT || 3000,
  mongo: {
    uri: 'mongodb+srv://asnasherin1233:asna2926@cluster0.wdyqeu9.mongodb.net/doctime?retryWrites=true&w=majority&appName=Cluster0',
  },
};
     