import { FC } from "react"
import { router } from "@/shared/libs/react-router-dom"
import { RouterProvider } from "react-router-dom"

export const App: FC = () => {
  return <RouterProvider router={router} />
}