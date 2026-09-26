import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';
import './ProductList.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
  'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
  'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
  'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
];

const PLANTS_DATA = [
  // ===== INDOOR PLANTS =====
  {
    category: 'Indoor Plants',
    plants: [
      { name: 'Monstera Deliciosa', imageIndex: 0, price: 24.99 },
      { name: 'Snake Plant', imageIndex: 1, price: 18.99 },
      { name: 'Peace Lily', imageIndex: 2, price: 22.50 },
      { name: 'Pothos Golden', imageIndex: 3, price: 15.99 },
      { name: 'Fiddle Leaf Fig', imageIndex: 4, price: 45.99 },
      { name: 'Philodendron Heartleaf', imageIndex: 5, price: 19.99 },
    ],
  },

  // ===== SUCCULENTS =====
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', imageIndex: 0, price: 12.99 },
      { name: 'Echeveria', imageIndex: 1, price: 9.99 },
      { name: 'Jade Plant', imageIndex: 2, price: 14.50 },
      { name: 'Haworthia Zebra', imageIndex: 3, price: 11.99 },
      { name: 'String of Pearls', imageIndex: 4, price: 16.99 },
      { name: "Burro's Tail", imageIndex: 5, price: 13.99 },
    ],
  },

  // ===== FLOWERING PLANTS =====
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid Phalaenopsis', imageIndex: 0, price: 34.99 },
      { name: 'African Violet', imageIndex: 1, price: 13.50 },
      { name: 'Anthurium Red', imageIndex: 2, price: 28.99 },
      { name: 'Begonia Rex', imageIndex: 3, price: 21.99 },
      { name: 'Hibiscus Tropical', imageIndex: 4, price: 32.50 },
      { name: 'Gardenia Jasminoides', imageIndex: 5, price: 38.99 },
    ],
  },

  // ===== OUTDOOR PLANTS =====
  {
    category: 'Outdoor & Patio',
    plants: [
      { name: 'Lavender', imageIndex: 0, price: 16.50 },
      { name: 'Boxwood Topiary', imageIndex: 1, price: 42.99 },
      { name: 'Hydrangea Blue', imageIndex: 2, price: 29.99 },
      { name: 'Citrus Lemon Tree', imageIndex: 3, price: 49.99 },
      { name: 'Rosemary Herb', imageIndex: 4, price: 11.50 },
      { name: 'Japanese Maple', imageIndex: 5, price: 65.99 },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedPlants, setAddedPlants] = useState(new Set());

  const [failedImages, setFailedImages] = useState(new Set());

  const handleImageError = (url) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(url);
      return newSet;
    });
  };

  const getImageUrl = (plant) => IMAGES[plant.imageIndex] || IMAGES[0];

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: getImageUrl(plant),
        price: plant.price,
      })
    );

    setAddedPlants((prev) => {
      const newSet = new Set(prev);
      newSet.add(plant.name);
      return newSet;
    });
  };

  return (
    <div className="product-list-container">
      <header className="product-list-header">
        <h1> Our Plant Collection</h1>
        <p>Browse our hand-picked selection of beautiful houseplants</p>
      </header>

      {PLANTS_DATA.map((categoryData) => (
        <section key={categoryData.category} className="category-section">
          <h2 className="category-title">{categoryData.category}</h2>

          <div className="plants-grid">
            {categoryData.plants.map((plant) => {
              const isAdded = addedPlants.has(plant.name);
              const imageUrl = getImageUrl(plant);
              const imageFailed = failedImages.has(imageUrl);

              return (
                <div key={plant.name} className="plant-card">
                  <div className="plant-image-wrapper">
                    {imageFailed ? (
                      <div className="plant-image-fallback" role="img" aria-label={plant.name}>
                        <span className="fallback-icon">🌿</span>
                      </div>
                    ) : (
                      <img
                        src={imageUrl}
                        alt={plant.name}
                        className="plant-image"
                        loading="lazy"
                        onError={() => handleImageError(imageUrl)}
                      />
                    )}
                  </div>


                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>

                    <button
                      className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;