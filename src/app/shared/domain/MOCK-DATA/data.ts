export interface Area {
    id: number,
    name: string
}

export interface Season {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number
}

export interface Competition {
    id: number,
    area: Area,
    name: string,
    code: any,
    plan: string,
    currentSeason: Season,
    seasons: Season[],
    lastUpdated: string
}

