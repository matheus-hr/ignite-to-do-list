import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='#0D0D0D'
        style='light'
        hideTransitionAnimation='fade'
      ></StatusBar>
      <Home></Home>
    </>
  );
}
