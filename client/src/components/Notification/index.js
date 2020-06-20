// import React from 'react'
// import styled from 'styled-components'


// const Container = styled.div`
// background-color: #000000
// color: white;
// padding: 16px;
// position: absolute;
// top: ${props => props.top}px;
// right: 16px;
// z-index: 999;
// transition: top 0.5s ease;
// `;

// function Notification() {
//    constructor(props){
//        super(props);
      
//        this.state ={
//            top: -100,
//        }
//    },

//    showNotification = () => {
//        this.setState({
//            top: 16,
//        }, () => {
//            setTimeout (() => {
//                this.setState({
//                    top: -100,
//                });
//            }, 3000);

//         });
//    },
   
//    render(){
//     return (
//         <React.Fragment>
//             <Container top={this.state.top}>Added Beer!</Container>
//         </React.Fragment>
//     )
//    }
// }

// export default Notification;