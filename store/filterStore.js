import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useFilterStore = create(
  persist(
    (set) => ({
      filters: [],
      darkMode: false,

      addFilter: (tag) =>
        set((state) => ({
          filters: state.filters.includes(tag)
            ? state.filters
            : [...state.filters, tag],
        })),

      removeFilter: (tag) =>
        set((state) => ({
          filters: state.filters.filter((f) => f !== tag),
        })),

      clearFilters: () => set({ filters: [] }),

      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'job-listings-store',
    }
  )
)
