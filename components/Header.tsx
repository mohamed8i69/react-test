import Link from "next/link";
import styles from "../app/page.module.css";

type HeaderProps = {
  logo?: string;
  tagline?: string[];
};

export function Header({ logo, tagline }: HeaderProps) {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
      </header>
      <nav className="bg-gray-700 text-white p-2 flex flex-row gap-4 justify-between items-center">
        <div
          className={`flex justify-center items-center gap-4 ${styles.logo}`}
        >
          {logo && <img src={logo} alt="Logo" className={styles.logo} />}
        </div>
        <ul className="flex justify-center items-center gap-[5%] space-x-4 mt-2 w-[70%]" > 
          {tagline?.map((item, index) => (
            <li key={index} className=" text-lg hover:text-gray-300 cursor-pointer transition-colors duration-300 w-[40%] text-center">
              <Link href={`/${item=="Home" ? "" : item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
