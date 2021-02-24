import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state={images: [] };

    onSearchSubmit = async (term) =>{

        const response = await axios.get('https://api.unsplash.com/search/photos',{
        
            params: { query: term},

            headers: {
                Authorization:
                'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
            }
        
    });

        this.setState({ images: response.data.results });

        console.log(this.state.images);
    }


    


    render(){
        return(
            <div>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App;