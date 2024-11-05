import { forwardRef } from "react";

import { TextInput, TextInputProps, View } from "react-native";

import {Controller, UseControllerProps} from "react-hook-form";

import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";


type InputProps = {
    icon: keyof typeof Feather.glyphMap //dessa forma a prop já mostra as opções da tipagem disponíveis
    controlerProps: UseControllerProps //acessar propriedades do componente Controler que controla o input 
    inputProps: TextInputProps //acessa as propridades do proprio input
}
const Input = forwardRef<TextInput, InputProps> (({ icon,  controlerProps, inputProps}, ref) => {
    return (
        <Controller 

            render={({field}) => (
                <View style = {styles.group}>
                    <Feather name={icon} size = {24}/>
                    <TextInput 
                        ref = {ref}
                        value = {field.value}
                        onChangeText={field.onChange}
                        style = {styles.control} 
                        {...inputProps}
                    />
                </View>
            )}
            {...controlerProps}/>
    )
});

export {Input};