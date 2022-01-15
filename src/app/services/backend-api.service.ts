import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Project } from '../models/project.model'

const endpoint = 'http://magnus.drakneel.com/api/'

@Injectable({
    providedIn: 'root'
})
export class BackendApiService {

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return new Observable<Project[]>(observer => {
            this.http.get(endpoint + 'projects', { 'observe': 'body' }).subscribe(result => {
                const body = result as Record<string, unknown>[]
                const projects: Project[] = body.map((json: Record<string, unknown>) => Project.fromJson(json))

                observer.next(projects)
            }, error => {
                observer.error(error)
            }, () => {
                observer.complete()
            })
        })
    }

    getFeaturedProjects(): Observable<Project[]> {
        return new Observable<Project[]>(observer => {
            this.http.get(endpoint + 'projects/featured', { 'observe': 'body' }).subscribe(result => {
                const body = result as Record<string, unknown>[]
                const featuredProjects: Project[] = body.map((json:Record<string, unknown>) => Project.fromJson(json))

                observer.next(featuredProjects)
            }, error => {
                observer.error(error)

            }, () => {
                observer.complete()
            })
        })
    }
}
