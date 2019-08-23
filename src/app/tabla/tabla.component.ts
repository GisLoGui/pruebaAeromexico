import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Elementos {
  id: number;
  nombre: string;
  apellido: string;
  tipoVuelo: string;
  servicio: string;
  noVuelo: number;



}

const ELEMENT_DATA: Elementos[] = [
  {id: 1,nombre: 'Berenice', apellido: 'Perez', tipoVuelo: 'Sencillo', servicio: 'Completo', noVuelo: 1239},
  {id: 1,nombre: 'Pedro', apellido: 'Higareda', tipoVuelo: 'Redondo', servicio: 'Premium', noVuelo: 877},
  {id: 1,nombre: 'Carlos', apellido: 'Lopez', tipoVuelo: 'Redondo', servicio: 'Premium', noVuelo: 753},
  {id: 1,nombre: 'Laura', apellido: 'Barona', tipoVuelo: 'Redondo', servicio: 'Premium', noVuelo: 8754},
  {id: 1,nombre: 'Maria', apellido: 'Blanco', tipoVuelo: 'Sencillo', servicio: 'Premium', noVuelo: 4444},
  {id: 1,nombre: 'Esmeralda', apellido: 'Vega', tipoVuelo: 'Sencillo', servicio: 'Sencillo', noVuelo: 642},
  {id: 1,nombre: 'Raquel', apellido: 'Fernandez', tipoVuelo: 'Sencillo', servicio: 'Premium', noVuelo: 6544},
  {id: 1,nombre: 'Graciela', apellido: 'Fuentes', tipoVuelo: 'Redondo', servicio: 'Premium', noVuelo: 653},
  {id: 1,nombre: 'Adrian', apellido: 'Rodriguez', tipoVuelo: 'Sencillo', servicio: 'Completo', noVuelo: 755},
  {id: 1,nombre: 'Luis', apellido: 'Ruiz', tipoVuelo: 'Redondo', servicio: 'Sencillo', noVuelo: 779},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: 'tabla.component.html'})
export class TablaComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'tipoVuelo', 'servicio', 'noVuelo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
