//importar los modulos
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes a los q van a tener una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PageComponent } from './components/page/page.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import {  ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

//array de rutas
const appRoutes : Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'blog/articulo/:id',component:ArticleComponent},
    {path:'blog/editar/:id',component:ArticleEditComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'buscar/:search',component:SearchComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'blog/create',component:ArticleNewComponent},
    {path:'pageTest',component:PageComponent},
    {path:'pageTest/:nombre/:apellidos',component:PageComponent},
    {path:'**',component:NotFoundComponent}
];

//export modulo rutas
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);