"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const lodash_1 = require("lodash");
let BlackListGuard = class BlackListGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const hosts = this.reflector.get('hosts', context.getHandler()) || this.reflector.get('hosts', context.getClass());
        const ips = this.reflector.get('ips', context.getHandler()) || this.reflector.get('ips', context.getClass());
        if (!hosts && !ips) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const host = request.hostname;
        const ip = request.ip;
        return !lodash_1.includes(hosts, host) && !lodash_1.includes(ips, ip);
    }
};
BlackListGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector])
], BlackListGuard);
exports.BlackListGuard = BlackListGuard;
