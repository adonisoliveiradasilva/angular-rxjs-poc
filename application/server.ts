import { APP_BASE_HREF } from '@angular/common';
import { renderApplication } from '@angular/platform-server';
import express, { Request, Response, NextFunction } from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server'; // <-- função de bootstrap padrão

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtmlPath = join(browserDistFolder, 'index.html');

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get('*.*', express.static(browserDistFolder, { maxAge: '1y' }));

  server.get('*', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fs = await import('node:fs/promises');
      const indexHtmlContent = await fs.readFile(indexHtmlPath, 'utf-8');

      const html = await renderApplication(bootstrap, {
        document: indexHtmlContent,
        url: req.url,
        platformProviders: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
      });

      res.send(html);
    } catch (err: unknown) {
      next(err);
    }
  });

  return server;
}

async function run(): Promise<void> {
  const port = 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  run();
}
