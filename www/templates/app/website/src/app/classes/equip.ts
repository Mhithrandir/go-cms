import { BasicTable } from "./basic-table";
import { EquipType } from "./equip-type";

export class Equip extends BasicTable {
    public Name!: string;
    public Icon!: string;
    public Description!: string;
    public Price!: number;
    public Size!: number;
    public Type!: EquipType;
}