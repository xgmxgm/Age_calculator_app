import { AdviceType } from "../type"

export const GetAdvice = async (setAdviceData: (adviceData: AdviceType) => void) => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice", {
            cache: "no-cache",
        });
        const data = await res.json()
        setAdviceData(data.slip)
    } catch (error) {
        console.log('Error: ', error)
    }
}