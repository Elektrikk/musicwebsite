const express = require("express");
const cors = require("cors");
const axios = require('axios').default;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try{
      const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username, secret: username, first_name: username},
        {headers: {"private-key":"6b220380-e42f-450e-a9af-d5f7e84dbd06" }}
      )
      return res.status(r.status).json(r.data);
  }catch (e){
    return res.status(500).json({error : e.message});
  }

// PROJECT ID -> 67223760-6424-46f8-8c84-3121259ae217
// PRIVATE KEY -> "6b220380-e42f-450e-a9af-d5f7e84dbd06"
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);