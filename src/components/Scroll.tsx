import styles from "./Scroll.module.css"

export default function Scroll () {
  return (
    <>
      <div className = { styles.padding }/>
      <div className = { styles.panel }>
        <div className = { styles.panel }/>
        <a href = '#' id = { styles.button } title = 'Back to top'>
          ^
        </a>
      </div>
    </>
  );
}
