import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from '../../services/global';
// import swal from 'sweetalert';
@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_tittle: string;
  public is_edit: boolean;
  public url:string;
  

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.jpeg,.gif",
    maxSize: "50",
    uploadAPI: {
      url: Global.url+'upload_imagen'    
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select File',
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
    this.page_tittle="Crear Articulo";
    this.is_edit=false;    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //alert("hola");
    console.log("onSubmit" + JSON.stringify(this.article));
    this._articleService.create( this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;          
          console.log("hola: "+this.article);          
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      }, error => {
        this.status = 'error'
      }
    )
  }

  
  imageUpload( data ){
    console.log("imageUpload");    
    let image_data = JSON.parse(data.response);   
    //alert(image_data);
    this.article.image = image_data.image;
  }
}
