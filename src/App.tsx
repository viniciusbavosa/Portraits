import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "~/routes";
import GlobalStyles from '~/styles/global.ts';
import Fallback from "./layout/Error";

function App() {
  return (
    <>
    <ErrorBoundary FallbackComponent={Fallback}>
      <GlobalStyles />
      <AppRoutes />
    </ErrorBoundary>
    </>
  );
}

export default App;
