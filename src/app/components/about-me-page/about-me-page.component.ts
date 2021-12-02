import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  public journeyCurrentIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public journeyNavigatePrevious() : void{
    if (this.journeyCurrentIndex === 1) {
      this.journeyCurrentIndex = 4
      document.getElementById('journey-items')!.style.transform = "translate(-99.99%, 0%)"
    } else {
      document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex - 2) * -33.33).toString() + "%, 0%)"
      this.journeyCurrentIndex = this.journeyCurrentIndex - 1
    }
  }

  public journeyNavigateNext() : void{
    if (this.journeyCurrentIndex === 4) {
      this.journeyCurrentIndex = 1
      document.getElementById('journey-items')!.style.transform = "translate(0%, 0%)"
    } else {
      document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex) * -33.33).toString() + "%, 0%)"
      this.journeyCurrentIndex = this.journeyCurrentIndex + 1
    }
  }

  public journeyNavigateTo(index: number) :void {
      if (index) {
        this.journeyCurrentIndex = index;
        document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex - 2) * -33.33).toString() + "%, 0%)"
      }
  }

}
