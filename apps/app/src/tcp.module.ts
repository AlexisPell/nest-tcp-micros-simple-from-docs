import { ClientsModule, Transport } from '@nestjs/microservices';
import { DynamicModule, Module } from '@nestjs/common';

interface TcpModuleOptions {
  name: string;
}

@Module({})
export class TcpModule {
  static register({ name }: TcpModuleOptions): DynamicModule {
    return {
      module: TcpModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            // HARDCODED TO SIMPIFY
            useFactory: () => ({
              transport: Transport.TCP,
              options: {
                host: '127.0.0.1',
                port: 3001,
              },
            }),
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
