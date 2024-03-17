import { IsNotEmpty } from 'class-validator';
import { UserStatus } from 'src/module/users/Types/UserTypes';

export class UpdateUserStatusDTO {
  @IsNotEmpty()
  status: UserStatus;
}
