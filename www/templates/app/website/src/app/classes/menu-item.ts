import { BasicTable } from "./basic-table";
import { Route } from "./route";

export class MenuItem extends BasicTable {
    
    public MenuName!: string;
    public Name!: string;
    public Parent!: number;
    public IDRoute!: number;
    public MenuOrder!: number;
    public Childrens!: Array<MenuItem>;
    public Route!: Route;
    public IsExpanded!: boolean;
    public IsActive!: boolean;
}