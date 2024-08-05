//Registrarse el usuario 
//Iniciar secion
//Cerrar secion 
//Obtener informacion del usuario 
//Crear transacciones 
//Pedir prestamos 
//Borrar cuenta 
//Actualizar 

import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerAccount from "./CardClass.js";

class ManagerUser{
    constructor(
        email,
        phone,
        name,
        lastName,
        isInSession,
        isAdmin,
        password 
    ){
        this.email = email,
        this.phone = phone,
        this.name = name,
        this.lastName = lastName,
        this.isInSession = isInSession,
        this.isAdmin = isAdmin,
        this.password = password
    }
    async register(){
        const user = await UserModel.create({
            
            email: this.email,
            phone: this.phone,
            name: this.name,
            lastName: this.lastName,
            isInSession: this.isInSession,
            isAdmin : this.isAdmin,
            password : this.password
        });
        const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
        const currentAccount = await MA.createAccount();
        const MC = new ManagerCard(user._id, currentAccount_.id,"16digitos al azar","debido",
        "de la fecha actual sumar 3 años", "Generar codigo de 3 cifras","active");
        await MC.createCard();
        return user;

    } catch (error){
        throw new Error(`Error al registrar usuario: ${error}`);
    }
    async Login(email, password){
        try {
            const user = await UserModel.findOne({emai: email})
            
            if(!user) {
                throw new Error ("Usuario no registrado!")
            }
            if(user.password !== password){
                throw new Error("contraseña incorrecta!")
            }
            return "Succeded" 

        } catch (error) {
            throw new Error(`Error al iniciar secion: ${error}`);
        }
    }
        async getUserInfo(){
            try{
                const user = await UserModel.findById(id);
                return user;
            } catch (error) {
                throw new Error (`Error al obtener infromacion del usuario: ${error}`);
            }
        }
        async updateUser(email){
            try {
                if (!email) {
                    throw new Error(`Correo invalido`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set:{email:email}
                });
                return "ok"
            } catch (error) {
                throw new Error(`Error al actuslizar correo`);
            }
        }
        async updatePhone(id, phone){
            try {
                if (!email) {
                    throw new Error(`Numero de telefono invalido`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set:{phone}
                });
                return "ok"
            } catch (error) {
                throw new Error(`Error al actualizar el nuemro telefonico: ${error}`);
            }
        }
        async updatePhone(id, password){
            try {
                if (!password) {
                    throw new Error(`contraseña invalida`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set:{password}
                });
                return "ok"
            } catch (error) {
                throw new Error(`Error al actualizar la contraseña: ${error}`);
            }
         }
    //Pendiente eliminar usuario 
}

export default ManagerUser;