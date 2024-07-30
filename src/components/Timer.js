import { View, Text } from "react-native"

export default function Timer({ time }) {
    const formatedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`

    return (
        <View className="bg-white rounded-xl w-full h-28 flex items-center justify-center">
            <Text className="text-4xl font-bold text-slate-800">{formatedTime}</Text>
        </View>
    )
}