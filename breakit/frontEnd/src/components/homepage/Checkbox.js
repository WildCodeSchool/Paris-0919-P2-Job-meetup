import React from 'react'
import './Checkbox.css'

class Checkbox extends React.Component {
    render() {
        return(
            <div>

                    <div class="squaredThree">
                        <input type="checkbox" value="None" id="squaredThree" name="check" checked />
                        <label for="squaredThree"></label>
                    </div>
                

            </div>
        )
    }
}

export default Checkbox 