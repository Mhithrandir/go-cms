import { BasicTable } from "./basic-table";
import { CharacterValue } from "./character-value";
import { User } from "./user";

export class Character extends BasicTable {
    public Name!: string;
    public Icon!: string;
    public Surname!: string;
    public IDUser!: number;
    public Background!: string;
    public Values!: Array<CharacterValue>;
    public User!: User;
}