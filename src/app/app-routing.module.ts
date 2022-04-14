import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResultComponent } from "./shared/result/result.component";
import { DetailComponent } from './detail/detail.component';


const routes: Routes=[
    
    {
        path: '', component :ResultComponent, pathMatch:'full'
        
    },
    {
        path:'pelicula/:id', component:DetailComponent
    },
    {
        path:'**', redirectTo:''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule

    ]
})
export class AppRoutingModule{}