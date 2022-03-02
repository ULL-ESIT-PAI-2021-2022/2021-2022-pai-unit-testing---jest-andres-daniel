/**
 * Methods to manage expensive resources and avoid repetition.
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