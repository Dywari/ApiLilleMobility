import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config({
  path: require('path').resolve(__dirname, './../../.env'),
});
import { DataSourceOptions } from 'typeorm';
import { User } from '../model/user/user.entity';

class ConfigService {
  constructor(
    private env: {
      [k: string]: string | undefined;
    }
  ) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key] ?? '';
    console.log(value);
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions | DataSourceOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: [User],
      migrations: [__dirname + '/migration/**/*.ts'],
      migrationsTableName: 'migration',
      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues(['POSTGRES_HOST', 'POSTGRES_PORT', 'POSTGRES_USER', 'POSTGRES_PASSWORD', 'POSTGRES_DATABASE']);
export { configService };
