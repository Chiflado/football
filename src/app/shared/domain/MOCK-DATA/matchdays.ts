import { MatchDay } from './data'
import { eredivisieMatches, otpMatches, premierLegMatches, championsMatches } from './match-events'

const eredivisie: MatchDay = {
    currentMatchDay: 34,
    events: eredivisieMatches,
    seasonId: 4
}

const otbBank: MatchDay = {
    currentMatchDay: 33,
    events: otpMatches,
    seasonId: 3
}

const premierLeague: MatchDay = {
    currentMatchDay: 34,
    events: premierLegMatches,
    seasonId: 1
}

const championsLeague: MatchDay = {
    currentMatchDay: 6,
    events: championsMatches,
    seasonId: 2
}

export const matchDays: MatchDay[] = [eredivisie, otbBank, premierLeague, championsLeague]
