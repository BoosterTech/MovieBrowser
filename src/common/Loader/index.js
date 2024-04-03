export const LoadingSpinner = () => {
  return (
    <svg
      id="loadingSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      width="150"
      height="150"
      overflow="visible"
      fill="#02599d"
      stroke="#fff5f5"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <defs>
        <circle
          id="spinner"
          cx="50"
          cy="50"
          r="4"
          transform="translate(0 -30)"
        />
      </defs>
      {[...Array(12)].map((_, index) => (
        <use
          key={index}
          xlinkHref="#spinner"
          transform={`rotate(${index * 30} 50 50)`}
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin={`${(index / 12) * 1}s`}
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            additive="sum"
            dur="1s"
            begin={`${(index / 12) * 1}s`}
            repeatCount="indefinite"
            from="0 0"
            to="10"
          />
        </use>
      ))}
    </svg>
  );
};
