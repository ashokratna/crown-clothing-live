import React,{Component} from 'react';
import './homepage.style.css';
import { HomePageContainer } from './homepage.style'
import Directory from '../../components/directory/directory.component';

var pathName;
class HomePage extends Component {
    
    constructor(props){
        super(props)

        pathName  = props.history.location.pathname;
        
    }

    componentDidMount(){
        pathName.replace(/\/$/, "");
    }

    render() { 
        return ( 
            <HomePageContainer>
                <Directory />
            </HomePageContainer>
         );
    }
}
 
export default HomePage;

// const HomePage = (props) => {
//     console.log(props)
//     return ( 
        
//      );
// }
 
// export default HomePage;