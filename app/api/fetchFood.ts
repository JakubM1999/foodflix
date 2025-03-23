"use server"

const fetchFood = async () => {
    const API_KEY = process.env.FOOD_API
    try{
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`)
        if(!response.ok) throw new Error("something went wrong")

        const data = await response.json()

        return data.recipes;
    } catch(error){
        console.error(error)
        return null;
    }
    
}

export default fetchFood