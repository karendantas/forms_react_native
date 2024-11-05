import { useRef } from "react";

import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../componentes/input";
import { useForm } from "react-hook-form";
import { Button } from "../../componentes/button";

export function FormStepOne(){
    const {control, handleSubmit} = useForm();
    const emailRef = useRef<TextInput>(null);

    function handleNextStepForm(data: any){
        console.log(data);
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Crie sua conta </Text>
            <Input 
                icon="user"
                controlerProps={{
                    name: "name",
                    control: control,
                }}  
                inputProps={{
                    placeholder: "Nome",
                    onSubmitEditing: () => emailRef.current?.focus, //depois que esse estiver preenchdio, o proximo input fica em foco
                    returnKeyType: "next" //muda o icone do teclado 
                }}
            />
             <Input 
                ref = {emailRef}
                icon="mail"
                controlerProps={{
                    name: "email",
                    control: control,
                }}  
                inputProps={{
                    placeholder: "Email",
                }}
            />

            <Button title="Continuar" onPress={handleSubmit(handleNextStepForm)} />
        </View>
    )
}