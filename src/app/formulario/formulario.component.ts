import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AlertService, UserService, AuthenticationService } from '../_services';
@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: 'formulario.component.html'})
export class FormularioComponent implements OnInit {
    formularioForm: FormGroup;
    loading = false;
    submitted = false;
    private subscription: Subscription;
    message: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.formularioForm = this.formBuilder.group({
            firstNamePasajero: ['', Validators.required],
            lastNamePasajero: ['', Validators.required],
            origin: ['', Validators.required],
            destination: ['', Validators.required]
        });

        this.formularioForm = new FormGroup({
            nombrePasajero: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
            apellidoPasajero: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
            origen: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
            destino: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
          });


          this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }

   get namePasajero() {
    return this.formularioForm.get('nombrePasajero');
    } 

    get lastNAmePasajero() {
        return this.formularioForm.get('apellidoPasajero');
    } 

    get origin() {
        return this.formularioForm.get('origen');
        } 
    
        get destination() {
            return this.formularioForm.get('destino');
        } 

    // convenience getter for easy access to form fields
    get f() { return this.formularioForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formularioForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.formularioForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/']);
                });
    }
}