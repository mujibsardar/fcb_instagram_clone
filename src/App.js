import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import Posts from './components/Posts';
    import ApolloClient from 'apollo-boost';
    import { ApolloProvider } from "react-apollo";
    // import pusher module
    import Pusher from 'pusher-js';



    const client = new ApolloClient({
       uri : "http://localhost:4000/graphql"
   })

    class App extends Component {
      constructor(){
        super();
        // connect to pusher
        this.pusher = new Pusher("e8fbb7b7847e079b4ce8", {
         cluster: 'us3',
         encrypted: true
        });
      }
      componentDidMount(){
       
     }
      render() {
        return (
          <ApolloProvider client={client}>
           <div className="App">
             <Header />
             <section className="App-main">
              <Posts pusher={this.pusher} apollo_client={client}/>
             </section>
           </div>
         </ApolloProvider>
        );
      }
    }
    export default App;
