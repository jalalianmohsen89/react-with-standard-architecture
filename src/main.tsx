import ReactDOM from 'react-dom/client'
import './core/assets/css/index.css'
import {AppRoutes} from "@/app/routing/AppRoutes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <AppRoutes/>
    </QueryClientProvider>
)
