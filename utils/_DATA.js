import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'flashcardsbyabhinav:decks'

let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'React is a javascript library written by the developers at Facebook to build cleaner reusable components'
            },
            {
                question: 'What is state in React?',
                answer: 'State is an object that determines the behavior of a component'
            },
        ]
    },
    DataStructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is an array in C?',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'What is a string?',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}

export function getDecks() {
    return AsyncStorage.getItem(DECKS_KEY)
        .then(formatDecksResults)
}

export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(
        DECKS_KEY,
        JSON.stringify({
            [key]: deck
        })
    )
}

export function saveCard(key, question, answer) {
    AsyncStorage.getItem(DECKS_KEY).then((result) => {
        let data = JSON.parse(result)
        data[key].questions.push({ question: question, answer: answer })
        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(data))
    })
}