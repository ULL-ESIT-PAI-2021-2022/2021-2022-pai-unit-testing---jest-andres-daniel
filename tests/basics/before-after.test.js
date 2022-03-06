/**
 * Methods to manage expensive resources and avoid repetition.
 * https://jestjs.io/docs/setup-teardown
 * Trace example:
 * Connect to database
 * 
 *    Populate database
 *        Testing my awesome database
 *    Clear database
 * 
 *    Populate database
 *        Yet another test
 *    Clear database
 * 
 * Close database connection
 */

describe('Setup and Teardown', () => {
  beforeAll(() => {
    console.log('Connect to database');
  });

  afterAll(() => {
    console.log('Close database connection');
  });

  beforeEach(() => {
    console.log('Populate database');
  });

  afterEach(() => {
    console.log('Clear database');
  });

  test('Testing my awesome database', () => {
    console.log('Testing my awesome database');
  });

  test('Yet another test', () => {
    console.log('Yet another test');
  });
});