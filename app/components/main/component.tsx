import styles from "./component.module.scss";


export function MainComponent() {


  return (
    <main className={`text-teal-300 first-letter:text-9xl hover:first-letter:text-black ${styles.hello}`}>
      HELLO :)
    </main>
  )

}