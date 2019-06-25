
# Nestjs FireWall

FireWall guard with black or white list for NestJs.


### Installation

**Yarn**
```bash
yarn add nestjs-fire
```

**NPM**
```bash
npm install nestjs-fire --save
```

### Getting Started

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common'
import { IPs, WhiteListGuard, BlackListGuard } from 'nestjs-fire'

@IPs('127.0.0.1')
OR
@Hosts('www.xxx.com')
@UseGuards(BlackListGuard)
@Controller('')
export class TestController {

    @IPs('127.0.0.1')
    OR
    @Hosts('www.xxx.com')
    @UseGuards(BlackListGuard)
    @Get()
    root() {
        return xxx
    }
}
```
That's it!