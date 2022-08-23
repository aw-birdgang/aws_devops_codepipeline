import {Injectable, Logger} from '@nestjs/common';
import {ConfigService} from "./config";

@Injectable()
export class AppService {
  constructor(
      private readonly configureService: ConfigService,
  ) {}

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const gpContractAddress = this.configureService.get('ADDRESS');
    this.logger.log('AppService > gpContractAddress : ' + gpContractAddress);
    return 'DEVOPS, CI&CD DEPLOY FROM ECS';
  }
}
