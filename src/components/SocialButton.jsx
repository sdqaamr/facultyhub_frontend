import { authStyles as styles } from "@/styles/authStyles";

export default function SocialButton({ icon }) {
  return (
    <button className={styles.socialButton}>
      {icon}
    </button>
  );
}