import React, {FC, useState} from 'react';

export enum CardVariant{
    outlined = 'outlined',
    primary = 'primary'

}

interface CardProps{
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: React.ReactNode;
    onClick: (num: number)=> void;
}

const Card: FC<CardProps> = ({width, height, variant, children, onClick}) => {
    const [state, setState] = useState(0)
    return (
        <div style={{
            width,
            height,
            background: 'blue',
            border: variant === CardVariant.outlined? '2px solid grey' : 'none'}}
            onClick={()=>onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
