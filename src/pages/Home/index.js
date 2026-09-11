import { useEffect, useState } from "react";
import api from '../../services/api';


function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "577d2f5b971dd09c01fbd6510959c091",
                    language:"pt-BR",
                    page: 1
                }
            })

            console.log(response);
        }
        loadFilmes();
    }, [])

    return(

        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;