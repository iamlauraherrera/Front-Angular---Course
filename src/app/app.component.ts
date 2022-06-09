import { Component } from '@angular/core';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public names: string[] = ["Laura"," Maria"," Juan"]; /*Typescript*/
  public nombres2: string [] = ["Camilo", " Hugo"];

  public listUsuarios : Usuario[] = [];

  public propertyBinding : string = "Mensaje";

  public activedButton: boolean = true;

  public imagenURL: string = "https://placeimg.com/400/200/any";
  constructor(){
    this.activedButton
    /*this.addFirstElement("Nombres");
    this.addLastElement("Marcela");
    this.deleteFirstElement();
    this.deleteFirstElement();
    this.deleteLastElement();
    this.names = this.concat(this.nombres2);
    console.log(this.names);
    console.log(this.names.indexOf('Maria'));
    console.log(this.names.splice(this.names.indexOf('Maria'),1));
    -----------------CREACION DE USUARIOS --------------------*/
    let usuario1: Usuario = new Usuario;
    usuario1.edad = 20;
    usuario1.idUsuario = 1;
    usuario1.estado = true;
    usuario1.nombre = "Carlos";    

    let usuario2: Usuario = new Usuario;
    usuario2.edad = 20;
    usuario2.idUsuario = 2;
    usuario2.estado = false;
    usuario2.nombre = "Mariana";
    
    this.listUsuarios.push(usuario1);
    this.listUsuarios.push(usuario2);
    console.log(this.listUsuarios);
    this.eliminarPorId(1);

  }
/*----------FUNCION QUE ELIMINA USUARIO POR ID-------------*/ 
  public eliminarPorId(id: number) :void {
    for(const iterator of this.listUsuarios){
      if(iterator.idUsuario === id){
        this.listUsuarios.splice(this.listUsuarios.indexOf(iterator),1);
      }

    }
  }
  /*----------------PERMITE GENERAR UNA ANIMACION ---------*/
  public mostrarEvento(event:any):void{
    console.log(event);
  }
  /*----------------PERMITE DESACTIVAR O ACTIVAR UN BOTON ---------*/
  public desactivarBoton(data: boolean): void {
    console.log(data);
  }

  public addFirstElement(name: string): void{
    this.names.unshift(name);
  }

  public addLastElement(name: string): void{
    this.names.push(name);
  }

  public deleteFirstElement(): void{
    let respuesta = this.names.shift();
    console.log("Se elimino el valor de " + respuesta)
  }

  public deleteLastElement(): void{
    let respuesta2 = this.names.pop();
    console.log("Se elimino el ultimo elemento " + respuesta2)
  }

  public concat(array: string[]): string[]{
    return this.names.concat(array);    
  }
}
