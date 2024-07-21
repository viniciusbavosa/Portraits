import { ReactElement } from "react";

export interface PrivateRouteParams {
  isAuthenticated: () => boolean | string | undefined;
  children: ReactElement<any, any>
;}

export interface ResponseData {
  error: boolean;
  data: string;
}