import { BasicTable } from "./basic-table";
import { Route } from "./route";

export class SiteComponent extends BasicTable {
    public Name!: string;
    public Content!: string;
    public IDRoute!: number;
    public Route!: Route;
}