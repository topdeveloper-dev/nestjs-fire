import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'
import { includes as _includes } from 'lodash'
@Injectable()
export class BlackListGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const hosts = this.reflector.get<string[]>('hosts', context.getHandler()) || this.reflector.get<string[]>('hosts', context.getClass())
    const ips = this.reflector.get<string[]>('ips', context.getHandler()) || this.reflector.get<string[]>('ips', context.getClass())
    if (!hosts && !ips) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const host = request.hostname
    const ip = request.ip
    return !_includes(hosts, host) && !_includes(ips, ip) 
  }
}