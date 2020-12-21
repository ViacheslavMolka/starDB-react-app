import React, {Component} from 'react';
import Spinner from '../spinner/spiner';
import ErrorBoundry from '../error-boundry/error-boundry';

const withData = (View, getData) => {
    return class extends Component {
  
      state = {
        data: null
      };
    
      componentDidMount() {
        getData()
          .then((data) => {
            data.length = 6;
            this.setState({
              data
            });
          });
      }
      render () {
        const { data } = this.state;
        
        if(!data) {
          return <Spinner />
        };
  
        return ( 
         <ErrorBoundry>
            <View {...this.props} data={data}/>
         </ErrorBoundry>
        );
      };
    };
};

export default withData;