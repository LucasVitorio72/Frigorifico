import Header from "../components/Header/Header"
import ProductCard from "../components/ProductCard/ProductCard";
import { listaProdutos } from "../data/produtos";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listaProdutos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;