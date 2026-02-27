function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md flex flex-col items-center py-4">

            <h1 className="text-2xl font-bold tracking-tight">Frigorifico Macedo</h1>

            <nav>
                <ul className="flex space-x-6 font-medium">
                    <li className="cursor-pointer hover:text-blue-200 transition">Home</li>
                    <li className="cursor-pointer hover:text-blue-200 transition">Produtos</li>
                    <li className="cursor-pointer hover:text-blue-200 transition">contado</li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;