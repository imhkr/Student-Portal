import { Entity } from "./Entity";
import { User } from "./User";

export interface Group extends Entity {
    name: string;
    description: string;
    group_image_url: string;
    created_at: Date;
    updated_at: Date;
    chatCount: number;
    state: State | undefined;
    creator?: User | null;
    issues: any[];
    invitedMembers: User[];
}
export interface State {
    created_at: string;
    state_code: string;
    title: string;
    updated_at: string;
}