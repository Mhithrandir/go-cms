import { BasicTable } from "./basic-table";
import { Route } from "./route";

export class EditorElement extends BasicTable {
    public IDElement!: string;
    public Type!: string;
    public Childrens!: Array<EditorElement>;
    public Columns!: number;
    public VerticalOrientation!: boolean;
    public Content!: string | ArrayBuffer | null;
    public ImageName!: string;
    public IsClass!: boolean;
    public ShowTitle!: boolean;
    public IDParent!: number;
    public IDRoute!: number;
    public Route!: Route;
    public Selected!: boolean;

    public ClearSelected() {
        this.Selected = false;
        this.Childrens.forEach((c: EditorElement) => {
          c.ClearSelected();
        });
    }
}