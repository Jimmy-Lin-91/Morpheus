import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DreamPostScreen from './src/screens/DreamPostScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    DreamPost: DreamPostScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Morpheus',
    },
  }
);

export default createAppContainer(navigator);