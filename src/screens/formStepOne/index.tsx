import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../componentes/input";
import { useForm } from "react-hook-form";

export function FormStepOne(){
    const {control} = useForm();
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
                    placeholder: "Nome"
                }}
            />
             <Input 
                icon="mail"
                controlerProps={{
                    name: "email",
                    control: control,
                }}  
                inputProps={{
                    placeholder: "Email"
                }}
            />
        </View>
    )
}