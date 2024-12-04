import app from './app';
import { connectDatabase } from './config/database';

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
