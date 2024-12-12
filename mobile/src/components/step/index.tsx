import { Text, View} from "react-native"
import { colors } from "@/styles/theme"
import { styles } from "./styles"
import { IconProps } from "@tabler/icons-react-native"

type StepProps = {
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: StepProps){
    return (
        <View style={styles.container}>
            <Icon size={32} color={colors.red.base}/>
            <View style={styles.details}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}