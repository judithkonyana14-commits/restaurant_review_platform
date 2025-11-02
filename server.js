require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Example proxy search endpoint:
// Set EXTERNAL_API_BASE and EXTERNAL_API_KEY in backend/.env
app.get('/api/search', async (req, res) => {
  const q = req.query.q || "pizza";
  // Example for Yelp: `${process.env.EXTERNAL_API_BASE}/businesses/search?term=${q}&location=your_city`
  try {
    const url = `${process.env.EXTERNAL_API_BASE || ''}`;
    const response = await axios.get(url, {
      params: { term: q, location: process.env.DEFAULT_LOCATION || 'New York' },
      headers: { Authorization: `Bearer ${process.env.EXTERNAL_API_KEY || ''}` }
    });
    res.json(response.data);
  } catch(err){
    console.error(err.message || err);
    res.status(500).json({ error: "Failed to contact external API", details: err.message });
  }
});

// Example details proxy
app.get('/api/details', async (req, res) => {
  const id = req.query.id;
  try {
    const url = `${process.env.EXTERNAL_API_BASE || ''}/${id}`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${process.env.EXTERNAL_API_KEY || ''}` }
    });
    res.json(response.data);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: "Failed to get details" });
  }
});

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
