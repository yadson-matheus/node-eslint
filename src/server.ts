class User {
    private _id: number = null
    private _name = ""
    private _birthday: Date = null

    constructor(id: number, name: string, birthday: Date) {
        this._id = id
        this._name = name
        this._birthday = birthday
    }

    set id(id: number) {
        this._id = id
    }

    get id(): number {
        return this._id
    }

    set name(name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set birthday(birthday: Date) {
        this._birthday = birthday
    }

    get birthday(): Date {
        return this._birthday
    }

    toString(): string {
        return (
            `User: {` +
            `\n\tprivate _id: ${this._id}` +
            `\n\tprivate _name: ${this._name}` +
            `\n\tprivate _birthday: ${this._birthday}` +
            `\n}`
        )
    }
}

const birthday = new Date(1998, 2, 27)

const user = new User(1, "Yadson Matheus", birthday)

user.name = "Yadson M. Ribeiro"

console.log(user.toString())
