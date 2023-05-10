import { Controller } from '@nestjs/common';

@Controller('configurator')
export class ConfiguratorController {
  serialize(path: NonNullable<unknown>) {
    return undefined;
  }
  deserialize(s: string) {
    return undefined;
  }
}
