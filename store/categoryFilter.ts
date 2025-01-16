import { create } from "zustand"

type SortType = "desc" | "asc" | undefined
interface CategoryFilterState {
  isApplied: boolean
  isOpen: boolean
  available: boolean
  brands: string[]
  priceFrom: number
  priceTo: number
  star: number
  searchKey: string
  sortType: SortType
  open: () => void
  close: () => void
  toggleBrand: (brand: string) => void
  setPriceFrom: (price: number) => void
  setPriceTo: (price: number) => void
  setStar: (star: number) => void
  toggleAvailabel: () => void
  setSearchKey: (key: string) => void
  setSortType: (key: "desc" | "asc") => void
  resetFilter: () => void
  apply: () => void
}

const initStore = {
  isApplied: false,
  isOpen: false,
  available: false,
  brands: [],
  priceFrom: 0,
  priceTo: 10,
  star: 5,
}

export const useCategoryFilterStore = create<CategoryFilterState>()((set) => ({
  ...initStore,
  searchKey: "",
  sortType: undefined,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
  toggleBrand: (brand: string) =>
    set((state) => ({
      brands: state.brands.includes(brand)
        ? [...state.brands.filter((b) => b != brand)]
        : [...state.brands, brand],
    })),
  setPriceFrom: (price: number) => set(() => ({ priceFrom: price })),
  setPriceTo: (price: number) => set(() => ({ priceTo: price })),
  setStar: (star: number) => set(() => ({ star })),
  toggleAvailabel: () => set((state) => ({ available: !state.available })),
  setSearchKey: (key: string) => set(() => ({ searchKey: key })),
  setSortType: (type: SortType) => set(() => ({ sortType: type })),
  resetFilter: () => set(initStore),
  apply: () => set((state) => ({ isApplied: !state.isApplied })),
}))

export const allBrands = [
  "Nestlé",
  "Coca-Cola",
  "PepsiCo",
  "Unilever",
  "Kraft Heinz",
  "Danone",
  "Mars",
  "Mondelez International",
  "Tyson Foods",
  "General Mills",
]
