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

export interface MatchDay {
    seasonId: number;
    currentMatchDay: number;
    events: MatchEvent[];
}

export interface MatchEvent {
    id: number;
    homeTeam: string;
    awayTeam: string;
    startDate: string;
    endDate: string;
    status: string;
    homeGoals: number;
    awayGoals: number;
    homeReds: number;
    awayReds: number;
}

