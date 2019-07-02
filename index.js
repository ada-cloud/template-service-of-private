const Service = require("ada-cloud-hub/boot/service");

const service = new Service();
service.on('started', () => {});
service.startup();