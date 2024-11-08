import { create } from 'zustand'

interface CounterState {
  count: number
  inc: () => void
}

const counterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default counterStore