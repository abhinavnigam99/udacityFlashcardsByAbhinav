import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, black, white } from '../utils/colors'
import { withNavigation } from 'react-navigation'

function Score(props) {
    const { correct, incorrect, restart, deck, deckId, navigation } = props

    return (
        <View style={styles.center}>
            <Text style={styles.score}>Right: {correct}</Text>
            <Text style={styles.score}>Wrong: {incorrect}</Text>
            <Text style={styles.score}>{Math.round((correct / deck.questions.length) * 100)}%</Text>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: black, marginTop: 24 }]}
                onPress={restart}
            >
                <Text style={styles.btnText}>Wanna Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: white, marginTop: 24 }]}
                onPress={() => navigation.navigate('Deck', { deckId: deckId, deckName: deck.title })}
            >
                <Text style={[styles.btnText, { color: black }]}>Go Back to DECK?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        borderColor: black,
        borderWidth: 1,
        padding: 16,
        marginTop: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    btnText: {
        color: white,
        fontSize: 16
    },
    score: {
        color: green,
        fontSize: 24,
        marginBottom: 4
    }
})

export default withNavigation(Score)