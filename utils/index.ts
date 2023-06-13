export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b360a8b9b5mshc29df5f12d72c17p170df0jsnb23a31e0d0e4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json()

    return result
}