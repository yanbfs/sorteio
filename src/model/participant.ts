export default class Participant{
    constructor(readonly name:string, readonly email:string){

    }
    get maskedEmail(){
        const regex = /(.{1,3})(.*)(@.*)/
        return this.email.replace(regex, (_,g1,g2,g3)=>{
            return g1 + '***' + g3
        })
    }

    toString(): string {
        return `${this.name} <${this.maskedEmail}>`
    }
}