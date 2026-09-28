import fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';


const app = express();
app.use(express.json());
try {
  const files = await fs.readdir("./routes");

  for (const file of files) {
    const route = (await import(path.join(import.meta.dirname, `routes/${file}`))).default;
    app.get(route.path, route.action);
  }
} catch (error) {
    console.error('Error reading directory:', error);
}
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
export default app;
