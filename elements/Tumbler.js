import React, {useState} from 'react'; //Внешняя реализация. Выполнен плохо, можно переписать в десяток раз короче.
import { StyleSheet,ScrollView,Text,View, Switch } from 'react-native';

export const MyTumbler = props =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    return(
        <View style={ styles.View }>
            <View style={{flexDirection:"row", justifyContent:"space-evenly" , borderBottomColor:"#242424" , borderBottomWidth:2}}>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.FirstText}>0</Text>
                    <Text style= {styles.FirstText}>1</Text>
                    <Text style= {styles.FirstText}>2</Text>
                    <Text style= {styles.FirstText}>3</Text>
                    <Text style= {styles.FirstText}>4</Text>
                    <Text style= {styles.FirstText}>5</Text>
                    <Text style= {styles.FirstText}>6</Text>
                    <Text style= {styles.FirstText}>7</Text>
                    <Text style= {styles.FirstText}>8</Text>
                    <Text style= {styles.FirstText}>9</Text>
                    <Text style= {styles.FirstText}>10</Text>
                    <Text style= {styles.FirstText}>11</Text>
                    <Text style= {styles.FirstText}>12</Text>
                </ScrollView>
                <Text style= {styles.Text}>:</Text>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>0</Text>
                    <Text style= {styles.Text}>1</Text>
                    <Text style= {styles.Text}>2</Text>
                    <Text style= {styles.Text}>3</Text>
                    <Text style= {styles.Text}>4</Text>
                    <Text style= {styles.Text}>5</Text>
                </ScrollView>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>0</Text>
                    <Text style= {styles.Text}>1</Text>
                    <Text style= {styles.Text}>2</Text>
                    <Text style= {styles.Text}>3</Text>
                    <Text style= {styles.Text}>4</Text>
                    <Text style= {styles.Text}>5</Text>
                    <Text style= {styles.Text}>6</Text>
                    <Text style= {styles.Text}>7</Text>
                    <Text style= {styles.Text}>8</Text>
                    <Text style= {styles.Text}>9</Text>
                </ScrollView>
                <ScrollView pagingEnabled={true} style={styles.ScrollView} disableIntervalMomentum={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>AM</Text>
                    <Text style= {styles.Text}>PM</Text>
                </ScrollView>
            </View>
            <Switch 
                style={{marginVertical:10,}}
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{false:"#FFF", true: "#242424"}}
                thumbColor={"#242424"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    View:{
        height:40,
        flexDirection:'row',
        justifyContent:"space-around",
        marginVertical:20
    },
    ScrollView:{
        height:40,
    },
    Text:{
        fontSize:40, 
        lineHeight:40,
    },
    FirstText:{
        fontSize:40,
        lineHeight:40, 
        marginRight:10, 
        textAlign:"right"
    }
})