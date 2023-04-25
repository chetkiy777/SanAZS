import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import MapScreen from './components/MapScreen';
import Bell from './images/svg/Bell';
import MenuSVG from './images/svg/MenuSVG';
import Logo from './images/svg/Logo';
import {DropDownMenu} from './components/DropDownMenu';
import { useState } from 'react';

export default function App() {

  let [visible, setVisible] = useState(false)

  const toggleMenu = () => {
      setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/bg1.png')} style={styles.image}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Bell />
            
          </TouchableOpacity>

          <Logo />

          <TouchableOpacity onPress={() => toggleMenu()}>
            <MenuSVG />
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

        <View style={styles.mapContainter}>
          <MapScreen />
        </View>

        <View style={[styles.menuContainer,
          {
            transform: [{translateX: visible ? 0 : 260}],
          }
        ]}>
          <DropDownMenu toggleMenu={toggleMenu}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
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
    shadowColor: 'rgba(38, 38, 38, 0.07)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#303030',
    marginLeft: 19,
    marginLeft: 50
},
  mapContainter:  {
    flex: 1,
    marginTop: 18
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  }
});
