"use client"
import { useEffect, useState } from "react";
import styles from "./term-list.module.css"
import TermFilter from "./term-filter";

const TermList = () => {
  const [termList, setTermList] = useState([]);
  const [letterArray, setLetterArray] = useState([]);
  const [filteredLetterArray, setFilteredLetterArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/data.json');
      const json = await response.json();
      let letArray = [];
      json.termList.forEach((term, index) => {
        if (index == 0) {
          letArray.push(term.title[0]);
        } else if (term.title[0] != json.termList[index - 1].title[0]) {
          letArray.push(term.title[0]);
        }
      });
      setLetterArray(letArray);
      setFilteredLetterArray(letArray);
      setTermList(json.termList);
    };

    fetchData();
  }, [])

  let handleFilterClick = (letter) => {
    setFilteredLetterArray([letter]);
  }

  return (
      <>
        <div className={styles["term-filter-container"]}>
          <TermFilter activeLetters={letterArray} handleFilterClick={handleFilterClick} />
        </div>
        <div className={styles["term-list-container"]}>
          {filteredLetterArray.map((letter, index) => {
            return (
              <>
                <h2 key={index} className={styles["letter-container"]}>{letter}</h2>
                <div className={styles["term-section"]}>
                  {termList.map((term, index) => {
                    if (term.title[0] == letter) {
                      return <a key={`${term.title}${index}`} href={term.link} className={styles["term-link"]}>{term.title}</a>
                    }
                  })}
                </div>
              </>
            )
          })}
        </div>
      </>
  )
};
  
export default TermList;
