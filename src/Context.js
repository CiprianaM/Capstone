import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })

        setAllPhotos(updatedArr);
    }

    function addCartItem (img) {
        setCartItems(prevCartItems => [...prevCartItems, img])
    }

    function removeCartItem (img) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !==img.id))
    }

    console.log(cartItems);

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addCartItem, removeCartItem}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}