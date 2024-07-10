import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) { }

    public generateBearer() {
        return {
            access_token: this.jwtService.sign({ username: (Math.random() + 1).toString(36).substring(4), sub: (Math.random() + 1).toString(36).substring(5) }),
        };
    }

}
