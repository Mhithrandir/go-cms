import { BasicTable } from "./basic-table";
import { TopicMessage } from "./topic-message";
import { User } from "./user";

export class Topic extends BasicTable {
    public Title!: string;
    public Icon!: string;
    public Closed!: boolean;
    public IDAuthor!: number;
    public Author!: User;
    Messages!: Array<TopicMessage>;
    public Open!: boolean;
}