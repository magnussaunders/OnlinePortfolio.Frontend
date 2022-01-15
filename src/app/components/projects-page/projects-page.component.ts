import { Component, OnInit } from '@angular/core'
import { BackendApiService } from '../../services/backend-api.service'
import { Project } from '../../models/project.model'

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
    public projects: Project[] = []
    public featuredProjects: Project[] = []
    public moreProjects: Project[] = []

    constructor(private backendApiService: BackendApiService) {}

    ngOnInit(): void {
        this.getProjects()
        this.getFeaturedProjects()
        this.getMoreProjects()
    }

    getProjects(): void {
        this.backendApiService.getProjects().subscribe(result => this.projects = result)
    }

    getFeaturedProjects(): void {
        this.backendApiService.getFeaturedProjects().subscribe(result => this.featuredProjects = result)
    }

    getMoreProjects(): void {
        this.moreProjects = this.projects.filter(projectToRemove => !this.featuredProjects.includes(projectToRemove))
    }
}
