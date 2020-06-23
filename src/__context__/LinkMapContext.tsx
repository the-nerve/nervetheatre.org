import React, { createContext, useContext } from 'react';
import { useLinkMap, LinkMap } from '@hooks';

export const LinkMapContext = createContext({} as LinkMap);

export const LinkMapProvider: React.FC = ({ children }) => {
    const links = useLinkMap();

    return (
        <LinkMapContext.Provider value={links}>
            {children}
        </LinkMapContext.Provider>
    );
};

export const useLinkMapContext = () => useContext(LinkMapContext);