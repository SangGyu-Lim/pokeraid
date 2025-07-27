import {
  Injectable
} from '@nestjs/common';
import { RedisService } from 'src/reedis/redis.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RoomService {
  constructor(
    private readonly redisService: RedisService,
    private readonly userService: UserService,
  ) {}

  async getRoom(roomId: string, eventType: string) {
    const raw = await this.redisService.getRoomMembers(roomId);
    const members = raw.map((data) => JSON.parse(data));
    await Promise.all(members.map((m) => this.userService.findByIdOrFail(m.id)));

    return {
      roomId,
      leaderId: await this.redisService.getRoomLeader(roomId),
      bossPokemonId: await this.redisService.getRoomBoss(roomId),
      members: members,
      eventType: eventType
    };
  }

  async getRooms() {
    const rooms = await this.redisService.getRooms();
    const roomIds = rooms.map((key) => key.split(':')[1]);
    return Promise.all(roomIds.map((roomId) => this.getRoom(roomId, "http")));
  }
}
