import { authStyles as styles } from "@/styles/authStyles";

export default function AuthButton({ disabled, children }) {
  return (
    <button
      disabled={disabled}
      className={`${styles.primaryButton} ${
        disabled ? styles.primaryButtonDisabled : "hover:shadow-lg hover:scale-105"
      }`}
    >
      {children}
    </button>
  );
}