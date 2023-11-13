import CustomThemeProvider from "@/configs/theme"
import { AlertProvider } from "@/hooks/useAlert"

export default function Provider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <AlertProvider>
        <CustomThemeProvider>
            {children}
        </CustomThemeProvider>
        </AlertProvider>
    )
}