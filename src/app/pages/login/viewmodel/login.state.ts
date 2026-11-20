import { Injectable, signal } from "@angular/core";
import { UserSessionEntity } from "../../../domain/entities/user-session.entity";

@Injectable()
export class LoginState {

    public readonly isLoading = signal<boolean>(false);
    public readonly error = signal<string | null>(null);
    public readonly session = signal<UserSessionEntity | null>(null);



    

}