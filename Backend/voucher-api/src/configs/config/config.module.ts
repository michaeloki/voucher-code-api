import { Module } from '@nestjs/common';
import { promises as fs } from 'fs';
import { ConfiguratorController } from '../../components/configurator/configurator.controller';
@Module({})
export class ConfigModule {
  private data: NonNullable<unknown>;
  constructor(private configuratorController: ConfiguratorController) {
    this.data = {};
    this.configuratorController = configuratorController;
  }

  async load(filePath) {
    try {
      this.data = this.configuratorController.deserialize(
        await fs.readFile(filePath, 'utf-8'),
      );
    } catch (e) {
      console.log('EXCEPTION is ', e);
    }
    return this.data;
  }
}
