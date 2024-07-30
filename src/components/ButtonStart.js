import { TouchableOpacity, Text } from 'react-native';

export default function ButtonStart({ isActive, setIsActive }) {
    return (
        <TouchableOpacity onPress={() => setIsActive(!isActive)} className="bg-slate-800 w-full h-16 rounded-xl flex items-center justify-center mt-2">
            <Text className="text-white text-xl font-bold">{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
    )
}