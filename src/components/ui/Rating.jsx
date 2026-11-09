export default function Rating({ value = 5, showLabel = true, className = 'tj-rating-wrapper rating' }) {
  return (
    <div className={className} content={String(value)} role="img" aria-label={`Rated ${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <div key={i} className="r-icon">
            <div className="r-icon-wrapper r-icon-marked" style={{ '--r-rating-icon-marked-width': `${fill}%` }}>
              <i aria-hidden="true" className="tj tji-star" />
            </div>
            <div className="r-icon-wrapper r-icon-unmarked"><i aria-hidden="true" className="tj tji-star" /></div>
          </div>
        );
      })}
      {showLabel && <span className="label">{value}/5</span>}
    </div>
  );
}
