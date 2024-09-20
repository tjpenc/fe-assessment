import TermFilter from "./term-list/term-filter";
import TermList from "./term-list/term-list";
import styles from "./container.module.css";

const Container = () => {
    return (
        <>
            <div className={`${styles["term-list"]} ${styles["flex-center"]}`}>
                <TermList />
            </div>
        </>
    )
  };
  
export default Container;
