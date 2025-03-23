"use server"

const fetchFood = async () => {
    const API_KEY = process.env.FOOD_API
    try{
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`)
        if(!response.ok) throw new Error("something went wrong")

        return await response.json()
    } catch(error){
        console.error(error)
        return null;
    }
    
}

export default fetchFood