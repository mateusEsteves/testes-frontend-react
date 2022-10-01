import { createContext, useReducer } from "react";
import { carrinhoReducer } from "./CarrinhoReducer";

export const CarrinhoContext = createContext({
  itens: [],
  valorTotal: 0,
  adicionarItem: () => {},
  removerItem: () => {},
});

export function CarrinhoProvider({ children }) {
  const [dadosCarrinho, dispatch] = useReducer(carrinhoReducer, {
    itens: [],
    valorTotal: 0,
  });

  return (
    <CarrinhoContext.Provider
      value={{
        ...dadosCarrinho,
        adicionarItem: (payload) => dispatch({ payload, type: "adicionar" }),
        removerItem: (payload) => dispatch({ payload, type: "remover" }),
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
