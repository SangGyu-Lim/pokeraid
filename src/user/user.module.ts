import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PoketmonModule } from 'src/poketmon/poketmon.module';
import { RedisModule } from 'src/reedis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PoketmonModule, RedisModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}