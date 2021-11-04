import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  @ViewChild('journeyItems') journeyItemsRef: any
  public journeyCurrentIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

  journeyNavigatePrevious() {
    if (this.journeyCurrentIndex === 1) {
      this.journeyCurrentIndex = 4
      document.getElementById('journey-items')!.style.transform = "translate(-99.99%, 0%)"
    } else {
      document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex - 2) * -33.33).toString() + "%, 0%)"
      this.journeyCurrentIndex = this.journeyCurrentIndex - 1
    }
  }

  journeyNavigateNext() {
    if (this.journeyCurrentIndex === 4) {
      this.journeyCurrentIndex = 1
      document.getElementById('journey-items')!.style.transform = "translate(0%, 0%)"
    } else {
      document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex) * -33.33).toString() + "%, 0%)"
      this.journeyCurrentIndex = this.journeyCurrentIndex + 1
    }
  }

  journeyNavigateTo(index: number) {
      if (index) {
        this.journeyCurrentIndex = index;
        document.getElementById('journey-items')!.style.transform = "translate(" + ((this.journeyCurrentIndex - 2) * -33.33).toString() + "%, 0%)"
      }
  }

}
