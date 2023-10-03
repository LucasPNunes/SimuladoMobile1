import { View, StyleSheet } from "react-native-web";
import Card from "../../components/Card";

const ItemScreen = () => {
    return(
        <View style = {styles.container}>
            <Card 
            imagem = {require("../../../assets/espadagrande.png")}
            nome = {"Presa de Esclérito"}
            dmg = {165}
            crt = {"10.5%"}
            bloq = {55}
            ></Card>
            <Card 
            imagem = {require("../../../assets/espada.png")}
            nome = {"Estilete de Zander"}
            dmg = {122}
            crt = {"8.5%"}
            bloq = {35}
            ></Card>
            <Card 
            imagem = {require("../../../assets/machado.png")}
            nome = {"Cutelo"}
            dmg = {110}
            crt = {"12.5%"}
            bloq = {15}
            ></Card>
            <Card 
            imagem = {require("../../../assets/machado.png")}
            nome = {"StormBreaker"}
            dmg = {120}
            crt = {"10.5%"}
            bloq = {12}
            ></Card>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "row",
        flexWrap:'wrap'
    },
})

export default ItemScreen;