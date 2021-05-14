import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem:ElementRef){
    // this.elem.nativeElement.style.textDecoration='line-through';
    // this.elem.nativeElement.style.color='white';
    // this.elem.nativeElement.style.textTransform='uppercase';
  }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
    // this.elem.nativeElement.getElementById(`${i}`).style.textDecoration='line-through'; //picks id
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }



  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
    // this.elem.nativeElement.style.color='white';
    // this.elem.nativeElement.getElementById(`${i}`).style.textDecoration='line-through'; 
  }
  

}