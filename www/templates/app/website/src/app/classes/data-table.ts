import { PageButton } from "./page-button";

export class DataTable {
    public Columns!: Array<DataColumn>;
    public Rows!: any;
    public ChildrenRows: boolean = false;
    public EditButton: boolean = false;
    public DeleteButton: boolean = false;
    public AddButton: boolean = false;
    public AddButtonText!: string;
    public Pagination!: Array<PageButton>;
    public ShowFilter: boolean = false;
    public Copy(): DataTable{
        let result = new DataTable();
        result.Columns = this.Columns;
        result.ChildrenRows = this.ChildrenRows;
        result.EditButton = this.EditButton;
        result.DeleteButton = this.DeleteButton;
        result.AddButton = this.AddButton;
        result.AddButtonText = this.AddButtonText;
        return result;
    }
}

export class DataColumn {
    public Description!: string;
    public Name!: string;
    public Type!: string;
    public FilterOpen!: boolean;

    constructor(name: string, type: string, desc: string = "") {
        if(desc == "") {
            this.Description = name;
        }
        else {
            this.Description = desc;
        }
        this.Name = name;
        this.Type = type;
    }
}