import { Injectable } from '@angular/core';
import { Mapper } from '../../../../core/interface/mapper';
import { UserSessionEntity } from '../../../../domain/entities/user-session.entity';
import { UserDTO } from '../../../datasources/remote/dto/user.dto';

@Injectable()
export class UserDtoToEntity extends Mapper<UserDTO, UserSessionEntity> {
  override mapFrom(UserDTO: UserDTO): UserSessionEntity {
    return {
      id: UserDTO.id,
      username: UserDTO.username,
      image: UserDTO.image,
      accessToken: UserDTO.accessToken,
      refreshToken: UserDTO.refreshToken,
    };
  }
  override mapTo(session: UserSessionEntity): UserDTO {
    throw new Error('AuthDtoToEntity.mapTo no está soportad');
  }
}
