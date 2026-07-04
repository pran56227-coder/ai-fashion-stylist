function StarBackground() {
  const stars = Array.from({ length: 150 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {stars.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 3;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default StarBackground;