import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Title search filter component
function TitleFilter({ onTitleChange }) {
    return (
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Buscar por título" onChange={(e) => onTitleChange(e.target.value)}></input>
        </div>
    );
}

// Filter component by category
function CategoryFilter({ categories, onCategoryChange }) {
    return (
        <select
            onChange={(e) => onCategoryChange(e.target.value)}
            className="border px-2 py-3 rounded-md bg-gray-900 text-gray-200 border-gray-700 w-full"
        >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

// Filter component by brand
function BrandFilter({ brands, onBrandChange }) {
    return (
        <select
            onChange={(e) => onBrandChange(e.target.value)}
            className="border bg-gray-900 text-gray-200 border-gray-700 px-2 py-3 rounded-md w-full"
        >
            <option value="">Todas las marcas</option>
            {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
            ))}
        </select>
    );
}

// Filter component by price range
function PriceFilter({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) {
    return (
        <div className='flex flex-wrap gap-1'>
            <input
                type="number"
                placeholder="Precio mínimo"
                value={minPrice}
                min={0}
                onChange={(e) => onMinPriceChange(e.target.value)}
                className="border bg-gray-900 text-gray-200 border-gray-700 px-2 py-1 rounded-md w-full"
            />
            <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                min={0}
                onChange={(e) => onMaxPriceChange(e.target.value)}
                className="border bg-gray-900 text-gray-200 border-gray-700 px-2 py-1 rounded-md w-full"
            />
        </div>
    );
}

// Filter component by promotions (% discount)
function DiscountFilter({ onDiscountChange }) {
    return (
        <select
            onChange={(e) => onDiscountChange(e.target.value)}
            className="border border-gray-700 bg-gray-900 text-gray-200 px-2 py-3 rounded-md w-full "
        >
            <option value="">Todos los descuentos</option>
            <option value="0-10">0% - 10%</option>
            <option value="11-20">11% - 20%</option>
            <option value="21-30">21% - 30%</option>
            <option value="31-40">31% - 40%</option>
            <option value="41-50">41% - 50%</option>
            <option value="51-99">+51%</option>
        </select>
    );
}

function Shop() {
    const [products, setProducts] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [discountFilter, setDiscountFilter] = useState('');

    // Event handling functions to update filters
    const handleTitleChange = (value) => setTitleFilter(value);
    const handleCategoryChange = (value) => setCategoryFilter(value);
    const handleBrandChange = (value) => setBrandFilter(value);
    const handleMinPriceChange = (value) => setMinPriceFilter(value);
    const handleMaxPriceChange = (value) => setMaxPriceFilter(value);
    const handleDiscountChange = (value) => setDiscountFilter(value);

    const clearFilters = () => {
        setTitleFilter('');
        setCategoryFilter('');
        setBrandFilter('');
        setMinPriceFilter('');
        setMaxPriceFilter('');
        setDiscountFilter('');
    };

    useEffect(() => {
        axios.get('api/products/all')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    // Logic for filtering products based on selected filters
    const filteredProducts = products.filter(product => {
        // Lógica para cada filtro aquí
        const isInTitle = product.name.toLowerCase().includes(titleFilter.toLowerCase());
        const isInCategory = categoryFilter === '' || product.category === categoryFilter;
        const isInBrand = brandFilter === '' || product.brand === brandFilter;
        const isWithinPriceRange = (minPriceFilter === '' || parseFloat(product.finalPrice) >= parseFloat(minPriceFilter))
            && (maxPriceFilter === '' || parseFloat(product.FinalPrice) <= parseFloat(maxPriceFilter));

        let isWithinDiscountRange = true;
        if (discountFilter !== '') {
            const [minDiscount, maxDiscount] = discountFilter.split('-');
            const discountPercentage = product.promos;
            isWithinDiscountRange = parseFloat(discountPercentage) >= parseFloat(minDiscount)
                && parseFloat(discountPercentage) <= parseFloat(maxDiscount);
        }

        return isInTitle && isInCategory && isInBrand && isWithinPriceRange && isWithinDiscountRange;
    });

    console.log(filteredProducts);

    // Obtain unique product categories and brands
    const categories = Array.from(new Set(products.map(product => product.category)));
    const brands = Array.from(new Set(products.map(product => product.brand)));

    return (
        <div className='flex pr-10 pl-3 py-5 gap-5 flex-wrap min-h-3/5'>
            <div className="flex flex-col gap-4 w-[25%] h-[40rem] border-[3px] bg-gray-900 p-1 rounded-xl border-gray-900 justify-center md:sticky md:top-5">
                <div className="flex justify-center">
                    <h1 className="font-bold text-white text-2xl" >Filtros</h1>
                </div>
                <div>
                    <CategoryFilter className categories={categories} onCategoryChange={handleCategoryChange} />
                </div>
                <div>
                    <BrandFilter brands={brands} onBrandChange={handleBrandChange} />
                </div>
                <div>
                    <PriceFilter
                        minPrice={minPriceFilter}
                        maxPrice={maxPriceFilter}
                        onMinPriceChange={handleMinPriceChange}
                        onMaxPriceChange={handleMaxPriceChange}
                    />
                </div>
                <div>
                    <DiscountFilter onDiscountChange={handleDiscountChange} />
                </div>
                <div className='flex justify-center gap-3'>
                    <button className="border border-gray-700 bg-gray-900 text-gray-200 px-4 py-3 rounded-md" onClick={clearFilters}>Limpiar filtros</button>
                </div>
            </div>
            <div className='flex flex-col items-center w-[70%]'>
                <div className='w-[85%]'>
                    <div>
                        <TitleFilter onTitleChange={handleTitleChange} />
                    </div>
                </div>
                <div className='w-full'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <div className="mt-4 flex flex-wrap justify-between items-center">
                                    <span className="text-gray-800 font-bold">{product.finalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                                    <a href="/productdetails">
                                        <button className="ml-2 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                                            Ver Detalle
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;

