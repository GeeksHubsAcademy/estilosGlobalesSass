
import React from "react";

import './Home.scss';

class Home extends React.Component {
    
    constructor (props) {
        super(props);
        
    };

    clickProfile(){
        this.props.history.push('/profile');
    }
    
    render() {
        return(
            <div className="padre marginTop5">
                <div className="contenedorPrincipal">
                    <div className="cabeceraHome marginTop5">
                    
                    </div>
                    <div className="cuerpoHome marginTop4">
                        <div className="division1 marginRight4">

                        </div>
                        <div className="division2">

                        </div>
                    </div>
                </div>
                <button className="marginTop5" onClick={()=>this.clickProfile()}>PROFILE</button>
            </div>
        );
    };
    
    
};


export default Home;