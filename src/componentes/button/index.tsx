import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type buttonProps = TouchableOpacityProps & {
    title: string,
}
export function Button ({title, ...rest}:buttonProps){
    return (
        <TouchableOpacity {...rest} style = {styles.container}>
            <Text style = {styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}