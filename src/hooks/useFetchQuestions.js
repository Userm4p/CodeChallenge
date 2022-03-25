import { useEffect, useState } from "react"
import { getsQuestions } from "../helpers/getQuestions";


export const useFetchQuestions = () => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });
        
    useEffect(()=>{
        getsQuestions()
            .then(questions => 
            {  
                    setState({
                        data: questions,
                        loading: false
                    });
            })
    }, [])
    return state
}
