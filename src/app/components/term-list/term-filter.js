import styles from "./term-filter.module.css"

const TermFilter = ({ activeLetters, handleFilterClick }) => {
    let letters = []
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(65 + i);
        letters.push(letter);
        if (i == 25) {
            letters.push('#');
        }
    }

    return (
        <>
          <div className={styles["filter-header"]}>Treatments, Services and Specialties</div>
          <div className={styles["letter-container"]}>
            {letters.map((letter, index) => {
                if (activeLetters.includes(letter)) {
                    return <p key={index} className={styles["active-letter"]} onClick={() => handleFilterClick(letter)}>{letter}</p>
                } else {
                    return <p key={index} className={styles["inactive-letter"]}>{letter}</p>
                }
            })}
          </div>
        </>
    )
  };
  
export default TermFilter;
