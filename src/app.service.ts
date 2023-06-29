import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Dogshouseservice.Version1.0.1';
  }
}
