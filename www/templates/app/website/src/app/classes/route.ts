import { BasicTable } from "./basic-table";
import { RoutePermission } from "./route-permission";

export class Route extends BasicTable {
    public Package!: string;
    public Func!: string;
    public Type!: string;
    public Permissions!: Array<RoutePermission>;
    public Path!: string;
    public Methods!: string;
}