import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AlertService, UserService, AuthenticationService } from '../_services';
@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
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
        this.registerForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required]]
        });

        this.registerForm = new FormGroup({
            nombre: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
            apellido: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){3,14}$')]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.pattern('^([a-z]){6,14}$')])
          });

          this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }

    get input() {
        return this.registerForm.get('email');
     } 

     get passwd() {
      return this.registerForm.get('password');
   } 

   get name() {
    return this.registerForm.get('nombre');
    } 

    get lastNAme() {
        return this.registerForm.get('apellido');
    } 

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}