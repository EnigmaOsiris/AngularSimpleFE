import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from '../../services/global';
//import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_tittle: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.jpeg",
    maxSize: "20",
    uploadAPI: {
      url: Global.url + 'upload_imagen'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Cargar imagen...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_tittle = "Editar Articulo";
    this.url=Global.url;
  }
  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {    
    alert("hola");
    console.log("onSubmit" + JSON.stringify(this.article));
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        alert("hay respuesta");
        if (response.status == 'success') {
          alert("hay respuesta: "+response.article);
          this.status = 'success';
          this.article = response.article;
          console.log("hola: "+this.article);  
          // swal(
          //   'Articulo Actualizado',
          //   'El Articulo a sido Actualizado!!!',
          //   'success'
          // );        
          this._router.navigate(['/blog/articulo',this.article._id]);
        } else {
          alert("error1");
          this.status = 'error';
        }
      }, error => {
        alert("error2");
        this.status = 'error'
      }
    )
  }

  imageUpload(data) {
    console.log("imageUpload");

    let image_data = JSON.parse(data.response);

    alert(image_data);
    this.article.image = image_data.image;
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
