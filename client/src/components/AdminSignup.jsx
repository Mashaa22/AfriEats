import { useContext, useState } from "react"; 
 import { useNavigate, Link } from "react-router-dom"; 
 import Swal from "sweetalert2"; 
 import { AdminContext } from "../App"; 
import { RiAccountCircleFill } from "react-icons/ri";
import { GiPadlock } from "react-icons/gi";
import { GoKey } from "react-icons/go";
  
 // Mock data 
 const mockData = { 
   username: "jebby", 
   email: "admin@example.com", 
   password: "admin123", 
   pin: "ADMIN123", 
 }; 
  
 function AdminLogin() { 
   const navigate = useNavigate(); 
   const [admin, setAdmin] = useContext(AdminContext); 
   const [login, setLogin] = useState({ 
     username: "", 
     email: "", 
     password: "", 
     pin: "", 
   }); 
  
   function handleLogin(event) { 
     event.preventDefault(); 
  
     // Check if the input matches the mock data 
     if ( 
       login.email === mockData.email && 
       login.password === mockData.password 
     ) { 
       setTimeout(() => navigate("/"), 1000); 
       setAdmin(true); 
     } else { 
       Swal.fire({ 
         title: "Wrong password or email", 
         icon: "error", 
         timer: 2000, 
       }); 
     } 
  
     // Reset the input fields 
     setLogin({ 
       username: "", 
       email: "", 
       password: "", 
       pin: "", 
     }); 
   } 
  
   const logoStyle = { 
     position: "absolute", 
     top: 0, 
     left: 0, 
     display: "flex", 
     flexDirection: "row", 
     justifyContent: "flex-start", 
     alignItems: "flex-start", 
     alignSelf: "flex-start", 
     marginBottom: "auto", 
   }; 
  
   const whiteStyle = { 
     color: "white", 
     fontSize: "2rem", 
     fontWeight: "bold", 
     fontFamily: "serif", 
     marginRight: "0.5rem", 
   }; 
  
   const yellowStyle = { 
     color: "yellow", 
     fontSize: "2rem", 
     fontWeight: "bold", 
     fontFamily: "serif", 
   }; 
   console.log(setLogin); 
  
   return ( 
     <section 
       className="h-screen flex items-center justify-center" 
       style={{ 
         backgroundImage: "url('./images/cover.png')", 
         backgroundSize: "cover", 
         backgroundRepeat: "no-repeat", 
       }} 
     > 
       {/* <div style={logoStyle}> 
         <span style={whiteStyle}>Afri</span> 
         <span style={yellowStyle}>Eats</span> 
       </div>  */}
       <div className="flex justify-between h-screen py-12"> 
         <div div className="flex"> 
           {/* Content for the left box */} 
           <div className="md:w-3/4 sm:w-3/4 lg:w-full bg-yellow-500 opacity-75 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mx-4 flex items-center"> 
             <div className="h-full flex justify-center items-center mx-auto text-center"> 
               <div className="text-center"> 
                 <h1 className="text-black font-bold text-4xl mb-16"> 
                   Welcome Back! 
                 </h1> 
                 <p className="text-white m-2 p-2 text-center"> 
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia 
                 illum eius, aspernatur reprehenderit soluta vitae obcaecati 
                 provident sed vel, quam facere fuga quibusdam beatae. 
                 Perferendis molestias corporis omnis aperiam ad! 
               </p> 
                 <div className="text-black font-bold"> 
                   The Best Choice You Will Make! 
                 </div> 
               </div> 
             </div> 
           </div> 
           <div className="h-full w-3/4 flex flex-col items-center justify-center mr-4 px-18 py-50 md:w-full lg:py-0"> 
             <div className="w-full h-full flex justify-center items-center bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0"> 
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> 
                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"> 
                    Admin Login 
                 </h1> 
                 <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}> 
                    <div> 
                       <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email" 
                       >Username</label> 
                       <div className="flex flex-row items-center">
                         <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                           <RiAccountCircleFill />
                         </div>
                         <input 
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                           type="email" 
                           id="email" 
                           value={login.username} 
                           placeholder="username" 
                           onChange={(event) => 
                             setLogin((prevState) => ({ 
                               ...prevState, 
                               email: event.target.value, 
                             })) 
                           } 
                           required 
                         /> 
                       </div>
                    </div> 
                    <div> 
                      <label 
                        className="block mb-2 text-sm font-medium text-gray-900" 
                        htmlFor="password" 
                      >Password</label> 
                      <div className="flex flex-row items-center">
                        <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                          <GiPadlock />
                        </div>
                        <input 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                          type="password" 
                          id="password" 
                          placeholder="Password" 
                          value={login.password} 
                          onChange={(event) => 
                            setLogin((prevState) => ({ 
                              ...prevState, 
                              password: event.target.value, 
                            })) 
                          } 
                          required 
                        /> 
                      </div> 
                    </div>
                   <div className="mb-6"> 
                     <label 
                       className="block text-gray-700 font-bold mb-2" 
                       htmlFor="password" 
                     ></label> 
                      <div className="flex flex-row items-center">
                        <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                          <GoKey />
                        </div>
                        <input 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                          type="pin" 
                          id="pin" 
                          placeholder="Pin" 
                          value={login.pin} 
                          onChange={(event) => 
                            setLogin((prevState) => ({ 
                              ...prevState, 
                              pin: event.target.value, 
                            })) 
                          } 
                          required 
                        /> 
                      </div> 
                   </div>
                   <button 
                     type="submit" 
                     className="w-full bg-yellow-500 font-bold text-gray-800 p-2 rounded-full" 
                   > 
                     Login 
                   </button> 
                   <div className="mt-4 text-center flex flex-col-reverse justify-between"> 
                     <Link 
                       className="text-black-500 hover:text-black-700" 
                       to="/adminsignup " 
                     > 
                        Don't have an account?{" "} Sign up 
                     </Link> 
                     <Link to="/login" className=" mb-2 hover:underline text-black-500"> 
                      Login in as Customer 
                     </Link> 
                   </div> 
                 </form> 
               </div> 
             </div> 
           </div> 
         </div> 
       </div> 
     </section> 
   ); 
 } 
  
export default AdminLogin;