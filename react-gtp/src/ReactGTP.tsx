import { RouterProvider } from "react-router-dom"
import { router } from './presentation/router/router';

export const ReactGTP = () => {
  return (
    <RouterProvider router={router}/>
  )
}
