import { create } from 'zustand'

interface DrawerState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const useDrawer = create<DrawerState>()((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))
export default useDrawer
