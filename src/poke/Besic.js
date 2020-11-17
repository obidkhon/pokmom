import React ,{useState ,useEffect}    from 'react'
import axios from 'axios'
import PokemonList from './PokemonList'

import Pagenetion from './Pagenition'

function Besic() {

    const[pokemon,setPokemon]=useState([])

    const [currentPageUrl,setCurrentPageUrl ]=useState("https://pokeapi.co/api/v2/pokemon")

    const [nextPageUrl,setNextPageUrl ]=useState()

    const [prevPageUrl,setPrevPageUrl ]=useState()

const [loading,setLoading]=useState(true)



useEffect(()=>{ 
 setLoading(false)
 let cancel
 axios.get(currentPageUrl,{
   cancelToken: new axios.CancelToken(c=> cancel=c)
 } ).then(res=>{




   setLoading(false)
setNextPageUrl(res.data.next)
setPrevPageUrl(res.data.previous)
    setPokemon(  res.data.results.map(p=>p.name)) 
});

return()=> cancel()


}, [currentPageUrl])


function gotoPrevPage(){
 setCurrentPageUrl(prevPageUrl)
}


function gotoNextPage(){
 setCurrentPageUrl(nextPageUrl)
}



if(loading) return "lodading..."





    return (
        <>
        <div>
            <PokemonList pokemon={pokemon}/>
            <Pagenetion  
    gotoNextPage={  nextPageUrl ?   gotoNextPage: null}
    gotoPrevPage= { prevPageUrl ?    gotoPrevPage: null}  



             />
        </div>
        </>
    )
}

export default Besic
