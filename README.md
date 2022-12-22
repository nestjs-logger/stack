# NestJS Stack Logger

Logger for using multiple logging services.

## Installation

NPM

```sh
npm install @nestjs-logger/stack
```

Yarn

```sh
yarn add @nestjs-logger/stack
```

## Usage

Anything that implements NestJS's `LoggerService` can be provided in the array.

```typescript
import { StackLogger } from '@nestjs-logger/stack';
import { MySQLLogger } from '@nestjs-logger/mysql';
import { FileLogger } from '@nestjs-logger/file';
import { ConsoleLogger } from '@nestjs/common';

const app = await NestFactory.create(AppModule, {
    logger: StackLogger.create([
        new ConsoleLogger(),
        new MySQLLogger({
            host: /* */
            port: /* */
            username: /* */
            password: /* */
            database: /* */
        }),
        new FileLogger({
            directory: /* */,
        }),
    ]),
});
```
