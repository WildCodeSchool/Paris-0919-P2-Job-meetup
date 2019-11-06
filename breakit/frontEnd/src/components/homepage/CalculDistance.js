import React from 'react'

class CalculDistance extends React.Component {
    
    deg2rad = (x) => {
        return Math.PI*x/180
    }
    
    render() {
        
        const earth_radius = 6378137
        const lat1 = 48.849044
        const lng1 = 2.352831
        const lat2 = 14
        const lng2 = 15
        const rlo1 = this.deg2rad(lng1)
        const rla1 = this.deg2rad(lat1)
        const rlo2 = this.deg2rad(lng2);
        const rla2 = this.deg2rad(lat2);
        const dlo = (rlo2 - rlo1) / 2;
        const dla = (rla2 - rla1) / 2;
        const a = (Math.sin(dla) * Math.sin(dla)) + Math.cos(rla1) * Math.cos(rla2) * (Math.sin(dlo) * Math.sin(dlo))
        const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (
            
            earth_radius * d
            
        )
    }
}



  export default CalculDistance