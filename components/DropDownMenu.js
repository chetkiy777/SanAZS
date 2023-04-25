import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import Cabinet from '../images/svg/Cabinet.svg'
import Talons from '../images/svg/Talons.svg'
import Price from '../images/svg/Price.svg'
import Akcia from '../images/svg/Akcia.svg'
import Maps from '../images/svg/Maps.svg'
import Arrow from '../images/svg/Arrow.svg'

export const DropDownMenu = ({toggleMenu}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.btn}>
                <Cabinet />
                <Text style={styles.btnTitle}>Мій кабінет</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Talons />
                <Text style={styles.btnTitle}>Мої талони</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Price />
                <Text style={styles.btnTitle}>Ціни</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Akcia />
                <Text style={styles.btnTitle}>Акції</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Maps />
                <Text style={styles.btnTitle}>Карта АЗК</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnExit} onPress={() => toggleMenu()}>
                
                <Text style={styles.btnTitle}>Вийти</Text>
                <Arrow />
            </TouchableOpacity>
            

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00B488',
        width: 254,
        paddingTop: 148,
        paddingLeft: 22,
        height: '100%',
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
    },
    btnTitle: {
        fontSize: 18,
        fontWeight: 600,
        color: '#FCFFFE',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginBottom: 8,
        marginLeft: 22

    },
    btnExit: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 600,
        color: '#FCFFFE',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 50,
    }
})

