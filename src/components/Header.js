import { View, Text, TouchableOpacity } from 'react-native';

export default function Header({ currentTimer, setCurrentTimer, setTime }) {

    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
        setCurrentTimer(index)
        setTime(newTime * 60)
    }

    const options = ["Pomodoro", "Short Break", "Long Break"];

    return (
        <View className="flex flex-row justify-between items-center my-5">
            {
                options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(index)}
                        className="border-4 border-white rounded-lg px-2"
                        style={currentTimer !== index && { borderColor: 'transparent' }}
                    >
                        <Text className="text-xl font-bold text-slate-800">{option}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}