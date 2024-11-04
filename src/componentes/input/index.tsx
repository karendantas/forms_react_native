import { TextInput, TextInputProps, View } from "react-native";

import {Controller, UseControllerProps} from "react-hook-form";

import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";


type InputProps = {
    icon: keyof typeof Feather.glyphMap //dessa forma a prop já mostra as opções da tipagem disponíveis
    controlerProps: UseControllerProps //acessar propriedades do componente Controler que controla o input 
    inputProps: TextInputProps //acessa as propridades do proprio input
}
export function Input ({ icon,  controlerProps, inputProps }: InputProps){
    return (
        <Controller 

            render={() => (
                <View style = {styles.group}>
                    <Feather name={icon} size = {24}/>
                    <TextInput style = {styles.control} {...inputProps}/>
            </View>
            )}
            {...controlerProps}/>
    )
}