import { BasicTable } from "./basic-table";
import { UserType } from "./user-type";

export class User extends BasicTable {
    public Username!: string;
	public Password!: string;
	public LastLogin!: Date;
	public DatePassword!: Date;
	public PasswordDuration!: number;
	public IDUserType!: number;
	public CodeResetPassword!: string;
	public IsPasswordExpired!: boolean;
	public UserType!: UserType;
}