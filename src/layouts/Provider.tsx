"use client";
import CustomThemeProvider from "@/configs/theme";
import { AlertProvider } from "@/hooks/useAlert";
import { LoadingAnimationProvider } from "@/hooks/useLoadingAnimation";
import { ModalProvider } from "@/hooks/useModal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
      <CustomThemeProvider>
        <AlertProvider>
          <ModalProvider>
            <LoadingAnimationProvider>{children}</LoadingAnimationProvider>
          </ModalProvider>
        </AlertProvider>
      </CustomThemeProvider>
    </LocalizationProvider>
  );
}
