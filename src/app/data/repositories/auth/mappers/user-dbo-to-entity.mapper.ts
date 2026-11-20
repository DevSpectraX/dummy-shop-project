import { Injectable } from '@angular/core';
import { Mapper } from '../../../../core/interface/mapper';
import { UserSessionEntity } from '../../../../domain/entities/user-session.entity';
import { UserDBO } from '../../../datasources/local/dbo/user.dbo';

@Injectable()
export class UserDboToEntity extends Mapper<UserDBO, UserSessionEntity> {
  override mapFrom(UserDBO: UserDBO): UserSessionEntity {
    return {
      id: UserDBO.id,
      username: UserDBO.username,
      image: UserDBO.image,
      accessToken: UserDBO.accessToken,
      refreshToken: UserDBO.refreshToken,
    };
  }
  override mapTo(UserEntity: UserSessionEntity): UserDBO {
    return UserEntity as UserDBO;
  }
}
