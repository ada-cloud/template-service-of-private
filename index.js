const Service = require("cloud-boot/service");

const service = new Service();
service.on('started', () => {
});
service.startup();