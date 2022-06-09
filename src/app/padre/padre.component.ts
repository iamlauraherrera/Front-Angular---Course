import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PadreService } from './padre.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(private servicePadre:PadreService) { }

  public mensajeHijo: Array<number> = new Array<number>();
  public saludo: string | undefined;

  public isLogged: boolean = false;
  public nivel: number = 0;
 
  formUsuario = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email])
  })

 ngOnInit(): void {
   /* this.consultarUsuario(5);*/
  }

  public enviarMensaje(): void {
    this.mensajeHijo = [1,6]
  }

  public recibirSaludo($event:any) {
    //this.mensajeHijo = [1,6]
  }

  public enviarUsuario() {
    let usuario= {
      nombre: this.formUsuario.get("nombre")?.value,
      apellido: this.formUsuario.get("apellido")?.value,
      telefono: this.formUsuario.get("telefono")?.value,
      email: this.formUsuario.get("email")?.value
    }
   this.servicePadre.enviarUsuario(usuario).subscribe (respuesta=> {
     console.log(respuesta);
   });
  }
}
