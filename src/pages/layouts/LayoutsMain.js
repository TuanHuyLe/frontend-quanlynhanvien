// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from '../../components/main/Header'
// import Footer from '../../components/main/Footer'
// import staffApi from '../../api/staffApi'
// import groupApi from '../../api/groupApi'
// import Home from '../view/Main/Home'
// import Contact from '../view/Main/Contact'
// import About from '../view/Main/About'

// // import '../../assets/main/images/favicon.io'
// import '../../assets/main/css/bootstrap.min.css'
// import '../../assets/main/css/ionicons.min.css'
// import '../../assets/main/css/font-awesome.min.css'
// import '../../assets/main/css/pe-icon-7-stroke.css'
// import '../../assets/main/css/plugins.css'
// import '../../assets/main/css/style.css'
// import '../../assets/main/css/responsive.css'
// // import '../../assets/main/js/modernizr-2.8.3.min.js'
// // import '../../assets/main/js/jquery.1.12.4.min.js'
// // import '../../assets/main/js/popper.min.js'
// // import '../../assets/main/js/bootstrap.min.js'
// // import '../../assets/main/js/plugins.js'
// // import '../../assets/main/js/main.js'

// export default ({ children }) => {
//     const [staffs, setstaffs] = useState([]);
//     const [staffsLimit, setstaffsLimit] = useState([]);
//     const [departments, setdepartments] = useState([]);

//     useEffect(() => {
//         const getStaffs = async () => {
//             try {
//                 const { data } = await staffApi.getAll();
//                 setstaffs(data);
//             } catch (error) {

//             }
//         }
//         getStaffs()
//     }, []);

//     useEffect(() => {
//         const getStaffs = async () => {
//             try {
//                 const { data } = await staffApi.getlimit8();
//                 setstaffsLimit(data);
//             } catch (error) {

//             }
//         }
//         getStaffs()
//     }, []);

//     useEffect(() => {
//         const getDepartments = async () => {
//             try {
//                 const { data } = await groupApi.getAll();
//                 setdepartments(data);
//             } catch (error) {

//             }
//         }
//         getDepartments()
//     }, []);

//     return (
//         <div className="user-page">
            
//             <Header departments={departments} />

//             <Route path="/" exact>
//                 <Home staffs={staffsLimit} />
//             </Route>

//             <Route path="/about">
//                 <About />
//             </Route>
            
//             <Route path="/contact">
//                 <Contact />
//             </Route>
//             <Footer />
//         </div>
//     )
// }
