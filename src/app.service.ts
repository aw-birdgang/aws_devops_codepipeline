import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'DEVOPS, CI&CD DEPLOY FROM ECS';
  }
}
