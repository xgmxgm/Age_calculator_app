import { Layout } from "@/app/Layouts";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: (
            <Layout>
                <HomePage />
            </Layout>
        )
    },
    {
        path: '*',
        element: (
            <Layout>
                <NotFoundPage />
            </Layout>
        )
    },
])