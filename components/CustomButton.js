import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function CustomButton({title, width, img}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                
                <Text style={styles.btnTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
4

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: "#FCFFFE",
        borderRadius: 15,
        border: '1px solid #FCFFFE',
        boxShadow: '0px 4px 10px rgba(38, 38, 38, 0.07), inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
        marginTop: 18
    },
    btnTitle: {
        fontSize: 14,
        fontWeight: 600,
        color: '#303030',
        marginLeft: 19,
        marginLeft: 50
    }
})