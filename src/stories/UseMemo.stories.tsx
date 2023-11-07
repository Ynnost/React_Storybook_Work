import React, { useCallback } from "react";
import { useMemo, useState } from "react";

export default {
  title: "UseMemo",
};

export const DifficulCountingExample1 = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let face = 0;
      while (face < 100000000) {
        face++;
        const fackeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  // for (let i = 1; i <= a; i++) {
  //   let face = 0;
  //   while (face < 100000000) {
  //     face++;
  //     const fackeValue = Math.random();
  //   }
  //   resultA = resultA * i;

  // }

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a:{resultA}</div>
      <div>Result for b:{resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS SECRET");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemoExample1 = () => {
  console.log("HELPS EX");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Denis", "Ira", "Anna", "Ivan"]);

  const newArray = useMemo(() => {
    const newArray= users.filter((u) => u.toLowerCase().indexOf("a") > -1)
    return newArray;
  }, [users]);
  
  const addUser = () => {
    const newUser = [...users, "Mema " + counter];
    setUsers(newUser);
  };

  return (
    <>
      <button onClick={() => {setCounter(counter + 1)}}>
        +
      </button>
      <button onClick={addUser}>Add User</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};





export const LikeUseCallbackMemo = () => {
  console.log("LikeUseCallback");
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "HTML", "CSS", "JS"]);


 const memoizedAddBook = useMemo(()=>{ return () => {
    const newBook = [...books, "Angular " + new Date().getTime()];
    console.log(books);
    setBooks(newBook);
  };}, [books]);

  const memoizedAddBook2 = useCallback(() => {
      const newBook = [...books, "Angular " + new Date().getTime()];
      console.log(books);
      setBooks(newBook);;
  }, [books]);



  return (
    <>
      <button onClick={() => {setCounter(counter + 1);}}>
        +
      </button>
      {counter}
      <Book addBook={memoizedAddBook2} />
    </>
  );
};

type BooksSecretProps = {
  addBook: () => void;
};

const BooksSecret = (props: BooksSecretProps) => {
  console.log("BooksSecret");
  return (
    <div>
      <button onClick={props.addBook}>Add User</button>
    </div>
  );
};

const Book = React.memo(BooksSecret);