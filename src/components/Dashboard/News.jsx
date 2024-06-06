import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    useEffect(() => {
        setIsLoading(true); // Set loading state to true
        setError(null); // Clear potential errors

        fetch('https://newsapi.org/v2/everything?q=ai&apiKey=e9484c5b62024374bac712970554f4c6')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setNews(data);
            })
            .catch(error => {
                setError(error); // Set error state
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after fetching or error
            });

    }, []); // Empty dependency array to fetch data only once

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!news) {
        return <div>No news available.</div>; // Handle case where no news is returned
    }

    const id = Math.floor(Math.random() * news.articles.length)


    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'black',
            height: '500px',
            width: '350px',
            top: '3.8rem',
            left: '64rem',
            display :'flex',
            justifyContent : 'center',
            alignItems : 'center',


        }}>

            {news ?
                <div style={{
                    display: 'flex',
                    flexDirection : 'column',
                    alignItems: 'center',
                    justifyContent :'center',
                    width : '340px'
                }}>
                    <div style={{
                        position : 'relative'
                    }}>
                        <p style={{
                            position : 'absolute',
                            bottom : '0px',
                            color : 'white',
                            fontWeight: '500',
                            fontSize:'24px',
                            padding: '12px',
                            zIndex : '1',
                            backgroundColor: 'black',
                            opacity: '74%'
                        }}>{news.articles[id].title}</p>
                    <img 
                    src={news.articles[id].urlToImage} 
                    alt="AiNews" 
                    style={{ 
                        height: '400px',
                        width: '340px', 
                        display: 'block',
                        borderTopLeftRadius : '25px' ,
                        borderTopRightRadius: '25px'
                        }} />
                    </div>

                    <div style={{
                        backgroundColor : 'white',
                        height : '200px',
                        width: '100%',
                        overflowY: 'auto',
                        borderEndStartRadius : '25px',
                        borderEndEndRadius : '25px'
                    }}>
                        <p style={{
                            color: 'black',
                            fontWeight: 'thin',
                            fontSize : '16px',
                            margin : '20px 0px 15px 0px',
                            padding:'20px'
                            
                        }}>{news.articles[id].description}</p>
                    </div>
                </div>
                :
                <p>Loading....</p>
            }

        </div>
    )
}

export default News
