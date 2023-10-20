import { Wrapper } from "./DayProducts.styled"

export const DayProducts = ({children}) => {
    
    console.log(children);
    
    return (<Wrapper>
        {children}
    </Wrapper>)
}