import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp } from "../../pages/";
import { MainLayout } from "../../shared/ui/main-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <SignIn />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    }
]);