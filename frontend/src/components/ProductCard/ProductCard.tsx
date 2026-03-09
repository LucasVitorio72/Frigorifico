import { type Produto } from "../../types/Produtos"

interface Props {
    produto: Produto
}

export default function ProductCard({ produto }: Props) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 
                    animate-in fade-in zoom-in duration-500">
      <h3 className="font-bold text-gray-800">{produto.nome}</h3>
      <p className="text-green-600 font-bold">R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
    </div>
    );
}