import { SetMetadata } from '@nestjs/common'

export const Hosts = (...hosts: string[]) => SetMetadata('hosts', hosts)
export const IPs = (...ips: string[]) => SetMetadata('ips', ips)