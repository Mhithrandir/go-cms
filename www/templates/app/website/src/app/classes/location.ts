import { BasicTable } from "./basic-table";

export class Location extends BasicTable {
    public Name!: string;
    public Description!: string;
    public Image!: string;
    public X!: number;
    public Y!: number;
    public IDParent!: number;
    public HasChat!: boolean;
    public Childrens!: Array<Location>;
}