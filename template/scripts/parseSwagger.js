/* eslint-disable */
const path = require('path');

const { generateApi } = require('swagger-typescript-api');

const BASE_URL = 'PUT_BASE_URL_HERE';

generateApi({
  modular: false,
  name: 'swagger.ts',
  output: path.resolve(process.cwd(), './src/api/generated'),
  url: `${BASE_URL}/swagger/v1/swagger.json`, // NOTE need vpn connection
  toJS: false,
  httpClientType: 'axios',
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  extractRequestParams: true,
  extractRequestBody: true,
  singleHttpClient: true,
  cleanOutput: true,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
});
