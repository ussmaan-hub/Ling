export type InputInterface={
    InputValue: string
    setInputValue: (value: string) => void
    onpress:()=>void
}
export type LeaderboardItem = {
    bananas: number
    name: string,
}