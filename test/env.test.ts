import { test } from 'vitest'

test('env', () => {
  const privateKey = process.env.VITE_PRIVATE_KEY;
  console.log('privateKey', privateKey);
})