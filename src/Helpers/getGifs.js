

export const getGifs = async ( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=suP44AJAXv6bck79AUycRE7KBNRfC0yE`;
    const response = await fetch(url);
    const { data } = await response.json();
  
    const gifs = data.map( img => {

        return {
            title: img.title,
            id: img.id,
            url: img.images.original.url,
        }
    })

    return gifs;
}