import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timelineItemSelect(element: any) {
    let parentTimelineItem = element.closest('.timeline-item')

    if (parentTimelineItem.classList.contains('selected')) {
      parentTimelineItem.classList.remove('selected')
    } else {
      let timelineItems = document.getElementsByClassName('timeline-item')

      for (let i=0; i < timelineItems.length; i++) {
        timelineItems[i].classList.remove('selected')
      }

      parentTimelineItem.classList.add('selected')
      parentTimelineItem.scrollIntoView()
    }
  }
}
