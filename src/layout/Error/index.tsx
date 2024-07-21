import { FallbackProps } from "react-error-boundary";

export default function Fallback({ error }: FallbackProps) {
  return (
    <div role="alert">
      <h1>
        Algo não saiu como o esperado!
      </h1>
      <p>
        Contate o administrador da página e reporte este erro: {error}
      </p>
    </div>
  )
}