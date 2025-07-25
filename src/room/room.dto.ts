import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class createRoomDto {
  @IsNumber()
  boosId: number;

  @IsNumber()
  myPoketmonId: number;
}

export class CreateRoomDto {

  @IsString()
  @IsNotEmpty()
  roomName: string;

  @IsString()
  @IsNotEmpty()
  roomLevel: string;

  @IsString()
  @IsNotEmpty()
  usePoketmonId: string;
}

export class JoinRoomDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsNumber()
  myPoketmonId: number;
}

export class LeaveRoomDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;
}

export class TestRoomDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
