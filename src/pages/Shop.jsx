import React, { useState } from 'react';

const productos = [
    { id: 1, title: 'producto 1', category: 'Electrónicos', brand: 'Marca A', price: 76, discount: 10 },
    { id: 2, title: 'producto 2', category: 'Ropa', brand: 'Marca B', price: 50, discount: 0 },
    { id: 3, title: 'producto 3', category: 'Electrónicos', brand: 'Marca A', price: 200, discount: 20 },
    // Agrega más productos según sea necesario
];

// Title search filter component
function TitleFilter({ onTitleChange }) {
    return (
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Buscar por título" onChange={(e) => onTitleChange(e.target.value)}></input>
        </div>
    );
}

// Filter component by category
function CategoryFilter({ categories, onCategoryChange }) {
    return (
        <select
            onChange={(e) => onCategoryChange(e.target.value)}
            className="border px-2 py-1 rounded-md bg-gray-900 text-gray-200 border-gray-900 w-full"
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
            className="border bg-gray-900 text-gray-200 border-gray-900 px-2 py-1 rounded-md w-full"
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
        <div className='flex flex-wrap gap-2'>
            <input
                type="number"
                placeholder="Precio mínimo"
                value={minPrice}
                onChange={(e) => onMinPriceChange(e.target.value)}
                className="border bg-gray-900 text-gray-200 border-gray-900 px-2 py-1 rounded-md w-full"
            />
            <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(e.target.value)}
                className="border bg-gray-900 text-gray-200 border-gray-900 px-2 py-1 rounded-md w-full"
            />
        </div>
    );
}

// Filter component by promotions (% discount)
function DiscountFilter({ onDiscountChange }) {
    return (
      <select
        onChange={(e) => onDiscountChange(e.target.value)}
        className="border border-gray-900 bg-gray-900 text-gray-200 px-2 py-1 rounded-md w-full"
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

    // Logic for filtering products based on selected filters
    const filteredProducts = productos.filter(producto => {
        // Lógica para cada filtro aquí
        const isInTitle = producto.title.toLowerCase().includes(titleFilter.toLowerCase());
        const isInCategory = categoryFilter === '' || producto.category === categoryFilter;
        const isInBrand = brandFilter === '' || producto.brand === brandFilter;
        const isWithinPriceRange = (minPriceFilter === '' || parseFloat(producto.price) >= parseFloat(minPriceFilter))
          && (maxPriceFilter === '' || parseFloat(producto.price) <= parseFloat(maxPriceFilter));
    
        let isWithinDiscountRange = true;
        if (discountFilter !== '') {
          const [minDiscount, maxDiscount] = discountFilter.split('-');
          const discountPercentage = producto.discount;
          isWithinDiscountRange = parseFloat(discountPercentage) >= parseFloat(minDiscount) 
            && parseFloat(discountPercentage) <= parseFloat(maxDiscount);
        }
    
        return isInTitle && isInCategory && isInBrand && isWithinPriceRange && isWithinDiscountRange;
      });

    // Obtain unique product categories and brands
    const categories = Array.from(new Set(productos.map(producto => producto.category)));
    const brands = Array.from(new Set(productos.map(producto => producto.brand)));

    return (
        <div className='flex pr-10 pl-3 py-5 gap-5 flex-wrap'>
            <div className="flex flex-col gap-4 w-[25%] border-[3px] border-gray-900 p-1 rounded-xl">
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
                <div>
                    <button className="border border-gray-900 bg-gray-900 text-gray-200 px-2 py-1 rounded-md w-full" onClick={clearFilters}>Limpiar filtros</button>
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
                        {filteredProducts.map(producto => (
                            <div key={producto.id} className="border border-gray-300 p-4 rounded-md">
                                <h2 className="text-lg font-bold">{producto.title}</h2>
                                <p>{producto.description}</p>
                                <p>${producto.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;

