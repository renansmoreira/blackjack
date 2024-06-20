/** @returns {Promise<import('jest').Config>} */
export default async () => {
  return {
    verbose: true,
    transform: {},
    rootDir: './src'
  };
};