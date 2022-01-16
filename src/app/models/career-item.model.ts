export class CareerItem {
    position: string | undefined
    employer: string | undefined
    startDate: Date = new Date('01/01/2000')
    endDate: Date = new Date('01/01/2000')
    description: string[] | undefined
    tags: string[] | undefined

    public static fromJson(jsonObj: Record<string, unknown>): CareerItem {
        const careerItem = new CareerItem()
        careerItem.position = jsonObj.position as string
        careerItem.employer = jsonObj.employer as string
        careerItem.startDate = new Date(jsonObj.startDate as string)
        careerItem.endDate = new Date(jsonObj.endDate as string)
        careerItem.description = jsonObj.description as string[]
        careerItem.tags = jsonObj.tags as string[]

        return careerItem
    }
}
