import { fileURLToPath, URL } from 'node:url';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import swcPlugin from '@vitejs/plugin-react-swc';
import child_process from 'child_process';
import fs from 'fs';
import path from 'path';
import { env } from 'process';
import { defineConfig } from 'vite';

const baseFolder =
  env.APPDATA !== undefined && env.APPDATA !== ''
    ? `${env.APPDATA}/ASP.NET/https`
    : `${env.HOME}/.aspnet/https`;

const certificateName = 'plantthing.client';
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true });
}

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (
    0 !==
    child_process.spawnSync(
      'dotnet',
      [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
      ],
      { stdio: 'inherit' },
    ).status
  ) {
    throw new Error('Could not create certificate.');
  }
}

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(';')[0]
    : 'https://localhost:7283';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    swcPlugin(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
  ],
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@providers': fileURLToPath(new URL('./src/providers', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/api': {
        target,
        secure: false,
      },
    },
    port: 27686,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
  },
});
