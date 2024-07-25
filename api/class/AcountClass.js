//Obtener cuenta  
//Obtener cuentas
//Editar balance 
//Crear cuenta 
import AccountModel from "../models/AccountModel.js"; 
class ManagerAccount{
    constructor(userid, accountNumber, acountType, balance){
        this.userid = userId;
        this.accountNumber = accountNumber;
        this.accountType = acountType;
        this.balance = balance;
    }
    async getAccounts(){
        try {   
            const accounts =  await AccountModel.find;
        }
         catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);

        }
    }
    async getAccount(Id){
        try{
            const account = await AccountModel.findById(Id);
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`); 
        }
    }
    async restBalance(Id, amount){
        try {
            this. balance += amount;
            await AccountModel.findByIdAndUpdate(Id,{
                $set:{
                    balance: this.balance 
                }
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`); 
        }

    }
    async addBalance(Id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(Id,{
                $set:{
                    balance: this.balance 
                }
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`); 
        }
    }
        async createAccount(){
            try { 
                await AccountModel.create({
                    userId: this.userId,
                    accountNumber: this.accountNumber,
                    accountType: this.accountType,
                    balance: this.balance 
                });
                return "ok"
            } catch (error){
                throw new Error(`Error al crear cuenta: ${error}`);
            
        }

    }
    
}

export default ManagerAccount;