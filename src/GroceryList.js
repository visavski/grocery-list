import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(item) {
        if (item === '') {
            alert('Please enter an item')
        } else {
        let listArray = this.state.groceryList;
        listArray.push(item)
        this.setState({groceryList: listArray, userInput: ''})
        console.log(listArray)
        }
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    enterBtn(e){
        e.preventDefault
    }

    render() {
        return(
            <div>
                <form onSubmit={this.enterBtn}>
                    <div className="containerTwo">
                        <input type="text" 
                        placeholder="Enter an item..."
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}
                        />
                    </div>

                    <div className="btn">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
                    </div>

                    

                    <div className="btn">
                        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
                    </div>

                    <ul className="containterThree">
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img className="check" src={check} alt="check mark" width='20px'/> 
                                {item}
                                </li>
                        ))}
                    </ul>
                </form>
            </div>
            
        )
    }
}