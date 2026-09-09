export interface CustomerCardTypes {
    id: number,
    title: string,
    description: string,
    customer: string,
    priority: 'HIGH' | 'MEDIUM' | 'LOW' | 'URGENT',
    status: "OPEN" | "IN PROGRESS" | "CLOSED" | "RESOLVED",
    createdAt: string
}