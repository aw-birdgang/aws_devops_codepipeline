import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const envFile =
      process.env.NODE_ENV === 'prod'
        ? 'env.prod'
        : process.env.NODE_ENV === 'dev'
        ? 'env.dev'
        : '.env';
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    const address = this.get('ADDRESS');
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  isEnv(env: string): boolean {
    return this.nodeEnv === env;
  }

  get nodeEnv(): string {
    return process.env.NODE_ENV || 'dev';
  }
}
