import { MongoClient } from 'mongodb';

const uri = "YOUR_MONGODB_CONNECTION_URI";

export default async function handler(req, res) {
  const { code } = req.body;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testdb');
    
    let result = eval(code); // Example: await db.collection('users').find({}).toArray()
    
    result = await result;
    res.status(200).json({ output: JSON.stringify(result, null, 2) });

  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
}
