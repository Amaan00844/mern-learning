export default async function handler(req, res) {
    const { code } = req.body;
  
    try {
      const express = require('express');
      const app = express();
      let output = '';
  
      eval(code); // DANGEROUS: in real app, use safe sandbox
  
      app.listen(3001, () => {
        output = 'Express server simulated!';
        res.status(200).json({ output });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  