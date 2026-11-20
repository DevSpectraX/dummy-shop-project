import { Injectable } from '@angular/core';
import { Mapper } from '../../../../core/interface/mapper';
import { UserDBO } from '../../../datasources/local/dbo/user.dbo';
import { UserDTO } from '../../../datasources/remote/dto/user.dto';

@Injectable()
export class UserDtoToDbo extends Mapper<UserDTO, UserDBO> {
  override mapFrom(UserDTO: UserDTO): UserDBO {
    return {
      id: UserDTO.id,
      username: UserDTO.username,
      email: UserDTO.email,
      firstName: UserDTO.firstName,
      lastName: UserDTO.lastName,
      gender: UserDTO.gender,
      image: UserDTO.image,
      accessToken: UserDTO.accessToken,
      refreshToken: UserDTO.refreshToken,
    };
  }
  override mapTo(UserDBO: UserDBO): UserDTO {
    return UserDBO as UserDTO;
  }
}
