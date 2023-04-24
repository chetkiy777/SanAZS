import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import Bell from './images/svg/Bell';
import Menu from './images/svg/Menu';
import Logo from './images/svg/Logo';
import CustomButton from './components/CustomButton';
import Percent from './images/svg/Percent';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/bg1.png')} style={styles.image}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Bell />
            
          </TouchableOpacity>

          <Logo />

          <TouchableOpacity>
            <Menu />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Image source={require('./images/prom.jpg')}/>
        </View>

        <Text style={styles.title} >Слідкуй за знижками</Text>

        <TouchableOpacity style={styles.widthBtn}>
          <Text style={styles.btnTitle}>Отримати персональну знижку</Text>
        </TouchableOpacity>

        <View style={styles.horizontalBtn}>
          <TouchableOpacity style={styles.horizBtn}><Text style={styles.btnTitle}>Придбати пальне</Text></TouchableOpacity>
          <TouchableOpacity style={styles.horizBtn}><Text style={styles.btnTitle}>Ціни на    пальне</Text></TouchableOpacity>
        </View>

        <Text style={styles.title}>Паливна картка</Text>

        <TouchableOpacity style={styles.widthBtn}>
          <Text style={styles.btnTitle}>1205.80 грн</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Карта АЗК САН</Text>



      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: 22,
    marginTop: 18
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hero: {
    marginTop: 18
  },
  title: {
    marginTop: 18,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 19,
    color: '#303030',
  },
  horizontalBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  widthBtn: {
    height: 60,
    backgroundColor: "#FCFFFE",
    borderRadius: 15,
    border: '1px solid #FCFFFE',
    boxShadow: '0px 4px 10px rgba(38, 38, 38, 0.07), inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
    marginTop: 18,
    justifyContent: 'center',
  },
  horizBtn: {
    height: 60,
    width: 160,
    backgroundColor: "#FCFFFE",
    borderRadius: 15,
    justifyContent: 'center',
    border: '1px solid #FCFFFE',
    boxShadow: '0px 4px 10px rgba(38, 38, 38, 0.07), inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#303030',
    marginLeft: 19,
    marginLeft: 50
}

});
