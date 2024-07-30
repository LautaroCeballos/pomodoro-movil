import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Header from './Header';
import Timer from './Timer';
import ButtonStart from './ButtonStart';

export default function Main() {
    const insets = useSafeAreaInsets();
    const [isWorking, setIsWorking] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [currentTimer, setCurrentTimer] = useState('pomodoro' | 'shortBreak' | 'longBreak');
    const [isActive, setIsActive] = useState(false);

    const colors = ["#F7DC6F", "#A2D9CE", "#F0B27A"]

    useEffect(() => {
        let interval = null

        if (isActive) {
            interval = setInterval(() => {
                setTime(time - 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        if (time === 0) {
            setIsWorking((prev => !prev))
            setIsActive(false)
            setTime(isWorking ? 300 : 1500)
        }

        return () => clearInterval(interval)
    }, [isActive, time])

    return (
        <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: colors[currentTimer] }}
            className="h-full flex px-5"
        >
            <Text className="text-3xl font-bold mt-4">Pomodoro</Text>

            <Header currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} setTime={setTime} />
            <Timer time={time} />
            <ButtonStart isActive={isActive} setIsActive={setIsActive} />

        </View >
    );
}

