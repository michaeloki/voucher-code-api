import { Injectable } from '@nestjs/common';
import { jsonStrategy } from './strategies/strategies';
import { ConfigModule } from './configs/config/config.module';
import { StrategyManager } from './context/strategyManager';

@Injectable()
export class AppService {
  appVouchers;
  jsonConfig = new ConfigModule(jsonStrategy);
  strategyManager = new StrategyManager();
  getHello(): string {
    return 'Hello World!';
  }

  async getVouchers() {
    await this.jsonConfig.load('src/assets/conf.json').then((response) => {
      const obj = JSON.parse(JSON.stringify(response));
      this.appVouchers = this.strategyManager.algorithmSelector(
        obj.name,
        obj.algorithm,
        obj.quantity,
      );
    });
    return this.appVouchers;
  }
}
