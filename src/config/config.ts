import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }
  
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: this.getValue('MONGODB_HOST'),
      port: parseInt(this.getValue('MONGODB_PORT')),
      database: this.getValue('MONGODB_DATABASE'),
      ssl: this.isProduction(),
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true 
    };
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'MONGODB_HOST',
    'MONGODB_PORT',
    'MONGODB_DATABASE'
  ]);

export { configService };