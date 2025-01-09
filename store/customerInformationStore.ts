import { create } from "zustand"

interface CustomerInfomationState {
  informationState: {
    firstname: string
    lastname: string
    email: string
    gender: number
    date_of_birth: string
  }
  setInformationState: (field: string, value: string | number) => void
  resetInformationState: () => void
}

export const useCustomerInformationStore = create<CustomerInfomationState>(
  (set) => ({
    informationState: {
      firstname: "",
      lastname: "",
      email: "",
      gender: 1,
      date_of_birth: "",
    },
    setInformationState: (field, value) =>
      set((state) => ({
        informationState: {
          ...state.informationState,
          [field]: value,
        },
      })),
    resetInformationState: () => {
      set((state) => ({
        informationState: {
          firstname: "",
          lastname: "",
          email: "",
          gender: 1,
          date_of_birth: "",
        },
      }))
    },
  })
)
