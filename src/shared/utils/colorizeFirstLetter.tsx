import React from 'react';

export const colorizeFirstLetter = (name: string, color: string): React.ReactNode => {
    const firstLetter = name.charAt(0);
    const restOfName = name.slice(1);
    const styledFirstLetter = <span style={{ color, fontSize: "20px" }}>{firstLetter}</span>;

    return (
        <>
            {styledFirstLetter}{restOfName}
        </>
    );
}
