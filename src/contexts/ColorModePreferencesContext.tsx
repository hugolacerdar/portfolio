import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useContext, ReactNode } from "react";

interface ColorModePreferenceProviderProps {
  children: ReactNode;
}

interface ColorModePreferencesReturn {
  primary: string;
  secondary: string;
}

const ColorModePreferencesContext = createContext(
  {} as ColorModePreferencesReturn
);

export function ColorModePreferencesProvider({
  children,
}: ColorModePreferenceProviderProps) {
  const primary = useColorModeValue("gray.600", "gray.400");
  const secondary = useColorModeValue("gray.700", "gray.300");

  return (
    <ColorModePreferencesContext.Provider value={{ primary, secondary }}>
      {children}
    </ColorModePreferencesContext.Provider>
  );
}

export const useColorModePreferences = () =>
  useContext(ColorModePreferencesContext);
