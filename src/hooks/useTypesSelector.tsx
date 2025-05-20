import { useSelector } from "react-redux";
import { RootState } from "../store";
import type { TypedUseSelectorHook } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

console.log(useTypedSelector);