import React, { createContext, useEffect, useState } from 'react'

const BookContext = createContext();

function BookContextProvider({children}) {
    const [books,setBooks] = useState([]);
    let info = "Burası kitabın özet bölgesi. Bu alanda konuyla ilgili geniş bir özet bulunmaktadır";
    useEffect(() => {
        setBooks([
            {id : 1, name : "Sefiller",author:"Victor HUGO",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 2, name : "Tutunamayanlar",author:"Oğuz ATAY",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 3, name : "Nutuk",author:"Mustafa Kemal ATATÜRK",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 4, name : "Sefiller",author:"Victor HUGO",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 5, name : "Tutunamayanlar",author:"Oğuz ATAY",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 6, name : "Nutuk",author:"Mustafa Kemal ATATÜRK",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 7, name : "Sefiller",author:"Victor HUGO",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 8, name : "Tutunamayanlar",author:"Oğuz ATAY",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 9, name : "Nutuk",author:"Mustafa Kemal ATATÜRK",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 10, name : "Sefiller",author:"Victor HUGO",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 11, name : "Tutunamayanlar",author:"Oğuz ATAY",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`},
            {id : 12, name : "Nutuk",author:"Mustafa Kemal ATATÜRK",image:`https://picsum.photos/id/${Math.ceil(Math.random() * 200)}/300/200`}
        ])
    },[])
    const value = {
        books, 
        setBooks,
        info
    }
  return (
    <BookContext.Provider value={value} >
        {children}
    </BookContext.Provider>
  )
}

export {BookContext, BookContextProvider}