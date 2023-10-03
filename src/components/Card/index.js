import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native-web";


const Card = (props) => {
    return(
        <View style = {styles.container}>
            <Image source = {props.imagem} style = {styles.img} />
            <Text>{props.nome}</Text>
            <Text>Dano: {props.dmg}</Text>
            <Text>Chance de critico: {props.crt}</Text>
            <Text>Bloqueio: {props.bloq} </Text>
            <TouchableOpacity style = {styles.bttn}>
                <Text style = {{color: "white"}}>Trocar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "250px",
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        margin: "10px"
    },
    bttn: {
        backgroundColor: "blue",
        width: "80px",
        height: "40px",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "10px"

    },
    img: {
        width: "100px",
        height: "100px"
    }
})
export default Card;