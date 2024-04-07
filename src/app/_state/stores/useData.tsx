import { create } from 'zustand'

interface IUseData {
    data: any
    setData: (data: any) => void
}

const useData = create<IUseData>()((set) => ({
    data: null,
    setData: (data: boolean) => set({ data }),
}))
export default useData
