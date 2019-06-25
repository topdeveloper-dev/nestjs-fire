"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Hosts = (...hosts) => common_1.SetMetadata('hosts', hosts);
exports.IPs = (...ips) => common_1.SetMetadata('ips', ips);
