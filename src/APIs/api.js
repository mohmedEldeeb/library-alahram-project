import axios from "axios"
export const fetchData=(url)=>{
    return axios
    .get(url)
    .then((res) => {
      
      return res.data
    }).catch(err=>{
        console.log(err)
      return false
    })
}
