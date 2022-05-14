export class LogItem {
    constructor(element: any) {
        this.Data = element.Data;
        this.Package = element.Package;
        this.Function = element.Function;
        this.Message = element.Message;
        this.Info = element.Info;
        this.Severity = element.Severity;
        this.StackTrace = element.StackTrace.replaceAll("\n", "<br>");
    }
    public Data!: Date;
    public Package!: string;
    public Function!: string;
    public Message!: string;
    public Info!: string;
    public Severity!: number;
    public StackTrace!: string;
    public Expanded!: boolean;
}