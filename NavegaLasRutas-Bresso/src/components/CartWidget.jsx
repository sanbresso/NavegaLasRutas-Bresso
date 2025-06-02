const CartWidget = () => {
  return (
    <div style={{ position: "relative" }}>
      🛒{" "}
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "0.2rem 0.5rem",
        }}
      >
        3
      </span>
    </div>
  );
};

export default CartWidget;
