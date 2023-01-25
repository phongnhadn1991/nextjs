const WP_API = process.env.WP_URL;

const fetcher = async (query, {variable} = {}) => {
    console.log('Loading...')
    const res = await fetch(WP_API, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({query, variable})
    })

    const json = await res.json();
    
    if(json) {
        return json
    }
    console.log('Done...')
}

export default fetcher