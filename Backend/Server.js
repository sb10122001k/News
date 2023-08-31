const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const NEWS = require( './Models');
const app = express();
const PORT = 3000;
main().catch(err => console.log(err));


app.use(cors());
app.use(express.json())

async function main() {
    console.log("\n Reached Here")
    await mongoose.connect("mongodb+srv://cluster0.asfxdm3.mongodb.net/NewsAPP?retryWrites=true&w=majority");
    console.log("Connection open");
  }

app.post('/api/addNews',async(req,res) =>{

    try {
      const data=req.body;
      const news=new NEWS(data);
      await news.save();
      res.status(201).json({ message: 'ok' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
    
  })

  app.get('/api/getNews', async (req, res) => {
    try {
        const newsData = await NEWS.find(); // Assuming NEWS is your Mongoose model
        res.status(200).json(newsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

  app.get('/api/getNews',async(req,res) =>{


  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
