import React from 'react' 

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const medals = 'highest medal achieved'

class Hog extends React.Component {

    state = {
        showDetails: false
    }

    showDetails = () => {
        this.setState({ showDetails: true })
    }

    hideDetails = () => {
        this.setState({ showDetails: false })
    }

    render() {
        const { hog } = this.props
        const { name, specialty, greased } = this.props.hog

    // const fileName = props.hog.name.split(' ').join('_').toLowerCase()
    const fileName = name.toLowerCase().replace(/ /g, '_')
    const imageSrc = require(`../hog-imgs/${fileName}.jpg`)
    console.log('imageSrc:', imageSrc)

    return <div style={{width: '281px', border: 'solid 8px pink', margin: '10px'}}>
        <h2>{name}</h2>
        <img style={{border: 'solid 8px pink'}} src={imageSrc} />
        <br />
        {
         this.state.showDetails 
         ? <div>
            <p>Specialty: {specialty}</p> 
            <p>{greased ? 'Greased' : 'Not Greased'}</p>
            <p>Weight: {hog[weight]}</p> 
            <p>Highest Medals: {hog[medals]}</p> 
            <button style={{color: 'pink'}} onClick={this.hideDetails}>▲</button>
           </div>
           : <button style={{color: 'pink'}} onClick={this.showDetails}>▼</button>
        }
    </div>
    }
}


export default Hog