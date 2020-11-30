
import React from "react";

import './Profile.scss';

class Profile extends React.Component {
    
    constructor (props) {
        super(props);
        
    };
    
    render() {
        return(
            <div className="padre marginTop4">
                <div className="card">
                    <div className="titular">
                        Oferta de Empleo
                    </div>
                </div>
            </div>
        );
    };
    
    
};


export default Profile;