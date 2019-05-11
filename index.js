const Service = require("ada-cloud-boot/service");

const service = new Service();
service.on('started', () => {
});
service.startup();