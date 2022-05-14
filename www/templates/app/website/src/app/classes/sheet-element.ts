import { BasicTable } from "./basic-table";
import { SheetElementType } from "./sheet-element-type";

export class SheetElement extends BasicTable {
    public Name!: string;
    public Description!: string;
    public Icon!: string;
    public Min!:number;
    public Max!:number;
    public Cost!:number;
    public IDType!: number;
    public SheetElementType!: SheetElementType;
    public IDReferenceSheetElement!: number;
    public ReferenceSheetElement!: SheetElement;
    public AbilitatedForSheetElement!: Array<SheetElement>;
    public Enabled!: boolean;
}
export class SheetElementValue {

    constructor(element: SheetElement, value: any) {
        this.Element = element;
        this.Value = value;
    }

    public Value!: any;
    public Element!: SheetElement;
}