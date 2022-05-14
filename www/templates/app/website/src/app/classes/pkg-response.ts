export class PkgResponse {
    constructor(obj: any) {
        this.Data = obj.Data as Array<any>;
        this.Page = obj.Page as number;
        this.PageCount = obj.PageCount as number;
    }
    public Data!: Array<any> | any;
    public Page!: number;
    public PageCount!: number;
}