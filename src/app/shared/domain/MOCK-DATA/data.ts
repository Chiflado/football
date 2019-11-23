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
    halfTimeHome: number;
    halfTimeAway: number;
    currentMinute?: number;
}

interface Team {
    id: number,
    name: string,
    coach: Coach,
    captain: Player,
    lineup: Player[],
    bench: Player[]
}

interface Coach {
    id: number,
    name: string,
    countryOfBirth: string,
    nationality: string
}

interface Player {
    id: number,
    name: string,
    position?: string,
    shirtNumber: number
}

interface Goal {
    minute: number,
    extraTime: number,
    type: string,
    team: {
        id: number,
        name: string
    },
    scorer: {
        id: number,
        name: string
    },
    assist: {
        id: number,
        name: string
    }
}

interface Booking {
    minute: number,
    team: {
        id: number,
        name: string
    },
    player: {
        id: number,
        name: string
    },
    card: string
}

interface Substitution {
    minute: number,
    team: {
        id: number,
        name: string
    },
    playerOut: {
        id: number,
        name: string
    },
    playerIn: {
        id: number,
        name: string
    }
}

interface Referee {
    id: number,
    name: string,
    nationality: string
}


export interface MatchData {
    head2head: {
        numberOfMatches: number,
        totalGoals: number,
        homeTeam: {
            wins: number,
            draws: number,
            losses: number
        },
        awayTeam: {
            wins: number,
            draws: number,
            losses: number
        }
    },
    match: {
        id: number,
        competition: {
            id: number,
            name: string
        },
        season: {
            id: number,
            startDate: string,
            endDate: string,
            currentMatchday: number,
            availableStages: string[]
        },
        utcDate: string,
        status: string,
        minute: number,
        attendance: number,
        venue: string,
        matchday: number,
        stage: string,
        group: string,
        lastUpdated: string,
        homeTeam: Team,
        awayTeam: Team,
        score: {
            winner: string,
            duration: string,
            fullTime: {
                homeTeam: number,
                awayTeam: number
            },
            halfTime: {
                homeTeam: number,
                awayTeam: number
            },
            extraTime: {
                homeTeam: number,
                awayTeam: number
            },
            penalties: {
                homeTeam: number,
                awayTeam: number
            }
        },
        goals: Goal[],
        bookings: Booking[],
        substitutions: Substitution[],
        referees:  Referee[]
    }
}

