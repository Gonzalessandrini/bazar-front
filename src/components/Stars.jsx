const ProductRating = ({ rating }) => {
  // Función para generar las estrellas en función de la calificación
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;
    const stars = [];

    // Estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`star-${i}`}
          width="20"
          height="15"
          src="https://img.icons8.com/fluency/48/star--v1.png"
          alt="star--v1"
          style={{ margin: '0 2px', color: 'gold' }}
        />
      );
    }

    // Media estrella (si hay)
    if (remainder >= 0.25 && remainder < 0.75) {
      stars.push(
        <img
          key="half-star"
          width="20"
          height="15"
          src="https://img.icons8.com/color/48/star-half.png"
          alt="star-half"
          style={{ margin: '0 2px', color: 'gold' }}
        />
      );
    }

    // Estrellas vacías
    const emptyStarsCount = 5 - stars.length;
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ fontSize: '20px', color: 'gold' }}>
          &#9734;
        </span>
      );
    }

    return stars;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', color: 'gold' }}>
      {renderStars()}
      <span style={{ marginLeft: '10px',fontSize:'14px', marginRight: '4px' }}>{rating}</span>
    </div>
  );
};

export default ProductRating;
