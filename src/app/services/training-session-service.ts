import { HttpClient } from "@angular/common/http";
import { SessionDTO } from "../model/model";
import { Observable, lastValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainingSessionService {

    constructor(private httpClient: HttpClient) {}

    getAllSessions(): Promise<SessionDTO[]>  {

        return lastValueFrom(this.httpClient.get<SessionDTO[]>("http://localhost:8080/session/all"));

    }

}