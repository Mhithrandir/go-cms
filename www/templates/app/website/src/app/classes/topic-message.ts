import { BasicTable } from "./basic-table";
import { User } from "./user";

export class TopicMessage extends BasicTable {
    public Message!:  string;
	public IDParent!: number;
	public IDAuthor!: number;
    public Author!: User;
}