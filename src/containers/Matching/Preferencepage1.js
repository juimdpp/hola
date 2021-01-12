import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Preferencepage extends Component{
    state = {
        movieList: []
    }
    signUpHandler(){
        this.props.history.push('/signup/')
    }
    loginHandler(){
        this.props.history.push('/login/')
    }
    selectHandler(event){
        let param = event.target.name
        if (!this.state.movieList.includes(param)){
            event.target.style.backgroundColor = 'grey'
            this.setState({movieList: this.state.movieList.concat(param)})
        }
        else{
            event.target.style.backgroundColor = null
            this.setState({movieList: this.state.movieList.filter((type)=>{if(type!=param) return type})})
        }
    }
    nextPageHandler(){

    }
    onClickGoBack(){
        this.props.history.push('/main-page/')
    }

    render(){
        console.log(this.state)
        return(
            <div className="Preferencepage">
                <h3>어떤 영화를 좋아하시나요?</h3>
                <input type="checkbox" id="type1" name="horror" value="Horror" onClick={(event) => this.selectHandler(event)}/>
                <label for="horror"> Horror</label><br></br>
                <input type="checkbox" id="type2" name="action" value="Action" onClick={(event) => this.selectHandler(event)}/>
                <label for="action"> Action</label><br></br>
                <input type="checkbox" id="type3" name="romance" value="Romance" onClick={(event) => this.selectHandler(event)}/>
                <label for="romance"> Romance</label><br></br>
                <button onClick={()=>this.nextPageHandler()}>Next</button>
                <button className="GoBack" onClick={()=>this.onClickGoBack()}>Go Back</button>
            </div>
        )
    }
}

export default withRouter(Preferencepage);