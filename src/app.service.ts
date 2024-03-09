import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllUsers(): string {
    return 'Getting all users!';
  }
}
