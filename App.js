import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckLists from './components/DeckLists'
import Deck from './components/Deck'
import Question from './components/Question'
import { purple, black, white, red } from './utils/colors'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'

CustomStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  DeckLists: {
    screen: DeckLists,
    navigationOptions: {
      tabBarLabel: 'DECK',
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'ADD DECK'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: white,
    labelStyle: {
      fontSize: 20,
      paddingBottom: 8,
      fontWeight: 'bold',
    }
  }
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  Deck: {
    screen: Deck
  },
  Question: {
    screen: Question
  }
}, {
  navigationOptions: {
    headerTintColor: white,
    headerTitleStyle: {
      fontSize: 24,
    }
  },
  cardStyle: {
    backgroundColor: black
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <Stack />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: red,
  },
});

