export class Dictionary<T> {
    private _keys!: Array<string>;
    private _values!: Array<T>;

    constructor() {
        this._keys = new Array<string>();
        this._values = new Array<T>();
    }
    add(key: string, value: T) {
        if(this.containsKey(key)) {
            throw new Error("Key already exist");
        }
        this._keys.push(key);
        this._values.push(value);
    }
    remove(key: string) {
        if(!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        let index = this._keys.indexOf(key);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    }
    keys(): string[] {
        return this._keys;
    }
    values(): T[] {
        return this._values;
    }
    containsKey(key: string) {
        return (this._keys.indexOf(key) != -1);
    }
    get(key: string): T {
        if(!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        return this._values[this._keys.indexOf(key)];
    }
    set(key: string, value: T) {
        if(!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        this._values[this._keys.indexOf(key)] = value;
    }
}