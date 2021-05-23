const { createUpwardServer } = require('@magento/upward-js');

async function serve() {
  await createUpwardServer({
    port: 3000,
    bindLocal: true,
    logUrl: true,
    upwardPath: './upward.yml',
    env: {
      MAGENTO_BACKEND_URL: 'https://venia-develop-ccewfjy-mfwmkrjfqvbjk.us-4.magentosite.cloud/',
      NODE_ENV: 'production'
    }
  });
}

serve();