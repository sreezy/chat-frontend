import Link from 'next/link';
import { MainComponent } from './components/main/component'
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={`bg-white h-screen w-screen text-black px-52 pt-6 ${styles.main}`}>

      <nav>
        <h1 className="text-5xl font-extrabold">App Name</h1>
      </nav>


      <div className="w-full flex items-center flex-col mt-12">
        <div className={`flex flex-col ${styles.inputWidth}`}>
          <label htmlFor="age" className="text-2xl font-bold">Your age:</label>
          <input type="number" inputMode="numeric" className="border-blue-400 ml-32 border-2 rounded-md p-1 w-24 h-14 ml text-xl pl-2" />
        </div>
        <div className={`flex flex-col mt-12 ${styles.inputWidth}`}>
          <div className="text-2xl font-bold">Tell us who you're looking for:</div>
          <div className="text-xl">Gender:</div>
          <fieldset className={`${styles.checkBoxGroup} pl-24 grid grid-cols-2`}>
            <label htmlFor="gender-any">Any</label>
            <input type="radio" id="gender-any" className="mt-1" name="gender" />
            <label htmlFor="gender-male">Male</label>
            <input type="radio" id="gender-male" className="mt-1" name="gender" />
            <label htmlFor="gender-fem">Female</label>
            <input type="radio" id="gender-fem" className="mt-1" name="gender" />
            <label htmlFor="gender-non-binary">Non-binary</label>
            <input type="radio" id="gender-non-binary" className="mt-1" name="gender" />
          </fieldset>
          <div className={`flex flex-col ${styles.inputWidth}`}>
            <label htmlFor="age" className="text-xl"><span className="text-sm">optional</span> Age:</label>
            <input type="number" inputMode="numeric" className="border-blue-400 ml-32 border-2 rounded-md p-1 w-20 h-11 ml text-xl pl-2" />
          </div>
        </div>
        <Link href="chat" className={`px-4 py-3 bg-blue-400 text-xl text-white rounded-lg mt-6 hover:scale-105 active:scale-95 transition-all duration-200`}>
          Start a Chat
        </Link>
      </div>


    </main>
  )
}
