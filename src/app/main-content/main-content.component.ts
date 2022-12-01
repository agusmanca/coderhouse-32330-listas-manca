import { Component, OnInit } from '@angular/core';
import { Alumno } from './model/alumno-model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public alumnos: Array<Alumno> = [
                                      {
                                          nombre: "Agustin",
                                          apellido: "Test",
                                          edad: 33,
                                          fechaNacimiento: new Date('1989-01-19'),
                                          pais: "Argentina"
                                      },
                                      {
                                          nombre: "John",
                                          apellido: "Doe",
                                          edad: 25,
                                          fechaNacimiento: new Date('1998-07-04'),
                                          pais: "Estados Unidos"
                                      },  
                                      {
                                          nombre: "Leonel",
                                          apellido: "Messi",
                                          edad: 34,
                                          fechaNacimiento: new Date('1987-06-24'),
                                          pais: "Argentina"
                                      },  
                                      {
                                          nombre: "Carlos",
                                          apellido: "Gomez",
                                          edad: 28,
                                          fechaNacimiento:  new Date('1995-02-12'),
                                          pais: "Mexico"
                                      },  
                                      {
                                          nombre: "Ricardo",
                                          apellido: "Guemes",
                                          edad: 40,
                                          fechaNacimiento: new Date('1983-04-27'),
                                          pais: "Peru"
                                      },
                                      {
                                        nombre: "Jack",
                                        apellido: "Sparrow",
                                        edad: 40,
                                        fechaNacimiento: new Date('1983-04-27'),
                                        pais: "Bahamas"
                                      }
                                  ]

  public banderas: any = {
                            argentina: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png',
                            estadosUnidos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
                            mexico: 'https://s1.thingpic.com/images/Gk/bjHCMGpAzCSCauUh1n3e97dU.gif',
                            peru: 'https://www.banderasdelmundo.net/wp-content/uploads/2019/08/bandera-del-peru.jpg',
                            default: 'https://http2.mlstatic.com/D_NQ_NP_837465-MLA31576186983_072019-O.jpg'
                         }                          

  constructor() { }

  ngOnInit(): void {
    console.log(this.alumnos);
  }

}
