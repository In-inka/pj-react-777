import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import operations from "../../redux/auth/operations";

const GoogleAuth = () => {
    const [params, setParams] = useSearchParams();
    const dispatch = useDispatch();
    const values = JSON.parse(params.get("body"))
    const newValue = {email: values.email, password: values.id}
    dispatch(operations.logIn(newValue));
    return (
        <h1>...Loading</h1>
        
    )
}

export {GoogleAuth}