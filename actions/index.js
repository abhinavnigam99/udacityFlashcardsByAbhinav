export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'

export function addCard(deckid, question, answer) {
    return {
        type: ADD_CARD,
        deckid,
        question,
        answer
    }
}

export function addDeck(deckid, deck) {
    return {
        type: ADD_DECK,
        deckid,
        deck
    }
}

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}