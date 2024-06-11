import {Message} from "@/src/model/user.model"

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?:Array<Message>;
}