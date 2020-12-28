export class user
{
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public website:string;

    constructor(id:number, name: string, username:string,email:string, phone:string, website:string)
    {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}