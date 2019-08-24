module.exports = {
  name: "app-service-template-inner",
  source: "./src",
  output: "./dist",
  main: './index.js',
  server: "http://localhost:6110",
  cloudHub: "http://localhost:6080?username=test&password=123456",
  generate: {}
};