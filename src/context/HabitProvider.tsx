import { isSameDay } from "date-fns";
import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLokalStorage";

export type Habit = {id: string; name: string; completions: Date[] }

type Context = {
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void

}

type HabitProviderProps = {
    children: ReactNode
}

export const HabitContext = createContext <null | Context>(null) 


export function HabitProvider ({ children }: HabitProviderProps ) {
    const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", [])

    function addHabit(name:string) {
        setHabits(curr => [...curr, { id: crypto.randomUUID(), name, completions: [] }])
    }

  function deleteHabit(id: string) {
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  function toggleHabit(id: string, date: Date) {
    setHabits(curr => curr.map(h => {
      if (h.id !== id) return h

      const alreadyDone = h.completions.some(c => isSameDay(c, date))
      const completions = alreadyDone ? h.completions.filter(c => !isSameDay(c, date))
      : [...h.completions, date]

      return { ...h, completions }

      }),
    )
  }

    return <HabitContext value={{ habits, addHabit, toggleHabit, deleteHabit }}>{children}</HabitContext>
}

export function useHabits() {
    const habitContext = useContext(HabitContext)
    if(habitContext == null) throw new Error("Null context")
    return habitContext
}