import { exec } from 'child_process';

export default async function handler(req, res) {
  const { code } = req.body;

  exec(`node -e "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
    if (error) {
      res.status(200).json({ error: stderr });
    } else {
      res.status(200).json({ output: stdout });
    }
  });
}
