import Link from "next/link";
import { authStyles as styles } from "@/styles/authStyles";

export default function AuthRightPanel({ title, description, buttonText, buttonLink }) {
  return (
    <div className={styles.rightPanel}>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="border-2 w-10 border-white inline-block mb-2"></div>

      <p className="mb-10">{description}</p>

      <Link href={buttonLink}>
        <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500 transition duration-300">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}