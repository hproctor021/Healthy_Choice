import React, { Component } from "react";


class UserForm extends Component {

    state = {

    }


    render() {
        return(
           <div> Update User Info Form
               <form>
                   <input type='text' placeholder='Name' />
                   <input type='text' placeholder='Email' />
                   <input type='text' placeholder='Phone Number' />
                   <input type='submit' value='Update User Info' />
               </form>

           </div> 
        )
    }
}

export default UserForm;