import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Unauthorized = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleRedirect = () => {
    switch (user?.role) {
      case "Admin":
        navigate("/YoneticiAnasayfa");
        break;
      case "SirketYonetici":
        navigate("/SirketYoneticiAnasayfa");
        break;
      case "Personel":
        navigate("/PersonelAnasayfa");
        break;
      default:
        navigate("/");
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Yetkisiz Erişim</h1>
        <p style={styles.message}>
          Bu sayfaya erişim yetkiniz bulunmamaktadır.
        </p>
        <p style={styles.message}>
          Lütfen hesabınızı kontrol edin ya da yöneticinizle iletişime geçin.
        </p>
        <div style={styles.buttonContainer}>
          <button onClick={handleRedirect} style={{ ...styles.button, ...styles.primaryButton }}>
            Ana Sayfaya Dön
          </button>
          <button onClick={handleLogout} style={{ ...styles.button, ...styles.secondaryButton }}>
            Güvenli Çıkış
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f4f6f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', 'Open Sans', sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "480px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "15px",
  },
  message: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 20px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "130px",
  },
  primaryButton: {
    backgroundColor: "#004080",
    color: "#fff",
    borderColor: "#004080",
  },
  secondaryButton: {
    backgroundColor: "#f8f9fa",
    color: "#004080",
    borderColor: "#ced4da",
  },
};

export default Unauthorized;
