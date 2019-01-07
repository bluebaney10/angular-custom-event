import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-custom-event';
  
  /*
  agreed=0;
  disagreed=0;
  voters=['Me','You','Him']

  onVoted(agreed:boolean){
    agreed? this.agreed++:this.disagreed++
  }
  */
 count:number=0;

 onClickCountLocal(){
  this.count=this.count+1;

}
 
  onChangedCount1(countValue){
    this.count=countValue;

 }
}
