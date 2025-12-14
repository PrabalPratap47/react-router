import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //             console.log(data);
    //             setData(data)
    //     })
    // })
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='git image' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/prabalpratap47')
    if (!response.ok) {
        throw new Response('Failed to load GitHub data', {
          status: response.status
        })
      }
    
      return response.json()
    

}