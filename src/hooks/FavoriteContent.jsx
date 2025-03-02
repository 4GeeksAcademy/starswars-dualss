import React, { createContext, useState } from 'react';

export const FavoriteContent = createContext();

export const FavoriteContentProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoriteContent.Provider value={[favorite, setFavorite]}>
                {children}
        </FavoriteContent.Provider>
    );
};