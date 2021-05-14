import { Injectable } from '@nestjs/common';
import { Message } from '@gifts-lists-nx/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
