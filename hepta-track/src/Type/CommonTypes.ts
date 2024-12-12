import { UserData } from "./ApiTypes";

export interface SidebarState {
  isOpen: boolean;
}

export interface InitialState {
  token: string;
  userData: UserData | null;
  isOpen: boolean;
  sidebar: SidebarState;
  customerId: string;
  customerName: string;
}
