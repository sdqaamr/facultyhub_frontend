import { authStyles as styles } from "@/styles/authStyles";

export default function AuthInput({ icon, type, placeholder, value, onChange, children }) {
  return (
    <div className={styles.inputBox}>
      <div className="flex items-center">
        <span className="mr-2.5 text-gray-500">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />

        {children}
      </div>
    </div>
  );
}