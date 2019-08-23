import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material'  
import { GridModule, GridAllModule } from '@syncfusion/ej2-ng-grids';

import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

// used to create fake backend
import { fakeBackendProvider } from '../_helpers';

// import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from '../_helpers';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { TablaComponent } from '../tabla';
import { Routes, RouterModule } from '@angular/router';

 
@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        BrowserModule,
        GridModule,
        MatTableModule,
        RouterModule,
        BrowserModule,
        GridModule,
        GridAllModule,
    ],
    exports: [RouterModule],
    declarations: [
        // AppComponent,
        HomeComponent,
        LoginComponent,
        TablaComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        PageService, SortService, FilterService, GroupService, FilterService, PageService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    // bootstrap: [AppComponent]
})

export class AppModule { }