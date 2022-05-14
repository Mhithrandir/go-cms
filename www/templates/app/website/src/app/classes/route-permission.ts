import { BasicTable } from "./basic-table";
import { UserType } from "./user-type";

export class RoutePermission extends BasicTable {
    public IDRoute!: number;
    public IDUserType!: number;
    public Enabled!: boolean;
    public UserType!: UserType;
}