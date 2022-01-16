/* eslint-disable no-extra-parens */
import { Component, OnInit } from '@angular/core'
import { CareerItem } from '../../models/career-item.model'
import { BackendApiService } from '../../services/backend-api.service'
import { Months } from '../../enums/months.enum'

@Component({
    selector: 'app-career-page',
    templateUrl: './career-page.component.html',
    styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent implements OnInit{
    public careerItems: CareerItem[] = []
    public months = Months

    constructor(private backendApiService: BackendApiService) {}

    ngOnInit(): void {
        this.getCareerItems()
    }

    getCareerItems(): void {
        this.backendApiService.getCareerItems().subscribe(result => this.careerItems = result.sort(
            (a, b) => (a.startDate < b.startDate)? 1 : ((b.startDate < a.startDate) ? -1 : 0)))
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    timelineItemSelect(element: unknown) {
        const parentTimelineItem = (element as HTMLElement).closest('.timeline-item')
        if (parentTimelineItem) {
            if (parentTimelineItem.classList.contains('selected')) {
                parentTimelineItem.classList.remove('selected')
            } else {
                const timelineItems = document.getElementsByClassName('timeline-item')

                for (let i = 0; i < timelineItems.length; i++) {
                    timelineItems[i].classList.remove('selected')
                }

                parentTimelineItem.classList.add('selected')
                parentTimelineItem.scrollIntoView()
            }
        }
    }
}
